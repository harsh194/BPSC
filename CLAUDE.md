# BPSC Preparation Project

## Overview
Comprehensive study material and MCQ database for Bihar Public Service Commission (BPSC) examination preparation.

## Project Structure
```
BPSC/
├── HISTORY/
│   └── MODERN HISTORY/
│       ├── Lecture-1/
│       │   ├── Modern History 01 Daily Class Notes (English).pdf
│       │   ├── Modern History 01 Class Notes.pdf
│       │   ├── Modern History DPP 01 (English).pdf
│       │   ├── daily_notes_text.txt (OCR extracted)
│       │   ├── MCQ_Questions_Lesson1.json (75 questions)
│       │   ├── pdf_env/ (Python virtual environment)
│       │   └── CLAUDE.md (lecture-specific documentation)
│       ├── Lecture-2/
│       │   ├── Modern History 02 Daily Class Notes (English).pdf
│       │   ├── Modern History 02 Class Notes.pdf
│       │   └── Modern History DPP 02 (English).pdf
│       ├── Lecture-3/ through Lecture-13/
│       └── [Additional lecture folders organized]
└── CLAUDE.md (this file)
```

## Completed Work

### Modern History - Lecture 1
- **Topic**: Later Mughals and Provincial Kingdom
- **Status**: ✅ Complete
- **MCQs Created**: 75 comprehensive questions
- **Coverage**: Post-Aurangzeb period, War of Succession, Bahadur Shah I

#### Key Features:
- OCR text extraction from PDF notes
- BPSC prelims-style question framing
- Complete fact coverage from daily notes
- Verified answers with line references
- JSON format for easy integration

#### Sample Topics Covered:
- Aurangzeb's death (March 1707)
- Battle of Jajau (20 June 1707)
- Sons of Aurangzeb and their fates
- Mughal administrative structure
- Decline timeline through 1857

## Technical Setup

### OCR Setup with Virtual Environment
```bash
# Step 1: Install system dependencies (requires sudo)
sudo apt update
sudo apt install tesseract-ocr tesseract-ocr-hin  # For Hindi support if needed

# Step 2: Create virtual environment for OCR processing
python3 -m venv ocr_env
source ocr_env/bin/activate
pip install ocrmypdf

# Step 3: Verify installation
ocrmypdf --version
tesseract --version
```

## Step-by-Step Instructions

### Step 1: Extract Text from Daily Class Notes PDF using OCRmyPDF

1. **Navigate to the lecture folder**:
   ```bash
   cd "/path/to/BPSC/HISTORY/MODERN HISTORY/Lecture-X"
   ```

2. **Create and activate virtual environment**:
   ```bash
   python3 -m venv ocr_env
   source ocr_env/bin/activate
   pip install ocrmypdf
   ```

3. **Extract text using OCRmyPDF**:
   ```bash
   # Method 1: Extract text to sidecar file (recommended)
   ocrmypdf --sidecar daily_notes_text.txt "Modern History XX Daily Class Notes (English).pdf" /dev/null
   ```

   **Advanced extraction with better accuracy**:
   ```bash
   # For better accuracy with deskewing and cleaning
   ocrmypdf --deskew --clean --sidecar daily_notes_text.txt "Modern History XX Daily Class Notes (English).pdf" /dev/null
   ```

   **Alternative method: Create searchable PDF and extract text**:
   ```bash
   # Step 1: Create searchable PDF
   ocrmypdf "Modern History XX Daily Class Notes (English).pdf" searchable_output.pdf
   
   # Step 2: Extract text from searchable PDF (requires pdftotext)
   pdftotext searchable_output.pdf daily_notes_text.txt
   ```

4. **Verify extraction**:
   ```bash
   # Check if file was created and view first few lines
   ls -la daily_notes_text.txt
   head -20 daily_notes_text.txt
   ```

5. **Deactivate virtual environment** (when done):
   ```bash
   deactivate
   ```

### Step 2: Create MCQ JSON File

1. **Analyze the extracted text** (daily_notes_text.txt):
   - Read through all content line by line
   - Note all facts, dates, names, places, events
   - Identify relationships and cause-effects
   - Mark chronological sequences

2. **Frame questions following BPSC pattern**:
   - Direct factual questions (dates, names, places)
   - Chronological questions (timelines, sequences)
   - Analytical questions (causes, effects, significance)
   - Comparative questions (differences, similarities)
   - Statement-based questions (multiple facts)
   - Assertion-reasoning questions

3. **Create JSON structure**:
   ```json
   {
     "lesson": "Modern History - Lecture XX",
     "topic": "Topic Name from Notes",
     "source": "Daily Class Notes (English) - Lecture XX",
     "total_questions": XX,
     "questions": [
       {
         "id": 1,
         "question": "Question text ending with?",
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
       "1": "B", "2": "A", ...
     }
   }
   ```

4. **Question Creation Guidelines**:
   - Use ONLY content from the daily notes
   - Frame questions like a BPSC teacher would ask
   - Make realistic distractors using actual names/dates from notes
   - Cover EVERY fact mentioned in the notes
   - Verify each answer against the source text
   - Use proper academic language

5. **Quality Checks**:
   - Every question must be answerable from the daily notes
   - No external knowledge should be required
   - Options should be plausible but clearly distinguishable
   - Correct answers must be verifiable with line references
   - Cover all major topics and subtopics from the notes

### MCQ Generation Process
1. **Text Extraction**: OCR from PDF using OCRmyPDF (more accurate than PyPDF2)
2. **Content Analysis**: Line-by-line fact extraction
3. **Question Framing**: BPSC exam pattern following
4. **Answer Verification**: Cross-reference with source material
5. **JSON Export**: Structured format for easy access

### Example Commands with Virtual Environment
```bash
# For Lecture-1 (actual example)
cd "/mnt/f/BPSC/HISTORY/MODERN HISTORY/Lecture-1"
python3 -m venv ocr_env
source ocr_env/bin/activate
pip install ocrmypdf
ocrmypdf --output-type txt "Modern History 01 Daily Class Notes (English).pdf" daily_notes_text.txt
deactivate

# For Lecture-2
cd "/mnt/f/BPSC/HISTORY/MODERN HISTORY/Lecture-2"
python3 -m venv ocr_env
source ocr_env/bin/activate
pip install ocrmypdf
ocrmypdf --output-type txt "Modern History 02 Daily Class Notes (English).pdf" daily_notes_text.txt
deactivate

# Reusing existing virtual environment (if already created)
cd "/mnt/f/BPSC/HISTORY/MODERN HISTORY/Lecture-X"
source ocr_env/bin/activate  # If ocr_env already exists
ocrmypdf --output-type txt "Modern History XX Daily Class Notes (English).pdf" daily_notes_text.txt
deactivate
```

### OCRmyPDF vs PyPDF2 Comparison
| Feature | OCRmyPDF | PyPDF2 |
|---------|----------|--------|
| **Accuracy** | 95%+ | 70% |
| **Scanned PDFs** | ✅ Excellent | ❌ Poor |
| **Image Text** | ✅ Yes | ❌ No |
| **Tables/Layouts** | ✅ Good | ❌ Poor |
| **Setup** | Virtual env recommended | Virtual env needed |
| **Speed** | Medium | Fast |
| **Dependencies** | Tesseract + Python libs | Python only |

### Virtual Environment Benefits
- **Isolation**: Keeps OCR dependencies separate from system
- **Reproducibility**: Same setup across different machines
- **Clean**: Easy to remove if needed (`rm -rf ocr_env`)
- **Multiple Projects**: Each lecture can have its own environment

**Recommendation**: Use OCRmyPDF in virtual environment for all Daily Class Notes extraction for much better accuracy and clean dependency management.

## Future Work Plan

### Immediate Tasks
- [ ] Create MCQs for Modern History Lecture-2
- [ ] Create MCQs for Modern History Lecture-3
- [ ] Continue through all 13 lectures

### Extended Goals
- [ ] Add other history topics (Ancient, Medieval)
- [ ] Create subject-wise comprehensive tests
- [ ] Add explanation fields to MCQs
- [ ] Create difficulty-based categorization

## Usage Guidelines

### For Students
- Use JSON files for practice tests
- Follow chronological order of lectures
- Cross-reference with original PDFs
- Track progress through answer keys

### For Educators
- MCQs follow official BPSC pattern
- Questions test factual knowledge and analysis
- Can be used for mock examinations
- Structured format allows easy modification

## Quality Standards
- ✅ All questions based strictly on provided study material
- ✅ No external content added beyond daily notes
- ✅ BPSC prelims examination pattern followed
- ✅ Comprehensive coverage of all facts and dates
- ✅ Verified answer keys with source references

## Maintenance Notes
- Keep original PDF files intact
- Update MCQs if source material changes
- Maintain consistent JSON structure
- Document any modifications in lecture-specific CLAUDE.md files

## Contact & Support
This project uses Claude Code for automated MCQ generation based on official BPSC study materials. All content remains faithful to the original daily class notes provided.