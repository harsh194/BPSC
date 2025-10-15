import React, { useState, useEffect } from 'react'
import { FileText, Settings, Download, Eye, Clock, Brain, Plus } from 'lucide-react'
import { useBPSC } from '../../context/BPSCContext'
import { contentScanner } from '../../services/contentScanner'
import { mcqService } from '../../services/mcqService'

function QuestionPaper() {
  const { state } = useBPSC()
  const { subjects } = state
  
  const [availableMCQs, setAvailableMCQs] = useState([])
  const [selectedSources, setSelectedSources] = useState([])
  const [paperSettings, setPaperSettings] = useState({
    title: 'BPSC Mock Test',
    totalQuestions: 100,
    timeLimit: 120,
    includeAnswerKey: true,
    randomOrder: true,
    instructions: [
      'Choose the best answer for each question',
      'Each question carries equal marks',
      'There is no negative marking',
      'Manage your time effectively'
    ]
  })
  const [generatedPaper, setGeneratedPaper] = useState(null)
  const [showPreview, setShowPreview] = useState(false)
  const [generating, setGenerating] = useState(false)

  useEffect(() => {
    const mcqs = contentScanner.getAvailableMCQs(subjects)
    setAvailableMCQs(mcqs)
  }, [subjects])

  const handleSourceToggle = (mcqId) => {
    setSelectedSources(prev => 
      prev.includes(mcqId) 
        ? prev.filter(id => id !== mcqId)
        : [...prev, mcqId]
    )
  }

  const handleSelectAll = () => {
    setSelectedSources(availableMCQs.map(mcq => mcq.id))
  }

  const handleClearAll = () => {
    setSelectedSources([])
  }

  const getSelectedQuestionCount = () => {
    return availableMCQs
      .filter(mcq => selectedSources.includes(mcq.id))
      .reduce((sum, mcq) => sum + mcq.questionCount, 0)
  }

  const handleGeneratePaper = async () => {
    if (selectedSources.length === 0) {
      alert('Please select at least one question source')
      return
    }

    const totalAvailable = getSelectedQuestionCount()
    if (paperSettings.totalQuestions > totalAvailable) {
      alert(`Not enough questions available. Maximum: ${totalAvailable}`)
      return
    }

    setGenerating(true)
    
    try {
      // Load MCQ data for selected sources
      const mcqDataPromises = availableMCQs
        .filter(mcq => selectedSources.includes(mcq.id))
        .map(mcq => mcqService.loadMCQData(mcq.filePath))

      const mcqDataSources = await Promise.all(mcqDataPromises)
      const validSources = mcqDataSources.filter(data => data !== null)

      if (validSources.length === 0) {
        alert('Failed to load question data')
        return
      }

      // Generate the paper
      const paper = mcqService.generateQuestionPaper(validSources, {
        totalQuestions: paperSettings.totalQuestions,
        timeLimit: paperSettings.timeLimit,
        title: paperSettings.title,
        includeAnswerKey: paperSettings.includeAnswerKey,
        randomOrder: paperSettings.randomOrder
      })

      if (paper) {
        setGeneratedPaper(paper)
        setShowPreview(true)
      } else {
        alert('Failed to generate question paper')
      }
    } catch (error) {
      console.error('Error generating paper:', error)
      alert('Error generating question paper')
    } finally {
      setGenerating(false)
    }
  }

  const handleDownloadPaper = () => {
    if (!generatedPaper) return

    const htmlContent = mcqService.exportQuestionPaper(generatedPaper, 'html')
    const blob = new Blob([htmlContent], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    
    const a = document.createElement('a')
    a.href = url
    a.download = `${generatedPaper.title.replace(/\s+/g, '_')}.html`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handlePrintPaper = () => {
    if (!generatedPaper) return

    const htmlContent = mcqService.exportQuestionPaper(generatedPaper, 'html')
    const printWindow = window.open('', '_blank')
    printWindow.document.write(htmlContent)
    printWindow.document.close()
    printWindow.focus()
    printWindow.print()
  }

  if (showPreview && generatedPaper) {
    return (
      <div className="container py-8">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="section-title">Question Paper Preview</h1>
              <p className="text-secondary-600">{generatedPaper.title}</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowPreview(false)}
                className="btn btn-outline"
              >
                Back to Generator
              </button>
              <button
                onClick={handleDownloadPaper}
                className="btn btn-secondary"
              >
                <Download className="w-4 h-4 mr-2" />
                Download HTML
              </button>
              <button
                onClick={handlePrintPaper}
                className="btn btn-primary"
              >
                <FileText className="w-4 h-4 mr-2" />
                Print Paper
              </button>
            </div>
          </div>
        </div>

        {/* Paper Header */}
        <div className="card mb-6">
          <div className="text-center border-b border-secondary-200 pb-6 mb-6">
            <h2 className="text-2xl font-bold text-secondary-800 mb-2">
              {generatedPaper.title}
            </h2>
            <div className="flex items-center justify-center space-x-8 text-sm text-secondary-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Time: {Math.floor(generatedPaper.timeLimit / 60)} minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4" />
                <span>Questions: {generatedPaper.totalQuestions}</span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h3 className="font-semibold text-secondary-800 mb-3">Instructions:</h3>
            <ul className="list-disc list-inside space-y-1 text-secondary-600">
              {generatedPaper.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {generatedPaper.questions.map((question) => (
            <div key={question.paperQuestionNumber} className="card">
              <div className="flex items-start space-x-4">
                <span className="bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-lg min-w-[3rem] text-center">
                  {question.paperQuestionNumber}
                </span>
                <div className="flex-1">
                  <p className="text-secondary-800 mb-4">{question.question}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.entries(question.options).map(([key, value]) => (
                      <div key={key} className="flex items-start space-x-2">
                        <span className="font-medium text-secondary-700 min-w-[1.5rem]">
                          ({key})
                        </span>
                        <span className="text-secondary-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Answer Key */}
        {generatedPaper.answerKey && (
          <div className="card mt-8 bg-secondary-25 print-page-break">
            <h3 className="text-xl font-semibold text-secondary-800 mb-4">Answer Key</h3>
            <div className="grid grid-cols-10 gap-4">
              {Object.entries(generatedPaper.answerKey).map(([qNum, answer]) => (
                <div key={qNum} className="text-center">
                  <div className="text-sm text-secondary-600">{qNum}.</div>
                  <div className="font-medium text-secondary-800">{answer}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="section-title">Question Paper Generator</h1>
        <p className="text-secondary-600">
          Create custom question papers from available MCQ sets for practice and mock tests.
        </p>
      </div>

      {availableMCQs.length === 0 ? (
        <div className="text-center py-16">
          <FileText className="w-16 h-16 mx-auto mb-4 text-secondary-300" />
          <h3 className="text-xl font-semibold text-secondary-800 mb-2">No Question Sources Available</h3>
          <p className="text-secondary-600 mb-6">
            Question paper generation requires MCQ sets to be available.
          </p>
          <p className="text-sm text-secondary-500">
            Add MCQ JSON files to your lecture folders to enable paper generation.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Question Sources */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-secondary-800">Select Question Sources</h2>
                <div className="space-x-2">
                  <button
                    onClick={handleSelectAll}
                    className="btn btn-outline btn-sm"
                  >
                    Select All
                  </button>
                  <button
                    onClick={handleClearAll}
                    className="btn btn-outline btn-sm"
                  >
                    Clear All
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {availableMCQs.map((mcq) => (
                  <div
                    key={mcq.id}
                    className={`border rounded-lg p-4 transition-all cursor-pointer ${
                      selectedSources.includes(mcq.id)
                        ? 'border-primary-300 bg-primary-25'
                        : 'border-secondary-200 hover:border-secondary-300'
                    }`}
                    onClick={() => handleSourceToggle(mcq.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={selectedSources.includes(mcq.id)}
                        onChange={() => handleSourceToggle(mcq.id)}
                        className="rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-secondary-800">{mcq.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-secondary-600 mt-1">
                          <span>{mcq.subject} • {mcq.topic}</span>
                          <span>{mcq.questionCount} questions</span>
                          <span>Lecture {mcq.lectureNumber}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedSources.length > 0 && (
                <div className="mt-4 pt-4 border-t border-secondary-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-secondary-600">
                      Selected: {selectedSources.length} sources
                    </span>
                    <span className="font-medium text-secondary-800">
                      Total questions available: {getSelectedQuestionCount()}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Paper Settings */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary-800 mb-4">Paper Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Paper Title
                  </label>
                  <input
                    type="text"
                    value={paperSettings.title}
                    onChange={(e) => setPaperSettings(prev => ({ ...prev, title: e.target.value }))}
                    className="input-field"
                    placeholder="BPSC Mock Test 1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Number of Questions
                  </label>
                  <input
                    type="number"
                    value={paperSettings.totalQuestions}
                    onChange={(e) => setPaperSettings(prev => ({ ...prev, totalQuestions: parseInt(e.target.value) || 0 }))}
                    className="input-field"
                    min="1"
                    max={getSelectedQuestionCount()}
                  />
                  <p className="text-xs text-secondary-500 mt-1">
                    Maximum: {getSelectedQuestionCount()} questions available
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Time Limit (minutes)
                  </label>
                  <input
                    type="number"
                    value={paperSettings.timeLimit}
                    onChange={(e) => setPaperSettings(prev => ({ ...prev, timeLimit: parseInt(e.target.value) || 0 }))}
                    className="input-field"
                    min="15"
                    max="300"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="includeAnswerKey"
                      checked={paperSettings.includeAnswerKey}
                      onChange={(e) => setPaperSettings(prev => ({ ...prev, includeAnswerKey: e.target.checked }))}
                      className="mr-3 rounded"
                    />
                    <label htmlFor="includeAnswerKey" className="text-sm text-secondary-700">
                      Include answer key
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="randomOrder"
                      checked={paperSettings.randomOrder}
                      onChange={(e) => setPaperSettings(prev => ({ ...prev, randomOrder: e.target.checked }))}
                      className="mr-3 rounded"
                    />
                    <label htmlFor="randomOrder" className="text-sm text-secondary-700">
                      Random question order
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <div className="card bg-primary-25 border-primary-200">
              <h4 className="font-semibold text-primary-800 mb-3">Ready to Generate?</h4>
              <div className="space-y-2 text-sm text-primary-700 mb-4">
                <div className="flex justify-between">
                  <span>Sources:</span>
                  <span>{selectedSources.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Questions:</span>
                  <span>{paperSettings.totalQuestions}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time limit:</span>
                  <span>{paperSettings.timeLimit} min</span>
                </div>
              </div>
              
              <button
                onClick={handleGeneratePaper}
                disabled={selectedSources.length === 0 || generating}
                className="btn btn-primary w-full disabled:opacity-50"
              >
                {generating ? (
                  <>
                    <Settings className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    Generate Paper
                  </>
                )}
              </button>
            </div>

            {/* Instructions */}
            <div className="card bg-secondary-25">
              <h4 className="font-semibold text-secondary-800 mb-3">How to Generate</h4>
              <ol className="text-sm text-secondary-600 space-y-1 list-decimal list-inside">
                <li>Select one or more question sources</li>
                <li>Configure paper settings (title, questions, time)</li>
                <li>Click "Generate Paper" to create your test</li>
                <li>Preview, download, or print the generated paper</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuestionPaper