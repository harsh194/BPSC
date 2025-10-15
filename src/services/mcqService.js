class MCQService {
  constructor() {
    this.cache = new Map()
  }

  async loadMCQData(filePath) {
    try {
      // Check cache first
      if (this.cache.has(filePath)) {
        return this.cache.get(filePath)
      }

      // Attempt to fetch the JSON from the app root (spaces encoded)
      const url = '/' + filePath.replace(/^\/?/, '')
      const resp = await fetch(encodeURI(url))
      if (resp.ok) {
        const data = await resp.json()
        // normalize keys if needed
        if (!data.questions && Array.isArray(data.Questions)) {
          data.questions = data.Questions
        }
        this.cache.set(filePath, data)
        return data
      }

      // Fallback: Lecture 1 mock data if path matches
      if (filePath.includes('Lesson1') || filePath.includes('Lecture-1')) {
        const mockData = await this.getMockLecture1Data()
        this.cache.set(filePath, mockData)
        return mockData
      }

      return null
    } catch (error) {
      console.error('Error loading MCQ data:', error)
      return null
    }
  }

  async getMockLecture1Data() {
    // This simulates the actual JSON structure from the file
    return {
      lesson: "Modern History - Lecture 01",
      topic: "Later Mughals and Provincial Kingdom",
      source: "Daily Class Notes (English) - Lecture 01",
      total_questions: 75,
      questions: [
        {
          id: 1,
          question: "In which month and year did Aurangzeb die?",
          options: {
            A: "February 1707",
            B: "March 1707",
            C: "April 1707",
            D: "January 1708"
          },
          correct_answer: "B"
        },
        {
          id: 2,
          question: "What was the real name of Bahadur Shah I?",
          options: {
            A: "Muhammad Azam Shah",
            B: "Muazzam",
            C: "Muhammad Kam Bakhsh",
            D: "Sultan Mohammad"
          },
          correct_answer: "B"
        },
        {
          id: 3,
          question: "The regnal title of Bahadur Shah I was:",
          options: {
            A: "Shah Alam I",
            B: "Shah Alam II",
            C: "Alamgir II",
            D: "Shah-e-Bekhabar"
          },
          correct_answer: "A"
        },
        {
          id: 4,
          question: "The historian who gave Bahadur Shah I the nickname 'Shah-e-Bekhabar' was:",
          options: {
            A: "Aurangzeb",
            B: "Khafi Khan",
            C: "Durgadas Rathore",
            D: "Muhammad Azam Shah"
          },
          correct_answer: "B"
        },
        {
          id: 5,
          question: "The Battle of Jajau was fought on:",
          options: {
            A: "20 June 1707",
            B: "21 June 1707",
            C: "19 June 1707",
            D: "22 June 1707"
          },
          correct_answer: "A"
        },
        {
          id: 6,
          question: "Who were the main contestants in the War of Succession after Aurangzeb's death?",
          options: {
            A: "Muazzam and Azam Shah only",
            B: "Muazzam, Azam Shah, and Kam Bakhsh",
            C: "Azam Shah and Kam Bakhsh only",
            D: "Muazzam and Kam Bakhsh only"
          },
          correct_answer: "B"
        },
        {
          id: 7,
          question: "Bahadur Shah I ruled the Mughal Empire for:",
          options: {
            A: "3 years",
            B: "4 years",
            C: "5 years",
            D: "6 years"
          },
          correct_answer: "C"
        },
        {
          id: 8,
          question: "Which son of Aurangzeb was killed in the Battle of Jajau?",
          options: {
            A: "Muazzam",
            B: "Muhammad Azam Shah",
            C: "Muhammad Kam Bakhsh",
            D: "None of them"
          },
          correct_answer: "B"
        },
        {
          id: 9,
          question: "The Later Mughal period is generally considered to begin with:",
          options: {
            A: "Death of Shah Jahan",
            B: "Death of Aurangzeb",
            C: "Accession of Bahadur Shah I",
            D: "Battle of Plassey"
          },
          correct_answer: "B"
        },
        {
          id: 10,
          question: "Bahadur Shah I's policy towards the Marathas was:",
          options: {
            A: "Completely hostile",
            B: "Reconciliatory",
            C: "Neutral",
            D: "Aggressive expansion"
          },
          correct_answer: "B"
        }
        // Note: In the actual implementation, all 75 questions would be included
      ],
      answer_key: {
        "1": "B", "2": "B", "3": "A", "4": "B", "5": "A", 
        "6": "B", "7": "C", "8": "B", "9": "B", "10": "B"
      }
    }
  }

  shuffleArray(array) {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  prepareQuiz(mcqData, options = {}) {
    const {
      questionCount = 'all',
      randomOrder = false,
      includeExplanations = false
    } = options

    if (!mcqData || !mcqData.questions) {
      return null
    }

    let questions = [...mcqData.questions]

    // Shuffle questions if random order is requested
    if (randomOrder) {
      questions = this.shuffleArray(questions)
    }

    // Limit question count
    if (questionCount !== 'all' && typeof questionCount === 'number') {
      questions = questions.slice(0, questionCount)
    }

    // Shuffle options for each question (optional)
    questions = questions.map(question => ({
      ...question,
      options: randomOrder ? this.shuffleQuestionOptions(question) : question.options
    }))

    return {
      id: `quiz-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title: mcqData.lesson || 'Practice Quiz',
      subject: this.extractSubjectFromLesson(mcqData.lesson),
      topic: mcqData.topic || 'General',
      source: mcqData.source,
      totalQuestions: questions.length,
      questions,
      answerKey: mcqData.answer_key,
      timeLimit: questions.length * 60, // 1 minute per question in seconds
      createdAt: Date.now()
    }
  }

  shuffleQuestionOptions(question) {
    // For now, we'll keep the original options order to maintain answer key validity
    // In a more sophisticated implementation, we'd update the answer key accordingly
    return question.options
  }

  extractSubjectFromLesson(lesson) {
    if (lesson.includes('History')) return 'HISTORY'
    if (lesson.includes('Geography')) return 'GEOGRAPHY'
    if (lesson.includes('Polity')) return 'POLITY'
    return 'GENERAL'
  }

  calculateScore(quiz, userAnswers) {
    if (!quiz || !quiz.questions || !userAnswers) {
      return { score: 0, totalQuestions: 0, correctAnswers: 0, percentage: 0 }
    }

    let correctAnswers = 0
    const totalQuestions = quiz.questions.length
    const results = []

    quiz.questions.forEach(question => {
      const userAnswer = userAnswers[question.id]
      const correctAnswer = question.correct_answer
      const isCorrect = userAnswer === correctAnswer

      if (isCorrect) {
        correctAnswers++
      }

      results.push({
        questionId: question.id,
        question: question.question,
        userAnswer,
        correctAnswer,
        isCorrect,
        options: question.options
      })
    })

    const percentage = Math.round((correctAnswers / totalQuestions) * 100)

    return {
      score: percentage,
      totalQuestions,
      correctAnswers,
      percentage,
      results,
      timeTaken: 0, // To be calculated by the quiz component
      completedAt: Date.now()
    }
  }

  getPerformanceGrade(percentage) {
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-600', message: 'Excellent!' }
    if (percentage >= 80) return { grade: 'A', color: 'text-green-500', message: 'Very Good!' }
    if (percentage >= 70) return { grade: 'B+', color: 'text-blue-500', message: 'Good!' }
    if (percentage >= 60) return { grade: 'B', color: 'text-blue-400', message: 'Above Average' }
    if (percentage >= 50) return { grade: 'C', color: 'text-yellow-500', message: 'Average' }
    if (percentage >= 40) return { grade: 'D', color: 'text-orange-500', message: 'Below Average' }
    return { grade: 'F', color: 'text-red-500', message: 'Needs Improvement' }
  }

  generateQuestionPaper(mcqDataSources, options = {}) {
    const {
      totalQuestions = 100,
      timeLimit = 120, // in minutes
      title = 'BPSC Mock Test',
      includeAnswerKey = true,
      randomOrder = true
    } = options

    const allQuestions = []

    // Collect questions from all sources
    mcqDataSources.forEach(mcqData => {
      if (mcqData && mcqData.questions) {
        allQuestions.push(...mcqData.questions.map(q => ({
          ...q,
          source: mcqData.lesson || mcqData.topic
        })))
      }
    })

    if (allQuestions.length === 0) {
      return null
    }

    // Shuffle and select questions
    let selectedQuestions = randomOrder 
      ? this.shuffleArray(allQuestions) 
      : allQuestions

    selectedQuestions = selectedQuestions.slice(0, totalQuestions)

    // Renumber questions for the paper
    selectedQuestions = selectedQuestions.map((question, index) => ({
      ...question,
      paperQuestionNumber: index + 1
    }))

    return {
      id: `paper-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title,
      instructions: [
        `Total Questions: ${selectedQuestions.length}`,
        `Time Limit: ${timeLimit} minutes`,
        'Choose the best answer for each question',
        'Each question carries equal marks',
        'There is no negative marking'
      ],
      questions: selectedQuestions,
      timeLimit: timeLimit * 60, // Convert to seconds
      totalQuestions: selectedQuestions.length,
      answerKey: includeAnswerKey ? this.generateAnswerKey(selectedQuestions) : null,
      createdAt: Date.now()
    }
  }

  generateAnswerKey(questions) {
    const answerKey = {}
    questions.forEach(question => {
      answerKey[question.paperQuestionNumber || question.id] = question.correct_answer
    })
    return answerKey
  }

  exportQuestionPaper(paper, format = 'html') {
    if (format === 'html') {
      return this.generateHTMLPaper(paper)
    }
    // Other formats can be added later
    return null
  }

  generateHTMLPaper(paper) {
    const questionsHTML = paper.questions.map(question => `
      <div class="question-block">
        <p class="question-number">${question.paperQuestionNumber}.</p>
        <p class="question-text">${question.question}</p>
        <div class="options">
          <div class="option">(A) ${question.options.A}</div>
          <div class="option">(B) ${question.options.B}</div>
          <div class="option">(C) ${question.options.C}</div>
          <div class="option">(D) ${question.options.D}</div>
        </div>
      </div>
    `).join('')

    const answerKeyHTML = paper.answerKey ? `
      <div class="answer-key-section">
        <h3>Answer Key</h3>
        <div class="answer-grid">
          ${Object.entries(paper.answerKey).map(([qNum, answer]) => 
            `<span>${qNum}. ${answer}</span>`
          ).join('')}
        </div>
      </div>
    ` : ''

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${paper.title}</title>
        <style>
          body { font-family: 'Times New Roman', serif; max-width: 800px; margin: 0 auto; padding: 20px; }
          .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #000; padding-bottom: 15px; }
          .instructions { margin-bottom: 25px; }
          .question-block { margin-bottom: 20px; page-break-inside: avoid; }
          .question-number { font-weight: bold; display: inline; }
          .question-text { display: inline; margin-left: 5px; }
          .options { margin-left: 20px; margin-top: 5px; }
          .option { margin-bottom: 3px; }
          .answer-key-section { margin-top: 40px; page-break-before: always; }
          .answer-grid { display: grid; grid-template-columns: repeat(10, 1fr); gap: 10px; margin-top: 15px; }
          @media print { .no-print { display: none; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${paper.title}</h1>
          <p>Time: ${Math.floor(paper.timeLimit / 60)} minutes | Questions: ${paper.totalQuestions}</p>
        </div>
        
        <div class="instructions">
          <h3>Instructions:</h3>
          <ul>
            ${paper.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
          </ul>
        </div>
        
        <div class="questions">
          ${questionsHTML}
        </div>
        
        ${answerKeyHTML}
      </body>
      </html>
    `
  }
}

export const mcqService = new MCQService()
