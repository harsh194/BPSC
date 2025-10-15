import React from 'react'
import { BookOpen, FileText, Brain, Clock, CheckCircle2, Circle, AlertCircle } from 'lucide-react'
import { useBPSC } from '../../context/BPSCContext'

function Subjects() {
  const { state, setActiveTab } = useBPSC()
  const { subjects } = state

  const getStatusIcon = (status) => {
    switch (status) {
      case 'complete':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />
      case 'partial':
        return <Circle className="w-5 h-5 text-yellow-500" />
      default:
        return <AlertCircle className="w-5 h-5 text-secondary-300" />
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'complete':
        return 'Complete with MCQs'
      case 'partial':
        return 'PDFs available'
      default:
        return 'Not available'
    }
  }

  const handleStartPractice = (lectureId) => {
    // Navigate to MCQ practice with specific lecture
    setActiveTab('mcq')
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="section-title">Study Subjects</h1>
        <p className="text-secondary-600">
          Browse and access your BPSC preparation materials organized by subjects and topics.
        </p>
      </div>

      {Object.keys(subjects).length === 0 ? (
        <div className="text-center py-16">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-secondary-300" />
          <h3 className="text-xl font-semibold text-secondary-800 mb-2">No Subjects Available</h3>
          <p className="text-secondary-600 mb-6">
            Study materials will appear here automatically when added to the folder structure.
          </p>
          <div className="bg-secondary-50 rounded-lg p-6 max-w-2xl mx-auto text-left">
            <h4 className="font-semibold text-secondary-800 mb-3">Expected folder structure:</h4>
            <pre className="text-sm text-secondary-600 font-mono">
{`BPSC/
├── HISTORY/
│   └── MODERN HISTORY/
│       ├── Lecture-1/
│       │   ├── Daily Class Notes.pdf
│       │   ├── Class Notes.pdf
│       │   └── MCQ_Questions_Lesson1.json
│       └── Lecture-2/
│           └── ...
└── OTHER_SUBJECTS/
    └── ...`}
            </pre>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(subjects).map(([subjectName, subject]) => (
            <div key={subjectName} className="card">
              {/* Subject Header */}
              <div className="border-b border-secondary-200 pb-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-600 p-3 rounded-lg">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-secondary-800">{subjectName}</h2>
                      <p className="text-secondary-600">
                        {subject.totalLectures} lectures • {subject.totalMCQs} MCQ questions
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-secondary-800">
                      {subject.totalLectures > 0 
                        ? Math.round((subject.completedLectures / subject.totalLectures) * 100)
                        : 0}%
                    </div>
                    <div className="text-sm text-secondary-600">Complete</div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="w-full bg-secondary-200 rounded-full h-2">
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

              {/* Topics */}
              <div className="space-y-6">
                {Object.entries(subject.topics).map(([topicName, topic]) => (
                  <div key={topicName}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-secondary-800">{topicName}</h3>
                      <span className="text-sm text-secondary-600">
                        {topic.completedLectures}/{topic.totalLectures} lectures completed
                      </span>
                    </div>

                    {/* Lectures Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Object.entries(topic.lectures).map(([lectureName, lecture]) => (
                        <div key={lectureName} className="border border-secondary-200 rounded-lg p-4 hover:border-secondary-300 transition-colors">
                          {/* Lecture Header */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(lecture.status)}
                              <h4 className="font-medium text-secondary-800">{lecture.name}</h4>
                            </div>
                            <span className="text-xs text-secondary-500">
                              Lecture {lecture.number}
                            </span>
                          </div>

                          {/* Lecture Topic */}
                          {lecture.topic && (
                            <p className="text-sm text-secondary-600 mb-3">{lecture.topic}</p>
                          )}

                          {/* Status */}
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="text-xs text-secondary-500">Status:</span>
                            <span className="text-xs font-medium text-secondary-700">
                              {getStatusText(lecture.status)}
                            </span>
                          </div>

                          {/* Available Resources */}
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center space-x-2 text-xs">
                              <FileText className={`w-3 h-3 ${lecture.files.dailyNotes ? 'text-green-500' : 'text-secondary-300'}`} />
                              <span className={lecture.files.dailyNotes ? 'text-secondary-700' : 'text-secondary-400'}>
                                Daily Notes
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs">
                              <FileText className={`w-3 h-3 ${lecture.files.classNotes ? 'text-green-500' : 'text-secondary-300'}`} />
                              <span className={lecture.files.classNotes ? 'text-secondary-700' : 'text-secondary-400'}>
                                Class Notes
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs">
                              <Brain className={`w-3 h-3 ${lecture.files.mcqJson ? 'text-green-500' : 'text-secondary-300'}`} />
                              <span className={lecture.files.mcqJson ? 'text-secondary-700' : 'text-secondary-400'}>
                                MCQ Practice
                                {lecture.mcqCount > 0 && (
                                  <span className="ml-1 text-primary-600">({lecture.mcqCount})</span>
                                )}
                              </span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="space-y-2">
                            {lecture.files.mcqJson && lecture.mcqCount > 0 && (
                              <button
                                onClick={() => handleStartPractice(`${subjectName}-${topicName}-${lectureName}`)}
                                className="btn btn-primary w-full text-sm py-2"
                              >
                                <Brain className="w-4 h-4 mr-2" />
                                Practice MCQs
                              </button>
                            )}
                            
                            {(lecture.files.dailyNotes || lecture.files.classNotes) && (
                              <button className="btn btn-outline w-full text-sm py-2">
                                <FileText className="w-4 h-4 mr-2" />
                                View Notes
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Subjects