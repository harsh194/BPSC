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

      // Check for different file types based on our known structure
      const fileChecks = await Promise.allSettled([
        this.checkFile(`${lecturePath}/Modern History 0${lectureNumber} Daily Class Notes (English).pdf`),
        this.checkFile(`${lecturePath}/Modern History ${lectureNumber.toString().padStart(2, '0')} Daily Class Notes (English).pdf`),
        this.checkFile(`${lecturePath}/Modern History 0${lectureNumber} Class Notes.pdf`),
        this.checkFile(`${lecturePath}/Modern History ${lectureNumber.toString().padStart(2, '0')} Class Notes.pdf`),
        this.checkFile(`${lecturePath}/MCQ_Questions_Lesson${lectureNumber}.json`),
        this.checkFile(`${lecturePath}/daily_notes_text.txt`)
      ])

      // Parse file existence
      if (fileChecks[0].status === 'fulfilled' || fileChecks[1].status === 'fulfilled') {
        lecture.files.dailyNotes = `Modern History ${lectureNumber.toString().padStart(2, '0')} Daily Class Notes (English).pdf`
        lecture.status = 'partial'
      }

      if (fileChecks[2].status === 'fulfilled' || fileChecks[3].status === 'fulfilled') {
        lecture.files.classNotes = `Modern History ${lectureNumber.toString().padStart(2, '0')} Class Notes.pdf`
      }

      if (fileChecks[4].status === 'fulfilled') {
        lecture.files.mcqJson = `MCQ_Questions_Lesson${lectureNumber}.json`
        lecture.status = 'complete'
        
        // Load MCQ data to get count and topic
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

      if (fileChecks[5].status === 'fulfilled') {
        lecture.files.extractedText = 'daily_notes_text.txt'
      }

      // Special handling for known lectures
      if (lectureNumber === 1) {
        lecture.topic = 'Later Mughals and Provincial Kingdom'
        lecture.mcqCount = 75
        lecture.status = 'complete'
      } else if (lectureNumber <= 11) {
        lecture.status = 'partial' // Has PDFs but no MCQs
      } else {
        lecture.status = 'empty' // Lectures 12-13
      }

      return lecture.status !== 'empty' ? lecture : null

    } catch (error) {
      console.error(`Error scanning lecture ${lecturePath}:`, error)
      return null
    }
  }

  async checkFile(filePath) {
    // In a real implementation, this would check if file exists
    // For now, we'll simulate based on our known structure
    const knownFiles = [
      '/mnt/f/BPSC/HISTORY/MODERN HISTORY/Lecture-1/Modern History 01 Daily Class Notes (English).pdf',
      '/mnt/f/BPSC/HISTORY/MODERN HISTORY/Lecture-1/Modern History 01 Class Notes.pdf',
      '/mnt/f/BPSC/HISTORY/MODERN HISTORY/Lecture-1/MCQ_Questions_Lesson1.json',
      '/mnt/f/BPSC/HISTORY/MODERN HISTORY/Lecture-1/daily_notes_text.txt'
    ]
    
    const fullPath = this.basePath + '/' + filePath
    return knownFiles.includes(fullPath)
  }

  async loadMCQData(filePath) {
    try {
      // In a real implementation, this would fetch the file
      // For now, return mock data for Lecture 1
      if (filePath.includes('Lesson1')) {
        return {
          lesson: "Modern History - Lecture 01",
          topic: "Later Mughals and Provincial Kingdom",
          source: "Daily Class Notes (English) - Lecture 01",
          total_questions: 75
        }
      }
      return null
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
              filePath: lecture.files.mcqJson
            })
          }
        })
      })
    })

    return mcqs
  }
}

export const contentScanner = new ContentScanner()