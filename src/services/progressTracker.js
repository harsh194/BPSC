class ProgressTracker {
  constructor() {
    this.storageKey = 'bpsc-progress'
    this.loadProgress()
  }

  loadProgress() {
    try {
      const saved = localStorage.getItem(this.storageKey)
      this.data = saved ? JSON.parse(saved) : {
        completedLectures: new Set(),
        quizResults: [],
        studyTime: {},
        lastAccessed: {}
      }
      
      // Convert arrays back to Sets if needed
      if (Array.isArray(this.data.completedLectures)) {
        this.data.completedLectures = new Set(this.data.completedLectures)
      }
    } catch (error) {
      console.error('Error loading progress:', error)
      this.data = {
        completedLectures: new Set(),
        quizResults: [],
        studyTime: {},
        lastAccessed: {}
      }
    }
  }

  saveProgress() {
    try {
      const dataToSave = {
        ...this.data,
        completedLectures: Array.from(this.data.completedLectures)
      }
      localStorage.setItem(this.storageKey, JSON.stringify(dataToSave))
    } catch (error) {
      console.error('Error saving progress:', error)
    }
  }

  markLectureCompleted(lectureId) {
    this.data.completedLectures.add(lectureId)
    this.data.lastAccessed[lectureId] = Date.now()
    this.saveProgress()
  }

  addQuizResult(result) {
    this.data.quizResults.push({
      ...result,
      timestamp: Date.now(),
      id: `quiz-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    })
    this.saveProgress()
  }

  updateStudyTime(lectureId, timeSpent) {
    if (!this.data.studyTime[lectureId]) {
      this.data.studyTime[lectureId] = 0
    }
    this.data.studyTime[lectureId] += timeSpent
    this.saveProgress()
  }

  calculateProgress(subjects, quizResults = []) {
    const stats = {
      totalLectures: 0,
      completedLectures: 0,
      totalMCQs: 0,
      completedMCQs: 0,
      averageScore: 0,
      totalStudyTime: 0
    }

    const bySubject = {}

    // Calculate subject-wise progress
    Object.entries(subjects).forEach(([subjectName, subject]) => {
      const subjectStats = {
        totalLectures: subject.totalLectures,
        completedLectures: 0,
        totalMCQs: subject.totalMCQs,
        completedMCQs: 0,
        averageScore: 0,
        studyTime: 0,
        progress: 0
      }

      // Count completed lectures for this subject
      Object.entries(subject.topics).forEach(([topicName, topic]) => {
        Object.entries(topic.lectures).forEach(([lectureName, lecture]) => {
          const lectureId = `${subjectName}-${topicName}-${lectureName}`
          
          if (this.data.completedLectures.has(lectureId)) {
            subjectStats.completedLectures++
          }

          if (this.data.studyTime[lectureId]) {
            subjectStats.studyTime += this.data.studyTime[lectureId]
          }
        })
      })

      // Calculate quiz performance for this subject
      const subjectQuizResults = quizResults.filter(result => 
        result.subject === subjectName
      )

      if (subjectQuizResults.length > 0) {
        const totalScore = subjectQuizResults.reduce((sum, result) => sum + result.score, 0)
        subjectStats.averageScore = Math.round(totalScore / subjectQuizResults.length)
        subjectStats.completedMCQs = subjectQuizResults.reduce((sum, result) => 
          sum + (result.totalQuestions || 0), 0
        )
      }

      subjectStats.progress = subjectStats.totalLectures > 0 
        ? Math.round((subjectStats.completedLectures / subjectStats.totalLectures) * 100)
        : 0

      bySubject[subjectName] = subjectStats

      // Add to overall stats
      stats.totalLectures += subjectStats.totalLectures
      stats.completedLectures += subjectStats.completedLectures
      stats.totalMCQs += subjectStats.totalMCQs
      stats.completedMCQs += subjectStats.completedMCQs
      stats.totalStudyTime += subjectStats.studyTime
    })

    // Calculate overall average score
    if (quizResults.length > 0) {
      const totalScore = quizResults.reduce((sum, result) => sum + result.score, 0)
      stats.averageScore = Math.round(totalScore / quizResults.length)
    }

    const overall = stats.totalLectures > 0 
      ? Math.round((stats.completedLectures / stats.totalLectures) * 100)
      : 0

    return {
      overall,
      bySubject,
      stats,
      recentActivity: this.getRecentActivity(),
      weakAreas: this.identifyWeakAreas(quizResults),
      studyStreak: this.calculateStudyStreak()
    }
  }

  getRecentActivity(limit = 10) {
    const activities = []

    // Add recent quiz results
    this.data.quizResults
      .slice(-limit)
      .forEach(result => {
        activities.push({
          type: 'quiz',
          timestamp: result.timestamp,
          description: `Completed quiz: ${result.title}`,
          score: result.score,
          data: result
        })
      })

    // Add recent lecture access
    Object.entries(this.data.lastAccessed)
      .sort(([,a], [,b]) => b - a)
      .slice(0, limit)
      .forEach(([lectureId, timestamp]) => {
        activities.push({
          type: 'lecture',
          timestamp,
          description: `Studied: ${lectureId.replace(/-/g, ' ')}`,
          data: { lectureId }
        })
      })

    return activities
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit)
  }

  identifyWeakAreas(quizResults) {
    const topicScores = {}

    quizResults.forEach(result => {
      const key = `${result.subject}-${result.topic}`
      if (!topicScores[key]) {
        topicScores[key] = { scores: [], total: 0, count: 0 }
      }
      topicScores[key].scores.push(result.score)
      topicScores[key].total += result.score
      topicScores[key].count++
    })

    return Object.entries(topicScores)
      .map(([topic, data]) => ({
        topic,
        averageScore: Math.round(data.total / data.count),
        attemptCount: data.count,
        needsImprovement: (data.total / data.count) < 70
      }))
      .filter(area => area.needsImprovement)
      .sort((a, b) => a.averageScore - b.averageScore)
  }

  calculateStudyStreak() {
    const today = new Date().toDateString()
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString()
    
    let streak = 0
    let currentDate = new Date()
    
    // Check if studied today
    const todayActivities = Object.values(this.data.lastAccessed).some(timestamp => 
      new Date(timestamp).toDateString() === today
    )
    
    if (!todayActivities) {
      // Check if studied yesterday to continue streak
      const yesterdayActivities = Object.values(this.data.lastAccessed).some(timestamp => 
        new Date(timestamp).toDateString() === yesterday
      )
      
      if (!yesterdayActivities) {
        return 0
      }
      
      currentDate = new Date(Date.now() - 24 * 60 * 60 * 1000)
    }

    // Count consecutive days
    while (true) {
      const dateString = currentDate.toDateString()
      const hasActivity = Object.values(this.data.lastAccessed).some(timestamp => 
        new Date(timestamp).toDateString() === dateString
      )
      
      if (hasActivity) {
        streak++
        currentDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000)
      } else {
        break
      }
    }

    return streak
  }

  getPerformanceInsights(quizResults) {
    if (quizResults.length === 0) {
      return {
        trend: 'no-data',
        recommendation: 'Start taking quizzes to track your progress',
        strongAreas: [],
        improvementAreas: []
      }
    }

    // Calculate trend (last 5 vs previous 5)
    const recent = quizResults.slice(-5)
    const previous = quizResults.slice(-10, -5)
    
    let trend = 'stable'
    if (previous.length > 0) {
      const recentAvg = recent.reduce((sum, r) => sum + r.score, 0) / recent.length
      const previousAvg = previous.reduce((sum, r) => sum + r.score, 0) / previous.length
      
      if (recentAvg > previousAvg + 5) trend = 'improving'
      else if (recentAvg < previousAvg - 5) trend = 'declining'
    }

    // Identify strong and weak areas
    const weakAreas = this.identifyWeakAreas(quizResults)
    const strongAreas = Object.entries(
      quizResults.reduce((acc, result) => {
        const key = `${result.subject}-${result.topic}`
        if (!acc[key]) acc[key] = { total: 0, count: 0 }
        acc[key].total += result.score
        acc[key].count++
        return acc
      }, {})
    )
    .map(([topic, data]) => ({
      topic,
      averageScore: Math.round(data.total / data.count)
    }))
    .filter(area => area.averageScore >= 80)
    .sort((a, b) => b.averageScore - a.averageScore)

    let recommendation = ''
    switch (trend) {
      case 'improving':
        recommendation = 'Great progress! Keep up the consistent practice.'
        break
      case 'declining':
        recommendation = 'Consider reviewing weak areas and taking more practice tests.'
        break
      default:
        recommendation = 'Maintain regular practice to improve performance.'
    }

    return {
      trend,
      recommendation,
      strongAreas: strongAreas.slice(0, 3),
      improvementAreas: weakAreas.slice(0, 3)
    }
  }

  exportProgress() {
    return {
      exported: Date.now(),
      data: {
        ...this.data,
        completedLectures: Array.from(this.data.completedLectures)
      }
    }
  }

  importProgress(importedData) {
    try {
      this.data = {
        ...importedData.data,
        completedLectures: new Set(importedData.data.completedLectures)
      }
      this.saveProgress()
      return true
    } catch (error) {
      console.error('Error importing progress:', error)
      return false
    }
  }

  resetProgress() {
    this.data = {
      completedLectures: new Set(),
      quizResults: [],
      studyTime: {},
      lastAccessed: {}
    }
    this.saveProgress()
  }
}

export const progressTracker = new ProgressTracker()