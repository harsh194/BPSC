import React, { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, FileText, Brain, CheckCircle2, Circle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useBPSC } from '../../context/BPSCContext'
import PdfViewer from './PdfViewer'

function NotesViewer() {
  const { state, setActiveTab } = useBPSC()
  const lecture = state.currentLecture
  const navigate = useNavigate()
  

  if (!lecture) {
    return (
      <div className="container py-8">
        <div className="card">
          <p className="text-secondary-700 mb-4">No lecture selected.</p>
          <button className="btn btn-primary" onClick={() => setActiveTab('subjects')}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Subjects
          </button>
        </div>
      </div>
    )
  }

  const lecturePath = lecture.path || ''
  const encodePath = (p) => p.split('/').map(encodeURIComponent).join('/')
  const makeUrl = (name) => `/${encodePath(lecturePath)}/${encodeURIComponent(name)}`
  const numStr = String(lecture.number).padStart(2, '0')
  const toggleSpaceVariant = (name) => {
    if (!name) return []
    const a = name.includes(`${numStr}  `)
      ? name.replace(`${numStr}  `, `${numStr} `)
      : name.replace(`${numStr} `, `${numStr}  `)
    const unique = Array.from(new Set([name, a]))
    return unique
  }
  const rawDailyNames = useMemo(() => toggleSpaceVariant(lecture.files?.dailyNotes), [lecture.files?.dailyNotes, lecture.number])
  const rawClassNames = useMemo(() => toggleSpaceVariant(lecture.files?.classNotes), [lecture.files?.classNotes, lecture.number])
  const rawDailyCandidates = useMemo(() => rawDailyNames.map(makeUrl), [lecturePath, rawDailyNames])
  const rawClassCandidates = useMemo(() => rawClassNames.map(makeUrl), [lecturePath, rawClassNames])
  const rawDaily = rawDailyCandidates[0] || null
  const rawClass = rawClassCandidates[0] || null
  const [selectedPdf, setSelectedPdf] = useState(rawDaily ? 'daily' : (rawClass ? 'class' : null))
  const selectedPdfUrl = selectedPdf === 'daily' ? rawDaily : selectedPdf === 'class' ? rawClass : null
  const selectedCandidates = useMemo(() => (
    selectedPdf === 'daily' ? rawDailyCandidates : selectedPdf === 'class' ? rawClassCandidates : []
  ), [selectedPdf, rawDailyCandidates, rawClassCandidates])

  // If lecture changes or availability changes, default the tab
  useEffect(() => {
    if (!selectedPdf) {
      if (rawDaily) setSelectedPdf('daily')
      else if (rawClass) setSelectedPdf('class')
    }
  }, [selectedPdf, rawDaily, rawClass, lecturePath])

  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="section-title">Lecture Notes</h1>
        <button className="btn btn-outline" onClick={() => setActiveTab('subjects')}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </button>
      </div>

      <div className="grid lg:grid-cols-1 gap-6">
        <div className="space-y-4">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-secondary-800">{lecture.name}</h3>
                {lecture.topic && (
                  <p className="text-secondary-600">{lecture.topic}</p>
                )}
              </div>
              <div className="flex items-center space-x-4 text-xs">
                <div className="flex items-center space-x-1">
                  <FileText className={`w-3 h-3 ${lecture.files?.dailyNotes ? 'text-green-500' : 'text-secondary-300'}`} />
                  <span className={lecture.files?.dailyNotes ? 'text-secondary-700' : 'text-secondary-400'}>Daily Notes</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FileText className={`w-3 h-3 ${lecture.files?.classNotes ? 'text-green-500' : 'text-secondary-300'}`} />
                  <span className={lecture.files?.classNotes ? 'text-secondary-700' : 'text-secondary-400'}>Class Notes</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Brain className={`w-3 h-3 ${lecture.files?.mcqJson ? 'text-green-500' : 'text-secondary-300'}`} />
                  <span className={lecture.files?.mcqJson ? 'text-secondary-700' : 'text-secondary-400'}>MCQ</span>
                </div>
              </div>
            </div>
          </div>

          {/* In-app PDF viewer with toolbar */}
          {(rawDaily || rawClass) ? (
            <div className="card">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-secondary-800">PDF Viewer</h4>
                <div className="flex items-center space-x-2">
                  {rawDaily && (
                    <button
                      onClick={() => setSelectedPdf('daily')}
                      className={`btn ${selectedPdf === 'daily' ? 'btn-primary' : 'btn-outline'}`}
                    >
                      Daily Class Notes
                    </button>
                  )}
                  {rawClass && (
                    <button
                      onClick={() => setSelectedPdf('class')}
                      className={`btn ${selectedPdf === 'class' ? 'btn-primary' : 'btn-outline'}`}
                    >
                      Class Notes
                    </button>
                  )}
                </div>
              </div>
              {(rawDaily && rawClass) && (
                <p className="text-xs text-secondary-600 mb-3">
                  Class Notes: discussed in class • Daily Class Notes: handbook provided after class
                </p>
              )}
              {selectedPdfUrl ? (
                <PdfViewer fileUrl={selectedPdfUrl} fileCandidates={selectedCandidates} />
              ) : (
                <div className="text-sm text-secondary-600">No PDF selected.</div>
              )}
            </div>
          ) : null}

          {/* Actions for this lecture */}
          {(lecture.files?.mcqJson) && (
            <div className="card">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-primary-600" />
                  <div>
                    <h4 className="font-semibold text-secondary-800">MCQ Practice</h4>
                    <p className="text-sm text-secondary-600">{lecture.mcqCount || 0} questions available</p>
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setActiveTab('mcq')
                    navigate('/mcq-practice')
                  }}
                >
                  Practice MCQs
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NotesViewer
