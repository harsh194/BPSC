class ContentScanner {
  constructor() {
    this.basePath = '/mnt/f/BPSC'
    this.cache = new Map()
    this.lastScan = null
  }

  async scanContent() {
    try {
      // Check if we need to rescan (cache for 30 seconds)
      const now = Date.now()
      if (this.lastScan && (now - this.lastScan) < 30000 && this.cache.has('subjects')) {
        return this.cache.get('subjects')
      }

      const subjects = await this.scanSubjects()
      this.cache.set('subjects', subjects)
      this.lastScan = now
      
      return subjects
    } catch (error) {
      console.error('Error scanning content:', error)
      return {}
    }
  }

  async scanSubjects() {
    const subjects = {}
    
    // For now, we know we have HISTORY - in production this would scan the directory
    subjects.HISTORY = await this.scanSubject('HISTORY')
    
    return subjects
  }

  async scanSubject(subjectName) {
    const subject = {
      name: subjectName,
      topics: {},
      totalLectures: 0,
      completedLectures: 0,
      totalMCQs: 0
    }

    // Scan MODERN HISTORY topic
    subject.topics['MODERN HISTORY'] = await this.scanTopic('HISTORY/MODERN HISTORY')
    
    // Calculate subject totals
    Object.values(subject.topics).forEach(topic => {
      subject.totalLectures += topic.totalLectures
      subject.completedLectures += topic.completedLectures
      subject.totalMCQs += topic.totalMCQs
    })

    return subject
  }

  async scanTopic(topicPath) {
    const topic = {
      name: 'MODERN HISTORY',
      lectures: {},
      totalLectures: 0,
      completedLectures: 0,
      totalMCQs: 0
    }

    // Scan lectures 1-13 (we know the structure from analysis)
    for (let i = 1; i <= 13; i++) {
      const lectureData = await this.scanLecture(`${topicPath}/Lecture-${i}`, i)
      if (lectureData) {
        topic.lectures[`Lecture-${i}`] = lectureData
        topic.totalLectures++
        
        if (lectureData.status === 'complete') {
          topic.completedLectures++
        }
        
        topic.totalMCQs += lectureData.mcqCount || 0
      }
    }

    return topic
  }

  async scanLecture(lecturePath, lectureNumber) {
    try {
      const lecture = {
        number: lectureNumber,
        name: `Lecture ${lectureNumber}`,
        topic: '',
        status: 'empty',
        path: lecturePath,
        files: {
          dailyNotes: null,
          classNotes: null,
          dpp: null,
          mcqJson: null,
          extractedText: null
        },
        mcqCount: 0,
        createdDate: null,
        lastModified: null
      }

      // Simulated presence checks (works in browser without FS access)
      const checks = {
        dailyNotes: await this.checkFile(`${lecturePath}/Modern History ${lectureNumber.toString().padStart(2, '0')} Daily Class Notes (English).pdf`),
        classNotes: await this.checkFile(`${lecturePath}/Modern History ${lectureNumber.toString().padStart(2, '0')} Class Notes.pdf`),
        mcqJson: await this.checkFile(`${lecturePath}/MCQ_Questions_Lesson${lectureNumber}.json`),
        extractedText: await this.checkFile(`${lecturePath}/daily_notes_text.txt`)
      }

      if (checks.dailyNotes) {
        lecture.files.dailyNotes = `Modern History ${lectureNumber.toString().padStart(2, '0')} Daily Class Notes (English).pdf`
        lecture.status = 'partial'
      }

      if (checks.classNotes) {
        lecture.files.classNotes = `Modern History ${lectureNumber.toString().padStart(2, '0')} Class Notes.pdf`
      }

      if (checks.extractedText) {
        lecture.files.extractedText = 'daily_notes_text.txt'
      }

      if (checks.mcqJson) {
        lecture.files.mcqJson = `MCQ_Questions_Lesson${lectureNumber}.json`
        lecture.status = 'complete'
        try {
          const mcqData = await this.loadMCQData(`${lecturePath}/MCQ_Questions_Lesson${lectureNumber}.json`)
          if (mcqData) {
            lecture.mcqCount = mcqData.total_questions || 0
            lecture.topic = mcqData.topic || ''
          }
        } catch (error) {
          console.error(`Error loading MCQ data for ${lecturePath}:`, error)
        }
      }

      // If nothing known was found, mark as empty
      if (!checks.dailyNotes && !checks.classNotes && !checks.mcqJson && !checks.extractedText) {
        lecture.status = 'empty'
      }

      return lecture.status !== 'empty' ? lecture : null

    } catch (error) {
      console.error(`Error scanning lecture ${lecturePath}:`, error)
      return null
    }
  }

  async checkFile(filePath) {
    // In a real implementation, this would check if file exists via an API.
    // Here we emulate known files for lectures 1–11 in the repository.
    const m = filePath.match(/HISTORY\/MODERN HISTORY\/Lecture-(\d+)\/(.+)$/)
    if (!m) return false
    const num = parseInt(m[1], 10)
    const name = m[2]
    if (num < 1 || num > 11) return false

    if (name === `MCQ_Questions_Lesson${num}.json`) return true
    if (name === 'daily_notes_text.txt') return true
    if (name.includes('Daily Class Notes (English).pdf')) return true
    if (name.includes('Class Notes.pdf')) return true
    return false
  }

  async loadMCQData(filePath) {
    try {
      const m = filePath.match(/Lecture-(\d+)\/MCQ_Questions_Lesson(\d+)\.json$/)
      if (!m) return null
      const num = parseInt(m[1], 10)
      const map = {
        1: { topic: 'Later Mughals and Provincial Kingdom', total_questions: 75 },
        2: { topic: 'Later Mughals and Provincial Kingdom - 02', total_questions: 80 },
        3: { topic: 'Later Mughals and Provincial Kingdom - 03', total_questions: 90 },
        4: { topic: 'European Company (Advent, 15th‑century Europe)', total_questions: 80 },
        5: { topic: 'European Company 2 (Advent timeline and impacts)', total_questions: 80 },
        6: { topic: 'European Company 03 (Portuguese)', total_questions: 80 },
        7: { topic: 'European Company 04 (Dutch, Danish, French)', total_questions: 80 },
        8: { topic: 'European Company 05 (British)', total_questions: 80 },
        9: { topic: 'Carnatic War (I)', total_questions: 80 },
        10: { topic: 'Carnatic War - 02 (II & III Wars)', total_questions: 80 },
        11: { topic: 'Regional State (Bengal)', total_questions: 80 }
      }
      if (!map[num]) return null
      return {
        lesson: `Modern History - Lecture ${String(num).padStart(2, '0')}`,
        topic: map[num].topic,
        source: `Daily Class Notes (English) - Lecture ${String(num).padStart(2, '0')}`,
        total_questions: map[num].total_questions
      }
    } catch (error) {
      console.error('Error loading MCQ data:', error)
      return null
    }
  }

  // Get statistics for dashboard
  getContentStats(subjects) {
    let totalLectures = 0
    let completedLectures = 0
    let totalMCQs = 0

    Object.values(subjects).forEach(subject => {
      totalLectures += subject.totalLectures
      completedLectures += subject.completedLectures
      totalMCQs += subject.totalMCQs
    })

    return {
      totalLectures,
      completedLectures,
      totalMCQs,
      completionRate: totalLectures > 0 ? Math.round((completedLectures / totalLectures) * 100) : 0
    }
  }

  // Get lectures for a specific topic
  getLecturesForTopic(subjects, subjectName, topicName) {
    try {
      return subjects[subjectName]?.topics[topicName]?.lectures || {}
    } catch (error) {
      console.error('Error getting lectures for topic:', error)
      return {}
    }
  }

  // Get available MCQ files
  getAvailableMCQs(subjects) {
    const mcqs = []
    
    Object.entries(subjects).forEach(([subjectName, subject]) => {
      Object.entries(subject.topics).forEach(([topicName, topic]) => {
        Object.entries(topic.lectures).forEach(([lectureName, lecture]) => {
          if (lecture.files.mcqJson && lecture.mcqCount > 0) {
            mcqs.push({
              id: `${subjectName}-${topicName}-${lectureName}`,
              subject: subjectName,
              topic: topicName,
              lecture: lectureName,
              lectureNumber: lecture.number,
              title: lecture.topic || lecture.name,
              questionCount: lecture.mcqCount,
              filePath: `${lecture.path}/${lecture.files.mcqJson}`
            })
          }
        })
      })
    })

    return mcqs
  }
}

export const contentScanner = new ContentScanner()
