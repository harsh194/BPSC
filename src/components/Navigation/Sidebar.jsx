import React from 'react'
import { 
  Home, 
  BookOpen, 
  Brain, 
  FileText, 
  TrendingUp,
  ChevronRight,
  Circle,
  CheckCircle2
} from 'lucide-react'
import { useBPSC } from '../../context/BPSCContext'
import { clsx } from 'clsx'

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'subjects', label: 'Subjects', icon: BookOpen },
  { id: 'mcq', label: 'MCQ Practice', icon: Brain },
  { id: 'question-papers', label: 'Question Papers', icon: FileText },
  { id: 'progress', label: 'Progress', icon: TrendingUp },
]

function Sidebar() {
  const { state, setActiveTab, setCurrentSubject, setCurrentTopic, setSidebarOpen } = useBPSC()
  const { activeTab, sidebarOpen, subjects, currentSubject, currentTopic } = state

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
    setSidebarOpen(false) // Close sidebar on mobile after selection
  }

  const handleSubjectClick = (subjectName) => {
    setCurrentSubject(currentSubject === subjectName ? null : subjectName)
  }

  const handleTopicClick = (topicName) => {
    setCurrentTopic(currentTopic === topicName ? null : topicName)
    setActiveTab('subjects')
  }

  return (
    <aside className={clsx(
      "bg-white border-r border-secondary-200 w-80 flex-shrink-0 overflow-y-auto transition-transform duration-300 ease-in-out",
      "fixed lg:static inset-y-0 left-0 z-30",
      sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    )}>
      <div className="p-4">
        {/* Navigation Menu */}
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={clsx(
                  "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors",
                  isActive 
                    ? "bg-primary-50 text-primary-700 border border-primary-200" 
                    : "text-secondary-700 hover:bg-secondary-100"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Subjects Explorer */}
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-secondary-800 uppercase tracking-wide mb-3">
            Study Materials
          </h3>
          
          <div className="space-y-2">
            {Object.entries(subjects).map(([subjectName, subject]) => (
              <div key={subjectName} className="border border-secondary-200 rounded-lg">
                {/* Subject Header */}
                <button
                  onClick={() => handleSubjectClick(subjectName)}
                  className="w-full flex items-center justify-between p-3 hover:bg-secondary-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-4 h-4 text-secondary-600" />
                    <div className="text-left">
                      <p className="font-medium text-secondary-800">{subjectName}</p>
                      <p className="text-xs text-secondary-600">
                        {subject.completedLectures}/{subject.totalLectures} lectures
                      </p>
                    </div>
                  </div>
                  <ChevronRight 
                    className={clsx(
                      "w-4 h-4 text-secondary-400 transition-transform",
                      currentSubject === subjectName && "rotate-90"
                    )} 
                  />
                </button>

                {/* Topics */}
                {currentSubject === subjectName && (
                  <div className="border-t border-secondary-200 bg-secondary-25">
                    {Object.entries(subject.topics).map(([topicName, topic]) => (
                      <div key={topicName}>
                        <button
                          onClick={() => handleTopicClick(topicName)}
                          className="w-full flex items-center justify-between p-3 pl-6 hover:bg-secondary-50 transition-colors border-b border-secondary-100 last:border-b-0"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary-400 rounded-full" />
                            <div className="text-left">
                              <p className="font-medium text-sm text-secondary-700">{topicName}</p>
                              <p className="text-xs text-secondary-500">
                                {topic.completedLectures}/{topic.totalLectures} completed
                              </p>
                            </div>
                          </div>
                          <ChevronRight 
                            className={clsx(
                              "w-3 h-3 text-secondary-400 transition-transform",
                              currentTopic === topicName && "rotate-90"
                            )} 
                          />
                        </button>

                        {/* Lectures */}
                        {currentTopic === topicName && (
                          <div className="bg-secondary-50 border-t border-secondary-200">
                            {Object.entries(topic.lectures).map(([lectureName, lecture]) => (
                              <div 
                                key={lectureName}
                                className="flex items-center space-x-3 p-3 pl-12 border-b border-secondary-100 last:border-b-0"
                              >
                                {lecture.status === 'complete' ? (
                                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                                ) : lecture.status === 'partial' ? (
                                  <Circle className="w-4 h-4 text-yellow-500" />
                                ) : (
                                  <Circle className="w-4 h-4 text-secondary-300" />
                                )}
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-secondary-700">
                                    {lecture.name}
                                  </p>
                                  {lecture.topic && (
                                    <p className="text-xs text-secondary-500">{lecture.topic}</p>
                                  )}
                                  {lecture.mcqCount > 0 && (
                                    <p className="text-xs text-primary-600">
                                      {lecture.mcqCount} MCQs available
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-6 p-3 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg">
            <h4 className="text-sm font-semibold text-primary-800 mb-2">Quick Stats</h4>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-primary-700">Total Lectures:</span>
                <span className="font-medium text-primary-800">
                  {Object.values(subjects).reduce((sum, subject) => sum + subject.totalLectures, 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-700">MCQ Questions:</span>
                <span className="font-medium text-primary-800">
                  {Object.values(subjects).reduce((sum, subject) => sum + subject.totalMCQs, 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-700">Completion:</span>
                <span className="font-medium text-primary-800">
                  {Object.values(subjects).reduce((sum, subject) => sum + subject.totalLectures, 0) > 0
                    ? Math.round(
                        (Object.values(subjects).reduce((sum, subject) => sum + subject.completedLectures, 0) /
                         Object.values(subjects).reduce((sum, subject) => sum + subject.totalLectures, 0)) * 100
                      )
                    : 0}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar