# BPSC Preparation Hub

A comprehensive React-based web application for Bihar Public Service Commission (BPSC) examination preparation. Features include interactive MCQ practice, automatic content detection, question paper generation, and progress tracking.

## Features

### 🎯 Core Functionality
- **Automatic Content Detection**: Scans folders for study materials and MCQ files
- **MCQ Practice**: Interactive quiz interface with timer and scoring
- **Question Paper Generator**: Create custom practice papers from available questions
- **Progress Tracking**: Monitor study progress and performance analytics
- **Mobile-First Design**: Responsive layout optimized for all devices

### 📚 Study Materials Management
- Hierarchical organization: Subjects → Topics → Lectures
- Support for PDF notes and MCQ JSON files
- Real-time content updates when new materials are added
- Progress indicators for each lecture and subject

### 🧠 MCQ Practice System
- Customizable quiz settings (question count, random order, time limits)
- Real-time question navigation and progress tracking
- Detailed results with performance analysis
- Grade calculation and improvement suggestions

### 📄 Question Paper Generation
- Select from multiple MCQ sources
- Configurable paper settings (questions, time, format)
- Export to HTML for printing or sharing
- Include/exclude answer keys option

### 📊 Progress Analytics
- Overall completion percentage tracking
- Subject-wise progress breakdown
- Quiz performance trends and insights
- Study streak monitoring
- Identification of strong areas and improvement areas

## Project Structure

```
BPSC/
├── src/
│   ├── components/
│   │   ├── Layout/           # App layout and navigation
│   │   ├── Navigation/       # Header and sidebar components
│   │   ├── Home/            # Dashboard and home page
│   │   ├── Subjects/        # Subject and lecture browser
│   │   ├── MCQ/             # Quiz interface and results
│   │   ├── QuestionPaper/   # Paper generator
│   │   ├── Progress/        # Analytics dashboard
│   │   └── UI/              # Reusable UI components
│   ├── context/             # React Context for state management
│   ├── services/            # Business logic and data services
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   └── styles/              # Global styles and Tailwind CSS
├── public/                  # Static assets
├── HISTORY/                 # Study materials folder
│   └── MODERN HISTORY/      # Subject folder
│       ├── Lecture-1/       # Individual lecture folders
│       │   ├── *.pdf        # Study material PDFs
│       │   ├── *.json       # MCQ question files
│       │   └── *.txt        # Extracted text files
│       └── ...
└── package.json
```

## Technology Stack

- **Frontend**: React 18 with Hooks
- **Styling**: Tailwind CSS + CSS Modules
- **State Management**: React Context API
- **Build Tool**: Vite
- **Icons**: Lucide React
- **PDF Support**: react-pdf
- **PWA**: Vite PWA Plugin

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern web browser

### Installation

1. **Clone and navigate to the project:**
   ```bash
   cd /path/to/BPSC
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Building for Production

```bash
npm run build
npm run preview
```

## Content Organization

### Adding Study Materials

The application automatically detects content based on this folder structure:

```
HISTORY/
└── MODERN HISTORY/
    ├── Lecture-1/
    │   ├── Modern History 01 Daily Class Notes (English).pdf
    │   ├── Modern History 01 Class Notes.pdf
    │   ├── MCQ_Questions_Lesson1.json
    │   └── daily_notes_text.txt
    ├── Lecture-2/
    └── ...
```

### MCQ File Format

MCQ files should follow this JSON structure:

```json
{
  "lesson": "Modern History - Lecture 01",
  "topic": "Later Mughals and Provincial Kingdom",
  "source": "Daily Class Notes (English) - Lecture 01",
  "total_questions": 75,
  "questions": [
    {
      "id": 1,
      "question": "Question text?",
      "options": {
        "A": "Option A",
        "B": "Option B",
        "C": "Option C",
        "D": "Option D"
      },
      "correct_answer": "B"
    }
  ],
  "answer_key": {
    "1": "B", "2": "A"
  }
}
```

## Key Features Explained

### Automatic Content Detection
- Scans the BPSC folder structure every 30 seconds
- Detects new lectures, PDFs, and MCQ files automatically
- Updates the UI in real-time without page refresh
- Calculates statistics (total lectures, MCQ count, completion rates)

### Progressive Web App (PWA)
- Works offline with cached content
- Installable on mobile devices
- Fast loading with service worker caching
- Native app-like experience

### Mobile Optimization
- Touch-friendly interface design
- Responsive navigation with hamburger menu
- Optimized typography and spacing
- Swipe gestures for quiz navigation

### Progress Persistence
- Local storage for progress tracking
- Quiz results and study time tracking
- Offline capability for continued use
- Export/import progress data

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Features

1. **Components**: Add to `src/components/`
2. **Services**: Add business logic to `src/services/`
3. **Context**: Update state management in `src/context/`
4. **Styles**: Use Tailwind classes or add to `src/styles/`

### Content Detection Service

The `contentScanner.js` service automatically:
- Detects folder structure changes
- Parses MCQ JSON files
- Calculates progress statistics
- Provides data to React components

## Browser Compatibility

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Follow the existing code structure and naming conventions
2. Use Tailwind CSS for styling
3. Maintain responsive design principles
4. Test on both desktop and mobile devices
5. Update documentation for new features

## License

This project is designed for educational purposes for BPSC examination preparation. All study materials and questions should be from legitimate sources.

## Support

For issues or questions:
1. Check the browser console for error messages
2. Verify the folder structure matches the expected format
3. Ensure MCQ JSON files follow the correct schema
4. Test with a small dataset first before adding large amounts of content

---

**Happy studying for your BPSC examination! 🎓**