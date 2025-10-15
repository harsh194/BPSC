import React, { useState } from 'react'
import { TrendingUp, Target, Clock, BookOpen, Brain, Award, Calendar, BarChart3 } from 'lucide-react'
import { useBPSC } from '../../context/BPSCContext'
import { progressTracker } from '../../services/progressTracker'

function Progress() {
  const { state } = useBPSC()
  const { subjects, quizResults, progress } = state
  
  const [selectedTimeframe, setSelectedTimeframe] = useState('all')
  
  const insights = progressTracker.getPerformanceInsights(quizResults)

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getProgressBgColor = (percentage) => {
    if (percentage >= 80) return 'bg-green-500'
    if (percentage >= 60) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const formatTime = (seconds) => {
    if (seconds < 60) return `${seconds}s`
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    if (minutes < 60) return `${minutes}m ${remainingSeconds}s`
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }

  const getRecentQuizzes = () => {
    return quizResults
      .slice(-5)
      .reverse()
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="section-title">Your Progress</h1>
        <p className="text-secondary-600">
          Track your study progress, quiz performance, and identify areas for improvement.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card text-center">
          <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-secondary-800 mb-1">
            {progress.stats.completedLectures}/{progress.stats.totalLectures}
          </div>
          <div className="text-sm text-secondary-600">Lectures Completed</div>
          <div className="mt-2">
            <div className="w-full bg-secondary-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{ 
                  width: `${progress.stats.totalLectures > 0 
                    ? (progress.stats.completedLectures / progress.stats.totalLectures) * 100 
                    : 0}%` 
                }}
              />
            </div>
          </div>
        </div>

        <div className="card text-center">
          <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-secondary-800 mb-1">
            {quizResults.length}
          </div>
          <div className="text-sm text-secondary-600">Quizzes Taken</div>
          <div className="text-xs text-secondary-500 mt-1">
            {progress.stats.completedMCQs} questions answered
          </div>
        </div>

        <div className="card text-center">
          <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-secondary-800 mb-1">
            {progress.stats.averageScore}%
          </div>
          <div className="text-sm text-secondary-600">Average Score</div>
          <div className={`text-xs mt-1 ${getProgressColor(progress.stats.averageScore)}`}>
            {progress.stats.averageScore >= 70 ? 'Good performance' : 'Needs improvement'}
          </div>
        </div>

        <div className="card text-center">
          <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-secondary-800 mb-1">
            {progress.studyStreak}
          </div>
          <div className="text-sm text-secondary-600">Day Study Streak</div>
          <div className="text-xs text-secondary-500 mt-1">
            {progress.studyStreak > 0 ? 'Keep it up!' : 'Start your streak today'}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Progress Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Subject Progress */}
          <div className="card">
            <h2 className="text-xl font-semibold text-secondary-800 mb-6">Subject Progress</h2>
            {Object.keys(subjects).length === 0 ? (
              <div className="text-center py-8 text-secondary-500">
                <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No subjects available yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {Object.entries(subjects).map(([subjectName, subject]) => {
                  const subjectProgress = progress.bySubject[subjectName] || { progress: 0, averageScore: 0, studyTime: 0 }
                  
                  return (
                    <div key={subjectName} className="border border-secondary-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-secondary-800">{subjectName}</h3>
                        <span className={`text-sm font-medium ${getProgressColor(subjectProgress.progress)}`}>
                          {subjectProgress.progress}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-secondary-200 rounded-full h-3 mb-3">
                        <div 
                          className={`h-3 rounded-full transition-all ${getProgressBgColor(subjectProgress.progress)}`}
                          style={{ width: `${subjectProgress.progress}%` }}
                        />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-secondary-600">Lectures</div>
                          <div className="font-medium text-secondary-800">
                            {subjectProgress.completedLectures || 0}/{subject.totalLectures}
                          </div>
                        </div>
                        <div>
                          <div className="text-secondary-600">Avg Score</div>
                          <div className="font-medium text-secondary-800">
                            {subjectProgress.averageScore || 0}%
                          </div>
                        </div>
                        <div>
                          <div className="text-secondary-600">Study Time</div>
                          <div className="font-medium text-secondary-800">
                            {formatTime(subjectProgress.studyTime || 0)}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Recent Quiz Results */}
          <div className="card">
            <h2 className="text-xl font-semibold text-secondary-800 mb-6">Recent Quiz Results</h2>
            {quizResults.length === 0 ? (
              <div className="text-center py-8 text-secondary-500">
                <Brain className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No quiz results yet</p>
                <p className="text-sm">Start taking quizzes to track your performance</p>
              </div>
            ) : (
              <div className="space-y-3">
                {getRecentQuizzes().map((result, index) => (
                  <div key={result.id || index} className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white ${
                        result.score >= 70 ? 'bg-green-500' : result.score >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}>
                        {result.score}
                      </div>
                      <div>
                        <p className="font-medium text-secondary-800">{result.title}</p>
                        <p className="text-sm text-secondary-600">
                          {result.correctAnswers}/{result.totalQuestions} correct • {result.subject}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-secondary-600">
                        {new Date(result.timestamp).toLocaleDateString()}
                      </div>
                      <div className="text-xs text-secondary-500">
                        {formatTime(result.timeTaken || 0)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-6">
          {/* Performance Insights */}
          <div className="card">
            <h3 className="text-lg font-semibold text-secondary-800 mb-4">Performance Insights</h3>
            
            <div className="space-y-4">
              <div className="p-3 bg-secondary-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium text-secondary-800">Trend</span>
                </div>
                <p className="text-sm text-secondary-600 capitalize">
                  {insights.trend === 'no-data' ? 'Take more quizzes to see trends' : insights.trend}
                </p>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-secondary-800">Recommendation</span>
                </div>
                <p className="text-sm text-secondary-600">{insights.recommendation}</p>
              </div>
            </div>
          </div>

          {/* Strong Areas */}
          {insights.strongAreas.length > 0 && (
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-800 mb-4">Strong Areas</h3>
              <div className="space-y-2">
                {insights.strongAreas.map((area, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-green-50 rounded">
                    <span className="text-sm text-secondary-700">{area.topic.replace(/-/g, ' ')}</span>
                    <span className="text-sm font-medium text-green-600">{area.averageScore}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Areas for Improvement */}
          {insights.improvementAreas.length > 0 && (
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-800 mb-4">Areas for Improvement</h3>
              <div className="space-y-2">
                {insights.improvementAreas.map((area, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-red-50 rounded">
                    <span className="text-sm text-secondary-700">{area.topic.replace(/-/g, ' ')}</span>
                    <span className="text-sm font-medium text-red-600">{area.averageScore}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Activity */}
          <div className="card">
            <h3 className="text-lg font-semibold text-secondary-800 mb-4">Recent Activity</h3>
            {progress.recentActivity.length === 0 ? (
              <p className="text-sm text-secondary-500">No recent activity</p>
            ) : (
              <div className="space-y-3">
                {progress.recentActivity.slice(0, 5).map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'quiz' ? 'bg-primary-100' : 'bg-secondary-100'
                    }`}>
                      {activity.type === 'quiz' ? (
                        <Brain className="w-4 h-4 text-primary-600" />
                      ) : (
                        <BookOpen className="w-4 h-4 text-secondary-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-secondary-800">{activity.description}</p>
                      <p className="text-xs text-secondary-500">
                        {new Date(activity.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                    {activity.score && (
                      <span className="text-sm font-medium text-primary-600">{activity.score}%</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress