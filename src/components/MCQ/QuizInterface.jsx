import React, { useState, useEffect } from 'react'
import { Clock, ChevronLeft, ChevronRight, Flag, CheckCircle } from 'lucide-react'
import { useBPSC } from '../../context/BPSCContext'
import { mcqService } from '../../services/mcqService'
import { progressTracker } from '../../services/progressTracker'

function QuizInterface({ onComplete }) {
  const { state, answerQuestion, nextQuestion, completeQuiz } = useBPSC()
  const { currentQuiz } = state
  
  const [timeRemaining, setTimeRemaining] = useState(currentQuiz?.timeLimit || 0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set())
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false)

  const currentQuestion = currentQuiz?.questions[currentQuestionIndex]
  const totalQuestions = currentQuiz?.questions.length || 0
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1

  // Timer effect
  useEffect(() => {
    if (timeRemaining <= 0) {
      handleSubmitQuiz()
      return
    }

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleSubmitQuiz()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timeRemaining])

  // Load existing answer when question changes
  useEffect(() => {
    if (currentQuestion) {
      const existingAnswer = currentQuiz.answers[currentQuestion.id] || ''
      setSelectedAnswer(existingAnswer)
    }
  }, [currentQuestionIndex, currentQuestion, currentQuiz.answers])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer)
    answerQuestion(currentQuestion.id, answer)
    setAnsweredQuestions(prev => new Set(prev).add(currentQuestion.id))
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

  const handleSubmitQuiz = () => {
    const result = mcqService.calculateScore(currentQuiz, currentQuiz.answers)
    
    // Add to progress tracker
    progressTracker.addQuizResult({
      quizId: currentQuiz.id,
      title: currentQuiz.title,
      subject: currentQuiz.subject,
      topic: currentQuiz.topic,
      score: result.percentage,
      totalQuestions: result.totalQuestions,
      correctAnswers: result.correctAnswers,
      timeTaken: currentQuiz.timeLimit - timeRemaining,
      results: result.results
    })

    completeQuiz(result.percentage)
    onComplete(result)
  }

  const getAnsweredCount = () => {
    return Object.keys(currentQuiz.answers).length
  }

  if (!currentQuiz || !currentQuestion) {
    return (
      <div className="container py-8">
        <div className="text-center">
          <p className="text-secondary-600">Loading quiz...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Quiz Header */}
      <div className="bg-white border-b border-secondary-200 sticky top-0 z-10">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-secondary-800">{currentQuiz.title}</h1>
              <p className="text-sm text-secondary-600">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Progress */}
              <div className="text-sm text-secondary-600">
                Answered: {getAnsweredCount()}/{totalQuestions}
              </div>
              
              {/* Timer */}
              <div className="flex items-center space-x-2 bg-secondary-100 px-3 py-2 rounded-lg">
                <Clock className="w-4 h-4 text-secondary-600" />
                <span className={`font-mono text-sm ${timeRemaining < 300 ? 'text-red-600' : 'text-secondary-800'}`}>
                  {formatTime(timeRemaining)}
                </span>
              </div>
              
              {/* Submit Button */}
              <button
                onClick={() => setShowConfirmSubmit(true)}
                className="btn btn-primary"
              >
                Submit Quiz
              </button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-secondary-200 rounded-full h-2">
              <div 
                className="progress-fill"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Question Content */}
          <div className="lg:col-span-3">
            <div className="card">
              {/* Question */}
              <div className="mb-6">
                <div className="flex items-start space-x-3 mb-4">
                  <span className="bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-lg min-w-[2rem] text-center">
                    {currentQuestionIndex + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-lg text-secondary-800 leading-relaxed">
                      {currentQuestion.question}
                    </p>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {Object.entries(currentQuestion.options).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => handleAnswerSelect(key)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedAnswer === key
                        ? 'border-primary-300 bg-primary-50'
                        : 'border-secondary-200 hover:border-secondary-300 hover:bg-secondary-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                        selectedAnswer === key
                          ? 'border-primary-600 bg-primary-600 text-white'
                          : 'border-secondary-300 text-secondary-600'
                      }`}>
                        {key}
                      </span>
                      <span className="text-secondary-800">{value}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="btn btn-outline disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </button>

                {isLastQuestion ? (
                  <button
                    onClick={() => setShowConfirmSubmit(true)}
                    className="btn btn-primary"
                  >
                    Submit Quiz
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="btn btn-primary"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Question Navigator */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="font-semibold text-secondary-800 mb-4">Questions</h3>
              <div className="grid grid-cols-5 gap-2">
                {currentQuiz.questions.map((question, index) => {
                  const isAnswered = currentQuiz.answers[question.id]
                  const isCurrent = index === currentQuestionIndex
                  
                  return (
                    <button
                      key={question.id}
                      onClick={() => setCurrentQuestionIndex(index)}
                      className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                        isCurrent
                          ? 'bg-primary-600 text-white'
                          : isAnswered
                          ? 'bg-green-100 text-green-700 border border-green-300'
                          : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                      }`}
                    >
                      {index + 1}
                    </button>
                  )
                })}
              </div>
              
              <div className="mt-4 pt-4 border-t border-secondary-200">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-100 border border-green-300 rounded"></div>
                    <span className="text-secondary-600">Answered</span>
                  </div>
                  <span className="text-secondary-800 font-medium">
                    {getAnsweredCount()}/{totalQuestions}
                  </span>
                </div>
              </div>
            </div>

            <div className="card bg-secondary-25">
              <h4 className="font-semibold text-secondary-800 mb-2">Quiz Info</h4>
              <div className="space-y-2 text-sm text-secondary-600">
                <div className="flex justify-between">
                  <span>Subject:</span>
                  <span className="text-secondary-800">{currentQuiz.subject}</span>
                </div>
                <div className="flex justify-between">
                  <span>Topic:</span>
                  <span className="text-secondary-800">{currentQuiz.topic}</span>
                </div>
                <div className="flex justify-between">
                  <span>Questions:</span>
                  <span className="text-secondary-800">{totalQuestions}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showConfirmSubmit && (
        <div className="modal-backdrop">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold text-secondary-800 mb-4">Submit Quiz?</h3>
            <p className="text-secondary-600 mb-2">
              You have answered {getAnsweredCount()} out of {totalQuestions} questions.
            </p>
            {getAnsweredCount() < totalQuestions && (
              <p className="text-orange-600 text-sm mb-4">
                ⚠️ {totalQuestions - getAnsweredCount()} questions remain unanswered.
              </p>
            )}
            <div className="flex space-x-3">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="btn btn-outline flex-1"
              >
                Continue Quiz
              </button>
              <button
                onClick={handleSubmitQuiz}
                className="btn btn-primary flex-1"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuizInterface