import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useBPSC } from './context/BPSCContext'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Subjects from './components/Subjects/Subjects'
import MCQPractice from './components/MCQ/MCQPractice'
import NotesViewer from './components/Subjects/NotesViewer'
import StudyNotes from './components/Notes/StudyNotes'
import QuestionPaper from './components/QuestionPaper/QuestionPaper'
import Progress from './components/Progress/Progress'
import LoadingSpinner from './components/UI/LoadingSpinner'

function App() {
  const { state } = useBPSC()
  const { loading } = state

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary-50">
        <LoadingSpinner size="large" text="Loading BPSC Preparation Hub..." />
      </div>
    )
  }

  return (
    <Layout>
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/study-materials" element={<Subjects />} />
          <Route path="/notes" element={<NotesViewer />} />
          <Route path="/study-notes" element={<StudyNotes />} />
          <Route path="/mcq-practice" element={<MCQPractice />} />
          <Route path="/question-paper" element={<QuestionPaper />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Layout>
  )
}

export default App
