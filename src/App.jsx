import React from 'react'
import { useBPSC } from './context/BPSCContext'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Subjects from './components/Subjects/Subjects'
import MCQPractice from './components/MCQ/MCQPractice'
import QuestionPaper from './components/QuestionPaper/QuestionPaper'
import Progress from './components/Progress/Progress'
import LoadingSpinner from './components/UI/LoadingSpinner'

function App() {
  const { state } = useBPSC()
  const { activeTab, loading } = state

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <Home />
      case 'subjects':
        return <Subjects />
      case 'mcq':
        return <MCQPractice />
      case 'question-papers':
        return <QuestionPaper />
      case 'progress':
        return <Progress />
      default:
        return <Home />
    }
  }

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
        {renderActiveTab()}
      </main>
    </Layout>
  )
}

export default App