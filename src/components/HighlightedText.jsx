import { useMemo } from 'react'
import { resumeKeywords } from '@/data/resumeData'

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Finds all keyword matches in text (case-insensitive). Longer matches win when overlapping.
 */
function findKeywordMatches(text, keywords) {
  if (!text || typeof text !== 'string') return []
  const matches = []
  for (const kw of keywords) {
    if (!kw || kw.length < 2) continue
    const pattern = new RegExp(escapeRegex(kw), 'gi')
    let m
    while ((m = pattern.exec(text)) !== null) {
      matches.push({ start: m.index, end: m.index + m[0].length, text: m[0] })
    }
  }
  // Sort by start, then by length descending (longer first)
  matches.sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start))
  // Drop overlaps: keep first (longest at this position) and skip any that start before previous end
  const merged = []
  for (const m of matches) {
    if (merged.length && m.start < merged[merged.length - 1].end) continue
    merged.push(m)
  }
  return merged
}

/**
 * Renders text with resume keywords highlighted for recruiter scanning.
 */
export default function HighlightedText({ text, className = '' }) {
  const segments = useMemo(() => {
    const matches = findKeywordMatches(text, resumeKeywords)
    if (matches.length === 0) return [{ type: 'text', value: text }]
    const out = []
    let last = 0
    for (const m of matches) {
      if (m.start > last) {
        out.push({ type: 'text', value: text.slice(last, m.start) })
      }
      out.push({ type: 'keyword', value: m.text })
      last = m.end
    }
    if (last < text.length) {
      out.push({ type: 'text', value: text.slice(last) })
    }
    return out
  }, [text])

  if (!text) return null

  return (
    <span className={className}>
      {segments.map((seg, i) =>
        seg.type === 'keyword' ? (
          <mark
            key={i}
            className="bg-cyan-500/25 text-cyan-200 rounded px-0.5 font-medium"
          >
            {seg.value}
          </mark>
        ) : (
          seg.value
        )
      )}
    </span>
  )
}
