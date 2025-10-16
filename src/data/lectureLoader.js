// Dynamic lecture data loader
import { subjects, getLecture } from './subjects.js'

// Cache for loaded lecture data
const lectureCache = new Map()

/**
 * Dynamically loads lecture data based on subject, sub-subject, and lecture ID
 * @param {string} subjectId - The subject identifier (e.g., 'history')
 * @param {string} subSubjectId - The sub-subject identifier (e.g., 'modern-history')  
 * @param {string} lectureId - The lecture identifier (e.g., 'lecture-1')
 * @returns {Promise<Object>} The lecture data object
 */
export const loadLectureData = async (subjectId, subSubjectId, lectureId) => {
  // Create cache key
  const cacheKey = `${subjectId}-${subSubjectId}-${lectureId}`
  
  // Check cache first
  if (lectureCache.has(cacheKey)) {
    return lectureCache.get(cacheKey)
  }

  // Get lecture metadata from subjects config
  const lectureMetadata = getLecture(subjectId, subSubjectId, lectureId)
  
  if (!lectureMetadata) {
    throw new Error(`Lecture not found: ${subjectId}/${subSubjectId}/${lectureId}`)
  }

  try {
    // Import lecture data based on subject and sub-subject
    let lectureData
    
    if (subjectId === 'history' && subSubjectId === 'modernHistory') {
      const { lectureMap } = await import('./subjects/history/modernHistory/index.js')
      lectureData = lectureMap[lectureId]
      
      if (!lectureData) {
        throw new Error(`Lecture not found in lectureMap: ${lectureId}`)
      }
    } else {
      throw new Error(`Subject/sub-subject combination not supported yet: ${subjectId}/${subSubjectId}`)
    }
    
    if (!lectureData) {
      throw new Error(`Lecture data not loaded correctly: ${lectureId}`)
    }

    // Merge metadata with actual content
    const fullLectureData = {
      ...lectureMetadata,
      ...lectureData
    }

    // Cache the result
    lectureCache.set(cacheKey, fullLectureData)
    
    return fullLectureData
  } catch (error) {
    console.error(`Failed to load lecture data: ${lectureMetadata.dataFile}`, error)
    throw error
  }
}

/**
 * Loads all available lectures for a sub-subject
 * @param {string} subjectId - The subject identifier
 * @param {string} subSubjectId - The sub-subject identifier
 * @returns {Promise<Array>} Array of lecture data objects
 */
export const loadAllLecturesForSubSubject = async (subjectId, subSubjectId) => {
  const subSubject = subjects[subjectId]?.subSubjects[subSubjectId]
  
  if (!subSubject) {
    throw new Error(`Sub-subject not found: ${subjectId}/${subSubjectId}`)
  }

  const lecturePromises = Object.keys(subSubject.lectures).map(lectureId =>
    loadLectureData(subjectId, subSubjectId, lectureId)
  )

  return Promise.all(lecturePromises)
}

/**
 * Legacy support - maps old lecture data format to new structure
 * @param {number|string} lectureNumber - The lecture number (1, 2, 3, etc.)
 * @returns {Promise<Object>} The lecture data object
 */
export const loadLegacyLecture = async (lectureNumber) => {
  // Default to modern history for backward compatibility
  const lectureId = `lecture${lectureNumber}`
  return loadLectureData('history', 'modernHistory', lectureId)
}

/**
 * Gets available lecture numbers for a sub-subject
 * @param {string} subjectId - The subject identifier
 * @param {string} subSubjectId - The sub-subject identifier  
 * @returns {Array<number>} Array of available lecture numbers
 */
export const getAvailableLectureNumbers = (subjectId, subSubjectId) => {
  const subSubject = subjects[subjectId]?.subSubjects[subSubjectId]
  
  if (!subSubject) {
    return []
  }

  return Object.keys(subSubject.lectures)
    .map(lectureId => {
      const match = lectureId.match(/lecture(\d+)/)
      return match ? parseInt(match[1]) : null
    })
    .filter(num => num !== null)
    .sort((a, b) => a - b)
}

/**
 * Check if a lecture exists
 * @param {string} subjectId - The subject identifier
 * @param {string} subSubjectId - The sub-subject identifier
 * @param {string} lectureId - The lecture identifier
 * @returns {boolean} True if lecture exists
 */
export const lectureExists = (subjectId, subSubjectId, lectureId) => {
  return !!getLecture(subjectId, subSubjectId, lectureId)
}

// Clear cache utility
export const clearLectureCache = () => {
  lectureCache.clear()
}

export default {
  loadLectureData,
  loadAllLecturesForSubSubject, 
  loadLegacyLecture,
  getAvailableLectureNumbers,
  lectureExists,
  clearLectureCache
}