import React, { useState, useEffect } from 'react'
import { Brain, Play, Settings, Clock, CheckCircle, X } from 'lucide-react'
import { useBPSC } from '../../context/BPSCContext'
import { mcqService } from '../../services/mcqService'
import { contentScanner } from '../../services/contentScanner'
import QuizInterface from './QuizInterface'
import QuizResults from './QuizResults'

function MCQPractice() {
  const { state, startQuiz } = useBPSC()
  const { subjects, currentQuiz } = state
  
  const [availableMCQs, setAvailableMCQs] = useState([])
  const [selectedMCQ, setSelectedMCQ] = useState(null)
  const [quizSettings, setQuizSettings] = useState({
    questionCount: 25,
    randomOrder: true,
    timeLimit: true
  })
  const [showSettings, setShowSettings] = useState(false)
  const [quizResult, setQuizResult] = useState(null)

  useEffect(() => {
    // Load available MCQs
    const mcqs = contentScanner.getAvailableMCQs(subjects)
    setAvailableMCQs(mcqs)
  }, [subjects])

  const handleStartQuiz = async () => {
    if (!selectedMCQ) return

    try {
      // Load MCQ data
      const mcqData = await mcqService.loadMCQData(selectedMCQ.filePath)
      if (!mcqData) {
        alert('Failed to load MCQ data')
        return
      }

      // Prepare quiz with settings
      const quiz = mcqService.prepareQuiz(mcqData, {
        questionCount: quizSettings.questionCount === 'all' ? 'all' : parseInt(quizSettings.questionCount),
        randomOrder: quizSettings.randomOrder
      })

      if (quiz) {
        // Start the quiz using context
        startQuiz(quiz)
      }
    } catch (error) {
      console.error('Error starting quiz:', error)
      alert('Failed to start quiz')
    }
  }

  const handleQuizComplete = (result) => {
    setQuizResult(result)
    setSelectedMCQ(null)
  }

  const handleRetryQuiz = () => {
    setQuizResult(null)
  }

  const handleNewQuiz = () => {
    setQuizResult(null)
    setSelectedMCQ(null)
  }

  // If quiz is active, show quiz interface
  if (currentQuiz) {
    return <QuizInterface onComplete={handleQuizComplete} />
  }

  // If showing results, show results component
  if (quizResult) {
    return (
      <QuizResults 
        result={quizResult}
        onRetry={handleRetryQuiz}
        onNewQuiz={handleNewQuiz}
      />
    )
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="section-title">MCQ Practice</h1>
        <p className="text-secondary-600">
          Practice with available question sets to test your knowledge and improve your performance.
        </p>
      </div>

      {availableMCQs.length === 0 ? (
        <div className="text-center py-16">
          <Brain className="w-16 h-16 mx-auto mb-4 text-secondary-300" />
          <h3 className="text-xl font-semibold text-secondary-800 mb-2">No MCQ Sets Available</h3>
          <p className="text-secondary-600 mb-6">
            MCQ practice will be available once question sets are created for the lectures.
          </p>
          <div className="bg-secondary-50 rounded-lg p-6 max-w-2xl mx-auto text-left">
            <h4 className="font-semibold text-secondary-800 mb-3">To create MCQ sets:</h4>
            <ol className="text-sm text-secondary-600 space-y-1 list-decimal list-inside">
              <li>Add lecture PDFs to the appropriate folder</li>
              <li>Extract text using OCR tools</li>
              <li>Create MCQ JSON files following the specified format</li>
              <li>Questions will appear here automatically</li>
            </ol>
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* MCQ Selection */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-secondary-800 mb-4">Available Question Sets</h2>
            <div className="space-y-4">
              {availableMCQs.map((mcq) => (
                <div
                  key={mcq.id}
                  className={`card cursor-pointer transition-all ${
                    selectedMCQ?.id === mcq.id 
                      ? 'border-primary-300 bg-primary-25 shadow-md' 
                      : 'hover:border-secondary-300 hover:shadow-sm'
                  }`}
                  onClick={() => setSelectedMCQ(mcq)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="bg-primary-600 p-2 rounded-lg">
                          <Brain className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-secondary-800">{mcq.title}</h3>
                          <p className="text-sm text-secondary-600">
                            {mcq.subject} • {mcq.topic} • Lecture {mcq.lectureNumber}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-secondary-600">
                        <span className="flex items-center space-x-1">
                          <Brain className="w-4 h-4" />
                          <span>{mcq.questionCount} Questions</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>~{mcq.questionCount} minutes</span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {selectedMCQ?.id === mcq.id && (
                        <CheckCircle className="w-5 h-5 text-primary-600" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quiz Settings & Start */}
          <div className="space-y-6">
            {/* Settings Card */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-secondary-800">Quiz Settings</h3>
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 hover:bg-secondary-100 rounded-lg transition-colors"
                >
                  <Settings className="w-5 h-5 text-secondary-600" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Number of Questions
                  </label>
                  <select
                    value={quizSettings.questionCount}
                    onChange={(e) => setQuizSettings(prev => ({ ...prev, questionCount: e.target.value }))}
                    className="input-field"
                  >
                    <option value="10">10 Questions</option>
                    <option value="25">25 Questions</option>
                    <option value="50">50 Questions</option>
                    <option value="75">75 Questions</option>
                    <option value="all">All Questions</option>
                  </select>
                </div>

                {showSettings && (
                  <>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="randomOrder"
                        checked={quizSettings.randomOrder}
                        onChange={(e) => setQuizSettings(prev => ({ ...prev, randomOrder: e.target.checked }))}
                        className="mr-3 rounded"
                      />
                      <label htmlFor="randomOrder" className="text-sm text-secondary-700">
                        Random question order
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="timeLimit"
                        checked={quizSettings.timeLimit}
                        onChange={(e) => setQuizSettings(prev => ({ ...prev, timeLimit: e.target.checked }))}
                        className="mr-3 rounded"
                      />
                      <label htmlFor="timeLimit" className="text-sm text-secondary-700">
                        Enable time limit
                      </label>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Selected MCQ Info */}
            {selectedMCQ && (
              <div className="card border-primary-200 bg-primary-25">
                <h4 className="font-semibold text-primary-800 mb-2">Selected Quiz</h4>
                <p className="text-sm text-primary-700 mb-1">{selectedMCQ.title}</p>
                <p className="text-xs text-primary-600 mb-4">
                  {selectedMCQ.questionCount} questions • {selectedMCQ.subject}
                </p>
                
                <button
                  onClick={handleStartQuiz}
                  className="btn btn-primary w-full"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Quiz
                </button>
              </div>
            )}

            {/* Instructions */}
            <div className="card bg-secondary-25">
              <h4 className="font-semibold text-secondary-800 mb-3">How to Practice</h4>
              <ol className="text-sm text-secondary-600 space-y-2 list-decimal list-inside">
                <li>Select a question set from the available options</li>
                <li>Configure your quiz settings (questions, order, time limit)</li>
                <li>Click "Start Quiz" to begin practice</li>
                <li>Answer questions within the time limit</li>
                <li>Review your results and performance</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MCQPractice
