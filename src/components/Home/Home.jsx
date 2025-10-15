import React from 'react'
import { BookOpen, Brain, FileText, TrendingUp, ArrowRight, Play } from 'lucide-react'
import { useBPSC } from '../../context/BPSCContext'
import { useNavigate } from 'react-router-dom'

function Home() {
  const { state, setActiveTab } = useBPSC()
  const navigate = useNavigate()
  const { subjects, progress } = state

  const stats = [
    {
      label: 'Total Lectures',
      value: Object.values(subjects).reduce((sum, subject) => sum + subject.totalLectures, 0),
      icon: BookOpen,
      color: 'bg-blue-500'
    },
    {
      label: 'MCQ Questions',
      value: Object.values(subjects).reduce((sum, subject) => sum + subject.totalMCQs, 0),
      icon: Brain,
      color: 'bg-green-500'
    },
    {
      label: 'Progress',
      value: `${progress.overall}%`,
      icon: TrendingUp,
      color: 'bg-purple-500'
    },
    {
      label: 'Quiz Results',
      value: state.quizResults.length,
      icon: FileText,
      color: 'bg-orange-500'
    }
  ]

  const quickActions = [
    {
      title: 'Start MCQ Practice',
      description: 'Begin practicing with available question sets',
      icon: Brain,
      action: () => { setActiveTab('mcq'); navigate('/mcq-practice') },
      color: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      title: 'Browse Subjects',
      description: 'Explore available study materials',
      icon: BookOpen,
      action: () => { setActiveTab('subjects'); navigate('/subjects') },
      color: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      title: 'Generate Question Paper',
      description: 'Create custom practice papers',
      icon: FileText,
      action: () => { setActiveTab('question-papers'); navigate('/question-paper') },
      color: 'bg-gradient-to-r from-purple-500 to-purple-600'
    },
    {
      title: 'View Progress',
      description: 'Track your study progress and performance',
      icon: TrendingUp,
      action: () => { setActiveTab('progress'); navigate('/progress') },
      color: 'bg-gradient-to-r from-orange-500 to-orange-600'
    }
  ]

  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-secondary-800 mb-4">
          Welcome to <span className="text-gradient">BPSC Preparation Hub</span>
        </h1>
        <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
          Your comprehensive platform for Bihar Public Service Commission examination preparation. 
          Practice MCQs, track progress, and ace your BPSC exam with confidence.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card text-center">
              <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-secondary-800 mb-1">
                {stat.value}
              </div>
              <div className="text-secondary-600 text-sm">
                {stat.label}
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="mb-12">
        <h2 className="section-title text-center">Quick Actions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <button
                key={index}
                onClick={action.action}
                className="card-hover text-left group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${action.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-secondary-800 mb-2 group-hover:text-primary-600 transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-secondary-600 mb-3">
                      {action.description}
                    </p>
                    <div className="flex items-center text-primary-600 text-sm font-medium">
                      Get Started <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Recent Activity or Getting Started */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Available Subjects */}
        <div className="card">
          <h3 className="text-xl font-semibold text-secondary-800 mb-4">Available Subjects</h3>
          <div className="space-y-3">
            {Object.entries(subjects).map(([subjectName, subject]) => (
              <div key={subjectName} className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-medium text-secondary-800">{subjectName}</p>
                    <p className="text-sm text-secondary-600">
                      {subject.totalLectures} lectures • {subject.totalMCQs} MCQs
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-secondary-800">
                    {subject.totalLectures > 0 
                      ? Math.round((subject.completedLectures / subject.totalLectures) * 100)
                      : 0}%
                  </div>
                  <div className="w-16 bg-secondary-200 rounded-full h-2 mt-1">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: subject.totalLectures > 0 
                          ? `${(subject.completedLectures / subject.totalLectures) * 100}%`
                          : '0%'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
            
            {Object.keys(subjects).length === 0 && (
              <div className="text-center py-8 text-secondary-500">
                <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No subjects detected yet.</p>
                <p className="text-sm">Add study materials to get started.</p>
              </div>
            )}
          </div>
        </div>

        {/* Getting Started Guide */}
        <div className="card">
          <h3 className="text-xl font-semibold text-secondary-800 mb-4">Getting Started</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-medium text-secondary-800">Browse Subjects</p>
                <p className="text-sm text-secondary-600">Explore available study materials and lectures</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-medium text-secondary-800">Practice MCQs</p>
                <p className="text-sm text-secondary-600">Take quizzes to test your knowledge</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-medium text-secondary-800">Generate Papers</p>
                <p className="text-sm text-secondary-600">Create custom question papers for practice</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                4
              </div>
              <div>
                <p className="font-medium text-secondary-800">Track Progress</p>
                <p className="text-sm text-secondary-600">Monitor your performance and improvement</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-secondary-200">
              <button 
                onClick={() => { setActiveTab('subjects'); navigate('/subjects') }}
                className="btn btn-primary w-full"
              >
                <Play className="w-4 h-4 mr-2" />
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
