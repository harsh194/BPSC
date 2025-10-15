import React, { useEffect, useMemo, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react'

// Configure PDF.js worker. Prefer CDN based on installed pdfjs-dist version.
// For fully offline usage, place pdf.worker.min.js in /public and set workerSrc = '/pdf.worker.min.js'
pdfjs.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js'

function PdfViewer({ fileUrl, fileCandidates = [] }) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1.2)
  const [error, setError] = useState('')
  const [srcIndex, setSrcIndex] = useState(0)

  const sources = useMemo(() => {
    const list = Array.isArray(fileCandidates) && fileCandidates.length > 0 ? fileCandidates : (fileUrl ? [fileUrl] : [])
    return list.filter(Boolean)
  }, [fileUrl, fileCandidates])

  useEffect(() => {
    setNumPages(null)
    setPageNumber(1)
    setError('')
    setSrcIndex(0)
  }, [sources])

  const onLoadSuccess = ({ numPages: nextNumPages }) => {
    setNumPages(nextNumPages)
  }

  const onLoadError = (err) => {
    if (srcIndex < sources.length - 1) {
      setSrcIndex((i) => i + 1)
      return
    }
    setError(err?.message || 'Failed to load PDF')
  }

  const canPrev = pageNumber > 1
  const canNext = numPages ? pageNumber < numPages : false

  return (
    <div className="space-y-3">
      {/* Toolbar */}
      <div className="flex items-center justify-between bg-secondary-100 rounded-lg px-3 py-2">
        <div className="flex items-center space-x-2">
          <button
            className="btn btn-outline px-2 py-1"
            onClick={() => setScale((s) => Math.max(0.5, s - 0.1))}
            title="Zoom out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-sm text-secondary-700 w-16 text-center">{Math.round(scale * 100)}%</span>
          <button
            className="btn btn-outline px-2 py-1"
            onClick={() => setScale((s) => Math.min(3, s + 0.1))}
            title="Zoom in"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            className="btn btn-outline px-2 py-1 ml-2"
            onClick={() => setScale(1)}
            title="Reset zoom"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button
            className="btn btn-outline px-2 py-1"
            onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
            disabled={!canPrev}
            title="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-sm text-secondary-700">
            Page {pageNumber}{numPages ? ` of ${numPages}` : ''}
          </span>
          <button
            className="btn btn-outline px-2 py-1"
            onClick={() => setPageNumber((p) => (numPages ? Math.min(numPages, p + 1) : p + 1))}
            disabled={!canNext}
            title="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Viewer */}
      <div className="w-full flex justify-center bg-white border border-secondary-200 rounded-lg overflow-hidden">
        {error ? (
          <div className="p-6 text-secondary-700 flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            <span className="text-sm">{error}</span>
          </div>
        ) : (
          <Document file={sources[srcIndex]} onLoadSuccess={onLoadSuccess} onLoadError={onLoadError} loading={<div className="p-6">Loading PDF…</div>}>
            <Page pageNumber={pageNumber} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />
          </Document>
        )}
      </div>
    </div>
  )
}

export default PdfViewer
