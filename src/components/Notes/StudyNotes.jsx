import React, { useState, useEffect } from 'react'
import { 
  ArrowLeft, 
  FileText, 
  Book, 
  ExternalLink, 
  Download,
  Clock,
  Search,
  BookmarkPlus,
  BookmarkCheck,
  ChevronDown,
  ChevronRight,
  Crown,
  Swords,
  Users,
  MapPin,
  Calendar,
  Target,
  Star,
  Lightbulb,
  TrendingUp,
  Menu,
  X,
  Eye,
  EyeOff
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useBPSC } from '../../context/BPSCContext'
import { loadLegacyLecture, getAvailableLectureNumbers } from '../../data/lectureLoader'
import { subjects } from '../../data/subjects'

function StudyNotes() {
  const { state, setActiveTab } = useBPSC()
  const { currentLecture } = state
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [bookmarks, setBookmarks] = useState(new Set())
  const [expandedSections, setExpandedSections] = useState(new Set())
  const [studyMode, setStudyMode] = useState('normal') // normal, focus, review
  const [sideNavOpen, setSideNavOpen] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  const [selectedLectureNumber, setSelectedLectureNumber] = useState(() => {
    // Safe initialization with fallback
    const num = currentLecture?.number
    return (num && num >= 1 && num <= 11) ? num : 1
  })
  const [currentLectureData, setCurrentLectureData] = useState(null)
  const [availableLectures, setAvailableLectures] = useState([])
  
  const lectureNumber = selectedLectureNumber
  
  // Safely get lecture info from either currentLecture or lectureData
  const lectureName = currentLecture?.name || currentLectureData?.title || `Lecture ${lectureNumber}`
  const lectureTopic = currentLecture?.topic || currentLectureData?.subtitle || ''

  // Load available lectures and current lecture data
  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        // Get available lecture numbers for modern history
        const available = getAvailableLectureNumbers('history', 'modernHistory')
        setAvailableLectures(available)
        
        // Load current lecture data
        const lectureData = await loadLegacyLecture(lectureNumber)
        setCurrentLectureData(lectureData)
        setError(null)
      } catch (err) {
        console.error('Failed to load lecture data:', err)
        setError('Failed to load lecture content')
      } finally {
        setLoading(false)
      }
    }
    
    loadData()
  }, [lectureNumber])
  
  // Update selected lecture when currentLecture changes
  useEffect(() => {
    if (currentLecture?.number && currentLecture.number >= 1 && currentLecture.number <= 11) {
      setSelectedLectureNumber(currentLecture.number)
    }
  }, [currentLecture?.number])

  useEffect(() => {
    // Auto-expand all sections initially (with safety check)
    if (currentLectureData?.sections) {
      const allSectionIds = currentLectureData.sections.map(section => section.id)
      setExpandedSections(new Set(allSectionIds))
    }
  }, [currentLectureData])

  useEffect(() => {
    // Track reading progress
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setReadingProgress(Math.min(scrolled, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const toggleBookmark = (itemId) => {
    const newBookmarks = new Set(bookmarks)
    if (newBookmarks.has(itemId)) {
      newBookmarks.delete(itemId)
    } else {
      newBookmarks.add(itemId)
    }
    setBookmarks(newBookmarks)
  }

  const filteredSections = (currentLectureData?.sections || []).filter(section => 
    section?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    JSON.stringify(section?.content || {}).toLowerCase().includes(searchTerm.toLowerCase())
  )

  const openNotesInNewTab = () => {
    const notesPath = `/HISTORY/MODERN HISTORY/Lecture-${lectureNumber}/notes.html`
    window.open(notesPath, '_blank')
  }

  const getSectionIcon = (type) => {
    switch (type) {
      case 'timeline': return <Calendar className="w-5 h-5" />
      case 'battle': return <Swords className="w-5 h-5" />
      case 'personality': return <Users className="w-5 h-5" />
      case 'policy': return <Target className="w-5 h-5" />
      case 'geography': return <MapPin className="w-5 h-5" />
      default: return <FileText className="w-5 h-5" />
    }
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <FileText className="w-8 h-8 text-primary-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Loading Study Notes...</h3>
          <p className="text-gray-600 dark:text-gray-300">Please wait while we load the lecture content.</p>
        </div>
      </div>
    )
  }
  
  // Error boundary - handle case where lectureData is not available
  if (error || !currentLectureData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Content Not Available</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Unable to load study notes. Please try refreshing the page.</p>
          <button 
            className="btn btn-primary" 
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-secondary-900 text-white' 
        : 'bg-secondary-50'
    }`}>
      {/* Progress Bar */}
      <div className={`fixed top-0 left-0 w-full h-1 z-50 ${darkMode ? 'bg-secondary-700' : 'bg-secondary-200'}`}>
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Mobile Navigation Toggle */}
      <button
        onClick={() => setSideNavOpen(!sideNavOpen)}
        className={`lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg shadow-lg ${darkMode ? 'bg-secondary-800' : 'bg-white'}`}
      >
        {sideNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Side Navigation */}
      <div className={`fixed left-0 top-0 h-full shadow-xl z-40 w-80 transform transition-transform duration-300 ${darkMode ? 'bg-secondary-800' : 'bg-white'} ${
        sideNavOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className={`p-6 border-b ${darkMode ? 'border-secondary-700' : 'border-secondary-200'}`}>
          <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-secondary-800'}`}>Quick Navigation</h3>
          <div className="space-y-2">
            {(currentLectureData?.sections || []).map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
                  setSideNavOpen(false)
                }}
                className={`w-full text-left p-2 rounded-lg flex items-center space-x-2 ${darkMode ? 'hover:bg-secondary-700' : 'hover:bg-secondary-100'}`}
              >
                {getSectionIcon(section.type)}
                <span className="text-sm">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${sideNavOpen ? 'lg:ml-80' : 'lg:ml-80'} transition-all duration-300`}>
        <div className="container py-8 px-4 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent mb-2">
                  🏛️ {currentLectureData.title}
                </h1>
                <p className={`text-lg ${darkMode ? 'text-secondary-300' : 'text-secondary-600'}`}>{currentLectureData.subtitle}</p>
                <div className={`flex items-center space-x-4 mt-2 text-sm ${darkMode ? 'text-secondary-400' : 'text-secondary-500'}`}>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{currentLectureData.estimatedReadTime}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FileText className="w-4 h-4" />
                    <span>{currentLectureData?.sections?.length || 0} sections</span>
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="btn btn-outline p-2"
                  title="Toggle dark mode"
                >
                  {darkMode ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
                
                <button 
                  className="btn btn-outline"
                  onClick={openNotesInNewTab}
                  title="Open original HTML notes"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  HTML View
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

            {/* Search and Controls */}
            <div className="mt-6 flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${darkMode ? 'text-secondary-400' : 'text-secondary-400'}`} />
                <input
                  type="text"
                  placeholder="Search through lecture content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                    darkMode
                      ? 'border-secondary-600 bg-secondary-700 text-white'
                      : 'border-secondary-300 bg-white text-secondary-800'
                  }`}
                />
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => setExpandedSections(new Set(currentLectureData?.sections?.map(s => s.id) || []))}
                  disabled={!currentLectureData?.sections}
                  className="btn btn-outline text-sm px-3 py-2"
                >
                  Expand All
                </button>
                <button
                  onClick={() => setExpandedSections(new Set())}
                  className="btn btn-outline text-sm px-3 py-2"
                >
                  Collapse All
                </button>
              </div>
            </div>
          </div>

          {/* Lecture Selector */}
          <div className={`mb-6 p-4 rounded-xl shadow-sm ${darkMode ? 'bg-secondary-800' : 'bg-white'}`}>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-secondary-800'}`}>Select Lecture</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {Array.from({ length: 11 }, (_, i) => i + 1).map((num) => {
                const isAvailable = availableLectures.includes(num)
                const isSelected = num === lectureNumber
                return (
                  <button
                    key={num}
                    onClick={() => setSelectedLectureNumber(num)}
                    disabled={!isAvailable}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      isSelected
                        ? 'border-primary-500 bg-primary-500 text-white shadow-lg transform scale-105'
                        : isAvailable
                        ? darkMode 
                          ? 'border-secondary-600 bg-secondary-700 text-secondary-300 hover:border-primary-300 hover:bg-secondary-600'
                          : 'border-secondary-200 bg-secondary-50 text-secondary-700 hover:border-primary-300 hover:bg-primary-50'
                        : darkMode
                          ? 'border-secondary-700 bg-secondary-800 text-secondary-500 cursor-not-allowed'
                          : 'border-secondary-100 bg-secondary-100 text-secondary-400 cursor-not-allowed'
                    }`}
                    title={isAvailable ? subjects.history.subSubjects.modernHistory.lectures[`lecture${num}`]?.title || `Lecture ${num}` : 'Coming Soon'}
                  >
                    <div className="text-center">
                      <div className={`text-lg font-bold ${isSelected ? 'text-white' : isAvailable ? (darkMode ? 'text-primary-400' : 'text-primary-600') : (darkMode ? 'text-secondary-500' : 'text-secondary-400')}`}>
                        {num}
                      </div>
                      <div className="text-xs mt-1">
                        {isAvailable ? 'Available' : 'Soon'}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
            {currentLectureData && (
              <div className={`mt-4 p-3 rounded-lg ${darkMode ? 'bg-primary-900' : 'bg-primary-50'}`}>
                <h4 className={`font-semibold ${darkMode ? 'text-primary-200' : 'text-primary-800'}`}>{currentLectureData.title}</h4>
                <p className={`text-sm mt-1 ${darkMode ? 'text-primary-300' : 'text-primary-600'}`}>{currentLectureData.subtitle}</p>
                <div className={`flex items-center space-x-4 mt-2 text-xs ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{currentLectureData.estimatedReadTime}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FileText className="w-3 h-3" />
                    <span>{currentLectureData.sections?.length || 0} sections</span>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Study Mode Toggle */}
          <div className={`mb-6 p-4 rounded-xl shadow-sm ${darkMode ? 'bg-secondary-800' : 'bg-white'}`}>
            <div className="flex items-center justify-between">
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-secondary-800'}`}>Study Mode</h3>
              <div className="flex space-x-2">
                {['normal', 'focus', 'review'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setStudyMode(mode)}
                    className={`px-3 py-1 rounded-lg text-sm capitalize transition-colors ${
                      studyMode === mode
                        ? 'bg-primary-500 text-white'
                        : darkMode
                          ? 'bg-secondary-700 text-secondary-300 hover:bg-secondary-600'
                          : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Lecture Content */}
          <div className="space-y-6">
            {filteredSections.map((section) => (
              <StudySection
                key={section.id}
                section={section}
                isExpanded={expandedSections.has(section.id)}
                onToggle={() => toggleSection(section.id)}
                onBookmark={toggleBookmark}
                bookmarks={bookmarks}
                studyMode={studyMode}
                darkMode={darkMode}
                searchTerm={searchTerm}
              />
            ))}
          </div>

          {/* MCQ Practice Card */}
          <div className={`mt-8 p-6 rounded-xl shadow-sm ${darkMode ? 'bg-primary-900' : 'bg-primary-50'}`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${darkMode ? 'bg-primary-800' : 'bg-primary-100'}`}>
                  <Target className={`w-6 h-6 ${darkMode ? 'text-primary-400' : 'text-primary-600'}`} />
                </div>
                <div>
                  <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-secondary-800'}`}>Practice Questions</h4>
                  <p className={`${darkMode ? 'text-secondary-300' : 'text-secondary-600'}`}>
                    Test your understanding with BPSC-style MCQs for Lecture {lectureNumber}
                  </p>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                    Available for all lectures in the MCQ Practice section
                  </p>
                </div>
              </div>
              <button
                className="btn btn-primary px-6 py-3 text-lg"
                onClick={() => {
                  setActiveTab('mcq')
                  navigate('/mcq-practice')
                }}
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Practice
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sideNavOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSideNavOpen(false)}
        />
      )}
    </div>
  )
}

// Study Section Component
function StudySection({ section, isExpanded, onToggle, onBookmark, bookmarks, studyMode, darkMode, searchTerm }) {
  const getSectionGradient = (type) => {
    switch (type) {
      case 'timeline': return 'from-primary-500 to-primary-600'
      case 'battle': return 'from-red-500 to-red-600'
      case 'personality': return 'from-green-500 to-green-600'
      case 'policy': return 'from-yellow-500 to-yellow-600'
      case 'geography': return 'from-primary-600 to-primary-700'
      default: return 'from-secondary-500 to-secondary-600'
    }
  }

  const highlightText = (text) => {
    if (!searchTerm) return text
    const regex = new RegExp(`(${searchTerm})`, 'gi')
    return text.replace(regex, `<mark class="${darkMode ? 'bg-yellow-800 text-yellow-200' : 'bg-yellow-200 text-yellow-800'}">$1</mark>`)
  }

  return (
    <div 
      id={section.id}
      className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
        darkMode ? 'bg-secondary-800' : 'bg-white'
      } ${
        studyMode === 'focus' ? 'focus:ring-4 focus:ring-primary-300' : ''
      }`}
    >
      {/* Section Header */}
      <div 
        className={`p-6 bg-gradient-to-r ${getSectionGradient(section.type)} text-white cursor-pointer`}
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{section.icon}</span>
            <div>
              <h3 className="text-xl font-bold">{section.title}</h3>
              {section.subtitle && (
                <p className="text-white opacity-90">{section.subtitle}</p>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                onBookmark(section.id)
              }}
              className="p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors"
            >
              {bookmarks.has(section.id) ? (
                <BookmarkCheck className="w-5 h-5" />
              ) : (
                <BookmarkPlus className="w-5 h-5" />
              )}
            </button>
            
            <div className="transform transition-transform duration-300">
              {isExpanded ? (
                <ChevronDown className="w-6 h-6" />
              ) : (
                <ChevronRight className="w-6 h-6" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section Content */}
      {isExpanded && (
        <div className="p-6">
          {section.type === 'timeline' && (
            <TimelineContent content={section.content} highlightText={highlightText} darkMode={darkMode} />
          )}
          {section.type === 'battle' && (
            <BattleContent content={section.content} highlightText={highlightText} darkMode={darkMode} />
          )}
          {section.type === 'personality' && (
            <PersonalityContent content={section.content} highlightText={highlightText} darkMode={darkMode} />
          )}
          {section.type === 'policy' && (
            <PolicyContent content={section.content} highlightText={highlightText} darkMode={darkMode} />
          )}
          {section.type === 'general' && (
            <GeneralContent content={section.content} highlightText={highlightText} darkMode={darkMode} />
          )}
        </div>
      )}
    </div>
  )
}

// Timeline Content Component
function TimelineContent({ content, highlightText, darkMode }) {
  return (
    <div className="space-y-6">
      {content.phases?.map((phase, index) => (
        <div key={index} className="space-y-4">
          {phase.phaseTitle && (
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold">
              {phase.phaseTitle}
            </div>
          )}
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-primary-500" />
            
            <div className="space-y-4">
              {phase.items?.map((item, itemIndex) => (
                <div key={itemIndex} className="relative flex items-start space-x-4">
                  {/* Timeline dot */}
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold border-4 shadow-lg ${
                    darkMode ? 'border-secondary-800' : 'border-white'
                  }`}>
                    {item.type === 'emperor' && <Crown className="w-5 h-5" />}
                    {item.type === 'battle' && <Swords className="w-5 h-5" />}
                    {item.type === 'event' && <Star className="w-5 h-5" />}
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-1 rounded-lg p-4 ${
                    darkMode ? 'bg-secondary-700' : 'bg-secondary-50'
                  }`}>
                    <h4 
                      className={`text-lg font-bold mb-1 ${
                        darkMode ? 'text-white' : 'text-secondary-800'
                      }`}
                      dangerouslySetInnerHTML={{ __html: highlightText(item.title) }}
                    />
                    {item.period && (
                      <div className="inline-block px-3 py-1 bg-red-500 text-white rounded-full text-sm font-semibold mb-2">
                        {item.period}
                      </div>
                    )}
                    <p 
                      className={`leading-relaxed ${
                        darkMode ? 'text-secondary-300' : 'text-secondary-600'
                      }`}
                      dangerouslySetInnerHTML={{ __html: highlightText(item.description || '') }}
                    />
                    {item.keyPoints && (
                      <div className="mt-3 space-y-2">
                        {item.keyPoints.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-start space-x-2">
                            <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span 
                              className={`text-sm ${
                                darkMode ? 'text-secondary-300' : 'text-secondary-600'
                              }`}
                              dangerouslySetInnerHTML={{ __html: highlightText(point) }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Battle Content Component
function BattleContent({ content, highlightText, darkMode }) {
  return (
    <div className="space-y-6">
      {content.battles?.map((battle, index) => (
        <div key={index} className={`border-2 rounded-xl p-6 ${
          darkMode 
            ? 'bg-red-900 border-red-700' 
            : 'bg-red-50 border-red-200'
        }`}>
          <div className="text-center mb-6">
            <h4 className={`text-2xl font-bold mb-2 ${
              darkMode ? 'text-red-400' : 'text-red-600'
            }`}>
              ⚔️ {battle.name}
            </h4>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-red-500" />
                <span className={`font-semibold ${
                  darkMode ? 'text-secondary-300' : 'text-secondary-700'
                }`}>Date:</span>
                <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-bold">
                  {battle.date}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className={`font-semibold ${
                  darkMode ? 'text-secondary-300' : 'text-secondary-700'
                }`}>Location:</span>
                <span className={`${
                  darkMode ? 'text-secondary-400' : 'text-secondary-600'
                }`}>{battle.location}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className={`font-semibold flex items-center space-x-2 mb-2 ${
                  darkMode ? 'text-secondary-300' : 'text-secondary-700'
                }`}>
                  <Users className="w-5 h-5 text-red-500" />
                  <span>Contestants:</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {battle.contestants?.map((contestant, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-sm ${
                      darkMode 
                        ? 'bg-primary-800 text-primary-200' 
                        : 'bg-primary-100 text-primary-800'
                    }`}>
                      {contestant}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className={`mt-6 p-4 rounded-lg ${
            darkMode ? 'bg-secondary-800' : 'bg-white'
          }`}>
            <h5 className={`font-semibold mb-2 ${
              darkMode ? 'text-secondary-300' : 'text-secondary-700'
            }`}>Result & Significance:</h5>
            <p 
              className={`leading-relaxed ${
                darkMode ? 'text-secondary-400' : 'text-secondary-600'
              }`}
              dangerouslySetInnerHTML={{ __html: highlightText(`${battle.result}. ${battle.significance}`) }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

// Personality Content Component  
function PersonalityContent({ content, highlightText, darkMode }) {
  return (
    <div className="grid gap-6">
      {content.personalities?.map((person, index) => (
        <div key={index} className={`rounded-xl p-6 ${
          darkMode 
            ? 'bg-gradient-to-r from-green-900 to-emerald-900' 
            : 'bg-gradient-to-r from-green-50 to-emerald-50'
        }`}>
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {person.name?.[0] || '👤'}
            </div>
            
            <div className="flex-1">
              <h4 
                className={`text-xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-secondary-800'
                }`}
                dangerouslySetInnerHTML={{ __html: highlightText(person.name || '') }}
              />
              
              {person.titles && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {person.titles.map((title, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      darkMode 
                        ? 'bg-yellow-800 text-yellow-200' 
                        : 'bg-yellow-200 text-yellow-800'
                    }`}>
                      {title}
                    </span>
                  ))}
                </div>
              )}
              
              {person.period && (
                <div className="inline-block px-3 py-1 bg-green-500 text-white rounded-full text-sm font-bold mb-3">
                  {person.period}
                </div>
              )}
              
              <p 
                className={`leading-relaxed mb-4 ${
                  darkMode ? 'text-secondary-300' : 'text-secondary-600'
                }`}
                dangerouslySetInnerHTML={{ __html: highlightText(person.description || '') }}
              />
              
              {person.keyPoints && (
                <div className="space-y-2">
                  {person.keyPoints.map((point, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span 
                        className={`${
                          darkMode ? 'text-secondary-300' : 'text-secondary-600'
                        }`}
                        dangerouslySetInnerHTML={{ __html: highlightText(point) }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Policy Content Component
function PolicyContent({ content, highlightText, darkMode }) {
  return (
    <div className="space-y-4">
      {content.policies?.map((policy, index) => (
        <div key={index} className={`border-l-4 border-yellow-400 p-4 rounded-r-lg ${
          darkMode ? 'bg-yellow-900' : 'bg-yellow-50'
        }`}>
          <h5 
            className={`font-semibold mb-2 ${
              darkMode ? 'text-white' : 'text-secondary-800'
            }`}
            dangerouslySetInnerHTML={{ __html: highlightText(policy.title || '') }}
          />
          <p 
            className={`leading-relaxed ${
              darkMode ? 'text-secondary-300' : 'text-secondary-600'
            }`}
            dangerouslySetInnerHTML={{ __html: highlightText(policy.description || '') }}
          />
        </div>
      ))}
    </div>
  )
}

// General Content Component
function GeneralContent({ content, highlightText, darkMode }) {
  return (
    <div className="space-y-4">
      {content.keyPoints?.map((point, index) => (
        <div key={index} className={`border-l-4 border-primary-400 p-4 rounded-r-lg ${
          darkMode ? 'bg-primary-900' : 'bg-primary-50'
        }`}>
          <div className="flex items-start space-x-3">
            <Lightbulb className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
            <div>
              <h5 
                className={`font-semibold mb-1 ${
                  darkMode ? 'text-white' : 'text-secondary-800'
                }`}
                dangerouslySetInnerHTML={{ __html: highlightText(point.title || '') }}
              />
              <p 
                className={`${
                  darkMode ? 'text-secondary-300' : 'text-secondary-600'
                }`}
                dangerouslySetInnerHTML={{ __html: highlightText(point.description || '') }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StudyNotes