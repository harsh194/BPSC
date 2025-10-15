import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { contentScanner } from '../services/contentScanner'
import { progressTracker } from '../services/progressTracker'

const BPSCContext = createContext()

const initialState = {
  // Content data
  subjects: {},
  currentSubject: null,
  currentTopic: null,
  currentLecture: null,
  
  // MCQ state
  currentQuiz: null,
  quizResults: [],
  
  // UI state
  loading: false,
  activeTab: 'home',
  sidebarOpen: false,
  
  // Progress data
  progress: {
    overall: 0,
    bySubject: {},
    stats: {
      totalLectures: 0,
      completedLectures: 0,
      totalMCQs: 0,
      completedMCQs: 0,
      averageScore: 0
    }
  },
  
  // Settings
  settings: {
    theme: 'light',
    defaultQuestionCount: 25,
    randomOrder: true,
    showAnswers: true
  }
}

function bpscReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
      
    case 'SET_SUBJECTS':
      return { ...state, subjects: action.payload }
      
    case 'SET_CURRENT_SUBJECT':
      return { ...state, currentSubject: action.payload }
      
    case 'SET_CURRENT_TOPIC':
      return { ...state, currentTopic: action.payload }
      
    case 'SET_CURRENT_LECTURE':
      return { ...state, currentLecture: action.payload }
      
    case 'SET_ACTIVE_TAB':
      return { ...state, activeTab: action.payload }
      
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen }
      
    case 'SET_SIDEBAR_OPEN':
      return { ...state, sidebarOpen: action.payload }
      
    case 'START_QUIZ':
      return { 
        ...state, 
        currentQuiz: {
          ...action.payload,
          startTime: Date.now(),
          currentQuestion: 0,
          answers: {},
          score: 0
        }
      }
      
    case 'ANSWER_QUESTION':
      return {
        ...state,
        currentQuiz: {
          ...state.currentQuiz,
          answers: {
            ...state.currentQuiz.answers,
            [action.payload.questionId]: action.payload.answer
          }
        }
      }
      
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuiz: {
          ...state.currentQuiz,
          currentQuestion: state.currentQuiz.currentQuestion + 1
        }
      }
      
    case 'COMPLETE_QUIZ':
      const completedQuiz = {
        ...state.currentQuiz,
        endTime: Date.now(),
        score: action.payload.score,
        completed: true
      }
      return {
        ...state,
        currentQuiz: null,
        quizResults: [...state.quizResults, completedQuiz]
      }
      
    case 'UPDATE_PROGRESS':
      return {
        ...state,
        progress: { ...state.progress, ...action.payload }
      }
      
    case 'UPDATE_SETTINGS':
      return {
        ...state,
        settings: { ...state.settings, ...action.payload }
      }
      
    default:
      return state
  }
}

export function BPSCProvider({ children }) {
  const [state, dispatch] = useReducer(bpscReducer, initialState)

  // Initialize app data
  useEffect(() => {
    const initializeApp = async () => {
      dispatch({ type: 'SET_LOADING', payload: true })
      
      try {
        // Scan for content
        const subjects = await contentScanner.scanContent()
        dispatch({ type: 'SET_SUBJECTS', payload: subjects })
        
        // Calculate progress
        const progress = progressTracker.calculateProgress(subjects, state.quizResults)
        dispatch({ type: 'UPDATE_PROGRESS', payload: progress })
        
        // Load saved settings
        const savedSettings = localStorage.getItem('bpsc-settings')
        if (savedSettings) {
          dispatch({ type: 'UPDATE_SETTINGS', payload: JSON.parse(savedSettings) })
        }
        
      } catch (error) {
        console.error('Failed to initialize app:', error)
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false })
      }
    }

    initializeApp()
  }, [])

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('bpsc-settings', JSON.stringify(state.settings))
  }, [state.settings])

  // Auto-refresh content periodically
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const subjects = await contentScanner.scanContent()
        dispatch({ type: 'SET_SUBJECTS', payload: subjects })
      } catch (error) {
        console.error('Failed to refresh content:', error)
      }
    }, 30000) // Check every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const value = {
    state,
    dispatch,
    
    // Helper functions
    setActiveTab: (tab) => dispatch({ type: 'SET_ACTIVE_TAB', payload: tab }),
    
    setCurrentSubject: (subject) => dispatch({ type: 'SET_CURRENT_SUBJECT', payload: subject }),
    
    setCurrentTopic: (topic) => dispatch({ type: 'SET_CURRENT_TOPIC', payload: topic }),
    
    setCurrentLecture: (lecture) => dispatch({ type: 'SET_CURRENT_LECTURE', payload: lecture }),
    
    toggleSidebar: () => dispatch({ type: 'TOGGLE_SIDEBAR' }),
    
    setSidebarOpen: (open) => dispatch({ type: 'SET_SIDEBAR_OPEN', payload: open }),
    
    startQuiz: (quizData) => dispatch({ type: 'START_QUIZ', payload: quizData }),
    
    answerQuestion: (questionId, answer) => 
      dispatch({ type: 'ANSWER_QUESTION', payload: { questionId, answer } }),
    
    nextQuestion: () => dispatch({ type: 'NEXT_QUESTION' }),
    
    completeQuiz: (score) => dispatch({ type: 'COMPLETE_QUIZ', payload: { score } }),
    
    updateSettings: (settings) => dispatch({ type: 'UPDATE_SETTINGS', payload: settings }),
    
    refreshContent: async () => {
      dispatch({ type: 'SET_LOADING', payload: true })
      try {
        const subjects = await contentScanner.scanContent()
        dispatch({ type: 'SET_SUBJECTS', payload: subjects })
        
        const progress = progressTracker.calculateProgress(subjects, state.quizResults)
        dispatch({ type: 'UPDATE_PROGRESS', payload: progress })
      } catch (error) {
        console.error('Failed to refresh content:', error)
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false })
      }
    }
  }

  return (
    <BPSCContext.Provider value={value}>
      {children}
    </BPSCContext.Provider>
  )
}

export function useBPSC() {
  const context = useContext(BPSCContext)
  if (!context) {
    throw new Error('useBPSC must be used within a BPSCProvider')
  }
  return context
}