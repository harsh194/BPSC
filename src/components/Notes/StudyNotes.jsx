import React, { useState, useEffect } from 'react'
import { ArrowLeft, FileText, Book, ExternalLink, Download } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useBPSC } from '../../context/BPSCContext'

function StudyNotes() {
  const { state, setActiveTab } = useBPSC()
  const { currentLecture } = state
  const navigate = useNavigate()
  const [notesContent, setNotesContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const lectureNumber = currentLecture?.number || 1
  const lectureName = currentLecture?.name || `Lecture ${lectureNumber}`
  const lectureTopic = currentLecture?.topic || ''

  useEffect(() => {
    if (currentLecture) {
      loadNotesContent()
    }
  }, [currentLecture])

  const loadNotesContent = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const notesPath = `/HISTORY/MODERN HISTORY/Lecture-${lectureNumber}/notes.html`
      const response = await fetch(notesPath)
      
      if (!response.ok) {
        throw new Error(`Notes not found for Lecture ${lectureNumber}`)
      }
      
      const htmlContent = await response.text()
      setNotesContent(htmlContent)
    } catch (err) {
      console.error('Error loading notes:', err)
      setError(`Failed to load notes for ${lectureName}`)
    } finally {
      setLoading(false)
    }
  }

  const openNotesInNewTab = () => {
    const notesPath = `/HISTORY/MODERN HISTORY/Lecture-${lectureNumber}/notes.html`
    window.open(notesPath, '_blank')
  }

  if (!currentLecture) {
    return (
      <div className="container py-8">
        <div className="card">
          <div className="text-center py-8">
            <Book className="w-16 h-16 text-secondary-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-secondary-700 mb-2">No Lecture Selected</h3>
            <p className="text-secondary-600 mb-6">Please select a lecture from the sidebar to view study notes.</p>
            <button 
              className="btn btn-primary" 
              onClick={() => {
                setActiveTab('subjects')
                navigate('/subjects')
              }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> 
              Browse Subjects
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="section-title">Study Notes</h1>
          <p className="text-secondary-600 mt-1">Interactive and well-organized study material</p>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            className="btn btn-outline"
            onClick={openNotesInNewTab}
            title="Open in new tab"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Open in New Tab
          </button>
          <button 
            className="btn btn-outline" 
            onClick={() => {
              setActiveTab('subjects')
              navigate('/subjects')
            }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> 
            Back
          </button>
        </div>
      </div>

      {/* Lecture Info Card */}
      <div className="card mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary-800">{lectureName}</h3>
              {lectureTopic && (
                <p className="text-secondary-600">{lectureTopic}</p>
              )}
              <p className="text-sm text-secondary-500">Modern History • BPSC Preparation</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary-600">#{lectureNumber}</div>
            <div className="text-xs text-secondary-500 uppercase tracking-wide">Lecture</div>
          </div>
        </div>
      </div>

      {/* Notes Content */}
      <div className="card">
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mb-4"></div>
            <p className="text-secondary-600">Loading study notes...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-red-700 mb-2">Notes Not Available</h3>
            <p className="text-red-600 mb-6">{error}</p>
            <div className="space-y-3">
              <button 
                className="btn btn-primary"
                onClick={loadNotesContent}
              >
                Try Again
              </button>
              <div className="text-sm text-secondary-500">
                <p>Notes are available for Lectures 1-11 in Modern History.</p>
                <p>Please select a different lecture or check back later.</p>
              </div>
            </div>
          </div>
        )}

        {notesContent && !loading && !error && (
          <div className="notes-container">
            {/* Notes iframe for better isolation */}
            <iframe 
              srcDoc={notesContent}
              title={`Study Notes - ${lectureName}`}
              className="w-full h-screen border-0 rounded-lg"
              style={{ minHeight: '800px' }}
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        )}
      </div>

      {/* Additional Actions */}
      {currentLecture?.files?.mcqJson && (
        <div className="card mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Book className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary-800">Practice Questions</h4>
                <p className="text-sm text-secondary-600">
                  Test your understanding with {currentLecture.mcqCount || 0} MCQ questions
                </p>
              </div>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                setActiveTab('mcq')
                navigate('/mcq-practice')
              }}
            >
              Start Practice
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudyNotes