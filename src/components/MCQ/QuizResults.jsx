import React, { useState } from 'react'
import { Trophy, Target, Clock, RotateCcw, Plus, CheckCircle, X, Eye, EyeOff } from 'lucide-react'
import { mcqService } from '../../services/mcqService'

function QuizResults({ result, onRetry, onNewQuiz }) {
  const [showDetailedResults, setShowDetailedResults] = useState(false)
  const [showAnswers, setShowAnswers] = useState(false)

  const performance = mcqService.getPerformanceGrade(result.percentage)
  const timeTakenMinutes = Math.floor(result.timeTaken / 60)
  const timeTakenSeconds = result.timeTaken % 60

  const getOptionClass = (question, optionKey) => {
    const isUserAnswer = question.userAnswer === optionKey
    const isCorrectAnswer = question.correctAnswer === optionKey
    
    if (isCorrectAnswer) {
      return 'bg-green-100 border-green-300 text-green-800'
    } else if (isUserAnswer && !isCorrectAnswer) {
      return 'bg-red-100 border-red-300 text-red-800'
    }
    return 'bg-secondary-50 border-secondary-200 text-secondary-700'
  }

  return (
    <div className="container py-8">
      {/* Results Header */}
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
          result.percentage >= 70 ? 'bg-green-100' : result.percentage >= 50 ? 'bg-yellow-100' : 'bg-red-100'
        }`}>
          <Trophy className={`w-10 h-10 ${
            result.percentage >= 70 ? 'text-green-600' : result.percentage >= 50 ? 'text-yellow-600' : 'text-red-600'
          }`} />
        </div>
        
        <h1 className="text-3xl font-bold text-secondary-800 mb-2">Quiz Complete!</h1>
        <p className="text-secondary-600">Here's how you performed</p>
      </div>

      {/* Score Card */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="card bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className={`text-4xl font-bold mb-2 ${performance.color}`}>
                {result.percentage}%
              </div>
              <div className="text-sm text-secondary-600">Overall Score</div>
              <div className={`text-lg font-semibold ${performance.color}`}>
                Grade: {performance.grade}
              </div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                {result.correctAnswers}
              </div>
              <div className="text-sm text-secondary-600">Correct Answers</div>
              <div className="text-secondary-800">
                out of {result.totalQuestions}
              </div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">
                {result.totalQuestions - result.correctAnswers}
              </div>
              <div className="text-sm text-secondary-600">Incorrect</div>
              <div className="text-secondary-800">
                Need improvement
              </div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {timeTakenMinutes}:{timeTakenSeconds.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-secondary-600">Time Taken</div>
              <div className="text-secondary-800">
                Average: {Math.round(result.timeTaken / result.totalQuestions)}s/Q
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-primary-200">
            <div className="text-center">
              <p className={`text-lg font-semibold ${performance.color}`}>
                {performance.message}
              </p>
              {result.percentage < 70 && (
                <p className="text-sm text-secondary-600 mt-2">
                  Keep practicing to improve your score. Focus on the questions you got wrong.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <button
            onClick={onRetry}
            className="btn btn-outline flex items-center justify-center"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Retry Quiz
          </button>
          
          <button
            onClick={() => setShowDetailedResults(!showDetailedResults)}
            className="btn btn-secondary flex items-center justify-center"
          >
            <Target className="w-4 h-4 mr-2" />
            View Details
          </button>
          
          <button
            onClick={onNewQuiz}
            className="btn btn-primary flex items-center justify-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Quiz
          </button>
        </div>
      </div>

      {/* Detailed Results */}
      {showDetailedResults && (
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-secondary-800">Detailed Results</h2>
              <button
                onClick={() => setShowAnswers(!showAnswers)}
                className="btn btn-outline btn-sm flex items-center"
              >
                {showAnswers ? (
                  <>
                    <EyeOff className="w-4 h-4 mr-2" />
                    Hide Answers
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 mr-2" />
                    Show Answers
                  </>
                )}
              </button>
            </div>

            {/* Summary Stats */}
            <div className="grid md:grid-cols-3 gap-4 mb-8 p-4 bg-secondary-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{result.correctAnswers}</div>
                <div className="text-sm text-secondary-600">Correct</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {result.totalQuestions - result.correctAnswers}
                </div>
                <div className="text-sm text-secondary-600">Incorrect</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-600">
                  {Math.round((result.correctAnswers / result.totalQuestions) * 100)}%
                </div>
                <div className="text-sm text-secondary-600">Accuracy</div>
              </div>
            </div>

            {/* Question by Question Results */}
            <div className="space-y-4">
              {result.results.map((question, index) => (
                <div
                  key={question.questionId}
                  className={`border rounded-lg p-4 ${
                    question.isCorrect ? 'border-green-200 bg-green-25' : 'border-red-200 bg-red-25'
                  }`}
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        question.isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                      }`}>
                        {question.isCorrect ? <CheckCircle className="w-4 h-4" /> : <X className="w-4 h-4" />}
                      </span>
                      <span className="text-sm font-medium text-secondary-600">
                        Question {index + 1}
                      </span>
                    </div>
                    <span className={`text-sm font-medium ${
                      question.isCorrect ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {question.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>

                  {/* Question Text */}
                  <p className="text-secondary-800 mb-4">{question.question}</p>

                  {/* Options */}
                  {showAnswers && (
                    <div className="space-y-2">
                      {Object.entries(question.options).map(([key, value]) => (
                        <div
                          key={key}
                          className={`p-3 rounded-lg border-2 ${getOptionClass(question, key)}`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="font-medium">{key}.</span>
                            <span>{value}</span>
                            {question.userAnswer === key && !question.isCorrect && (
                              <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">
                                Your answer
                              </span>
                            )}
                            {question.correctAnswer === key && (
                              <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                                Correct answer
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Answer Summary */}
                  {!showAnswers && (
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-secondary-600">
                        Your answer: <span className="font-medium">{question.userAnswer || 'Not answered'}</span>
                      </span>
                      {!question.isCorrect && (
                        <span className="text-secondary-600">
                          Correct answer: <span className="font-medium text-green-600">{question.correctAnswer}</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuizResults