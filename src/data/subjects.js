// Subject configuration and structure
export const subjects = {
  history: {
    id: 'history',
    name: 'History',
    description: 'Complete history syllabus for BPSC examination',
    icon: '🏛️',
    subSubjects: {
      modernHistory: {
        id: 'modern-history',
        name: 'Modern History',
        description: 'Modern Indian History from 1707 onwards',
        icon: '⚔️',
        lectures: {
          lecture1: {
            id: 'lecture1',
            title: 'Later Mughals and Provincial Kingdom',
            subtitle: 'Post-Aurangzeb Era and Succession Wars',
            estimatedReadTime: '25-30 minutes',
            dataFile: 'modernHistory/lecture1'
          },
          lecture2: {
            id: 'lecture2', 
            title: 'Bahadur Shah I & Jahandar Shah (1707-1713)',
            subtitle: 'Consolidation attempts and early decline',
            estimatedReadTime: '20-25 minutes',
            dataFile: 'modernHistory/lecture2'
          },
          lecture3: {
            id: 'lecture3',
            title: 'From Farrukhsiyar to Bahadur Shah Zafar (1713-1857)',
            subtitle: 'Complete decline of Mughal authority', 
            estimatedReadTime: '30-35 minutes',
            dataFile: 'modernHistory/lecture3'
          },
          lecture4: {
            id: 'lecture4',
            title: 'European Companies - Advent and Background',
            subtitle: 'The beginning of European colonial enterprise in Asia',
            estimatedReadTime: '25-30 minutes',
            dataFile: 'modernHistory/lecture4'
          },
          lecture5: {
            id: 'lecture5',
            title: 'European Companies - Timeline and Impact',
            subtitle: 'Comprehensive analysis of European colonial impact',
            estimatedReadTime: '25-30 minutes',
            dataFile: 'modernHistory/lecture5'
          },
          lecture6: {
            id: 'lecture6',
            title: 'Portuguese Empire in India',
            subtitle: 'The first European colonial power in India',
            estimatedReadTime: '20-25 minutes',
            dataFile: 'modernHistory/lecture6'
          },
          lecture7: {
            id: 'lecture7',
            title: 'Dutch, Danish & French Companies',
            subtitle: 'European competition for Indian trade dominance',
            estimatedReadTime: '25-30 minutes',
            dataFile: 'modernHistory/lecture7'
          },
          lecture8: {
            id: 'lecture8',
            title: 'British East India Company',
            subtitle: 'Rise of the most successful European trading company',
            estimatedReadTime: '25-30 minutes',
            dataFile: 'modernHistory/lecture8'
          },
          lecture9: {
            id: 'lecture9',
            title: 'Carnatic Wars - First War (1746-1748)',
            subtitle: 'The beginning of Anglo-French rivalry in India',
            estimatedReadTime: '20-25 minutes',
            dataFile: 'modernHistory/lecture9'
          },
          lecture10: {
            id: 'lecture10',
            title: 'Carnatic Wars - Second & Third Wars (1749-1763)',
            subtitle: 'Decisive Anglo-French struggle for Indian supremacy',
            estimatedReadTime: '30-35 minutes',
            dataFile: 'modernHistory/lecture10'
          },
          lecture11: {
            id: 'lecture11',
            title: 'Regional States - Bengal',
            subtitle: 'Bengal\'s importance in British colonial expansion',
            estimatedReadTime: '25-30 minutes',
            dataFile: 'modernHistory/lecture11'
          }
        }
      },
      ancientHistory: {
        id: 'ancient-history',
        name: 'Ancient History',
        description: 'Ancient Indian History and Civilization',
        icon: '🏺',
        lectures: {
          // Future lectures for ancient history
        }
      },
      medievalHistory: {
        id: 'medieval-history',
        name: 'Medieval History', 
        description: 'Medieval Indian History',
        icon: '🏰',
        lectures: {
          // Future lectures for medieval history
        }
      }
    }
  },
  geography: {
    id: 'geography',
    name: 'Geography',
    description: 'Physical and Human Geography for BPSC',
    icon: '🌍',
    subSubjects: {
      physicalGeography: {
        id: 'physical-geography',
        name: 'Physical Geography',
        description: 'Physical features and processes',
        icon: '🏔️',
        lectures: {
          // Future lectures
        }
      },
      humanGeography: {
        id: 'human-geography',
        name: 'Human Geography',
        description: 'Population, settlements, and economic geography',
        icon: '👥',
        lectures: {
          // Future lectures
        }
      }
    }
  },
  polity: {
    id: 'polity',
    name: 'Polity',
    description: 'Indian Constitution and Political System',
    icon: '⚖️',
    subSubjects: {
      constitution: {
        id: 'constitution',
        name: 'Constitution',
        description: 'Indian Constitution and its features',
        icon: '📜',
        lectures: {
          // Future lectures
        }
      },
      governance: {
        id: 'governance',
        name: 'Governance',
        description: 'Government structure and functioning',
        icon: '🏛️',
        lectures: {
          // Future lectures
        }
      }
    }
  },
  economics: {
    id: 'economics',
    name: 'Economics',
    description: 'Indian Economy and Economic Development',
    icon: '💰',
    subSubjects: {
      indianEconomy: {
        id: 'indian-economy',
        name: 'Indian Economy',
        description: 'Structure and development of Indian economy',
        icon: '🇮🇳',
        lectures: {
          // Future lectures
        }
      },
      economicDevelopment: {
        id: 'economic-development',
        name: 'Economic Development',
        description: 'Planning and development strategies',
        icon: '📈',
        lectures: {
          // Future lectures
        }
      }
    }
  }
}

// Helper functions
export const getSubject = (subjectId) => subjects[subjectId]
export const getSubSubject = (subjectId, subSubjectId) => subjects[subjectId]?.subSubjects[subSubjectId]
export const getLecture = (subjectId, subSubjectId, lectureId) => 
  subjects[subjectId]?.subSubjects[subSubjectId]?.lectures[lectureId]

export const getAllSubjects = () => Object.values(subjects)
export const getSubSubjects = (subjectId) => 
  subjects[subjectId] ? Object.values(subjects[subjectId].subSubjects) : []
export const getLectures = (subjectId, subSubjectId) => 
  subjects[subjectId]?.subSubjects[subSubjectId] ? 
  Object.values(subjects[subjectId].subSubjects[subSubjectId].lectures) : []

export default subjects