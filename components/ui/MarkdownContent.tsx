import type { ReactNode } from 'react'
import Box from '@mui/material/Box'

interface MarkdownContentProps {
  content: string
}

type Block =
  | { type: 'h1' | 'h2' | 'h3'; text: string }
  | { type: 'hr' }
  | { type: 'ul' | 'ol'; items: string[] }
  | { type: 'p'; text: string }
  | { type: 'code'; text: string }
  | { type: 'blockquote'; text: string }

const HEADING_RE = /^(#{1,3})\s+(.*)$/
const HR_RE = /^(-{3,}|\*{3,})\s*$/
const QUOTE_RE = /^>\s?(.*)$/
const UL_RE = /^[-*]\s+(.*)$/
const OL_RE = /^\d+\.\s+(.*)$/

function isSpecialLine(line: string): boolean {
  return (
    HEADING_RE.test(line) ||
    HR_RE.test(line.trim()) ||
    QUOTE_RE.test(line) ||
    UL_RE.test(line) ||
    OL_RE.test(line) ||
    line.startsWith('```') ||
    line.trim() === ''
  )
}

function parseBlocks(content: string): Block[] {
  const lines = content.split('\n')
  const blocks: Block[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.trim() === '') {
      i++
      continue
    }

    if (line.startsWith('```')) {
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      i++
      blocks.push({ type: 'code', text: codeLines.join('\n') })
      continue
    }

    const headingMatch = line.match(HEADING_RE)
    if (headingMatch) {
      const level = headingMatch[1].length
      blocks.push({ type: level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3', text: headingMatch[2] })
      i++
      continue
    }

    if (HR_RE.test(line.trim())) {
      blocks.push({ type: 'hr' })
      i++
      continue
    }

    if (QUOTE_RE.test(line)) {
      const quoteLines: string[] = []
      while (i < lines.length && QUOTE_RE.test(lines[i])) {
        quoteLines.push(lines[i].replace(QUOTE_RE, '$1'))
        i++
      }
      blocks.push({ type: 'blockquote', text: quoteLines.join(' ') })
      continue
    }

    if (UL_RE.test(line)) {
      const items: string[] = []
      while (i < lines.length && UL_RE.test(lines[i])) {
        items.push(lines[i].replace(UL_RE, '$1'))
        i++
      }
      blocks.push({ type: 'ul', items })
      continue
    }

    if (OL_RE.test(line)) {
      const items: string[] = []
      while (i < lines.length && OL_RE.test(lines[i])) {
        items.push(lines[i].replace(OL_RE, '$1'))
        i++
      }
      blocks.push({ type: 'ol', items })
      continue
    }

    const paraLines: string[] = []
    while (i < lines.length && !isSpecialLine(lines[i]) && !lines[i].startsWith('```')) {
      paraLines.push(lines[i])
      i++
    }
    blocks.push({ type: 'p', text: paraLines.join(' ') })
  }

  return blocks
}

const INLINE_RE = /\*\*(.+?)\*\*|`(.+?)`|\[(.+?)\]\((.+?)\)|\*(.+?)\*/g

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let count = 0
  let match: RegExpExecArray | null

  INLINE_RE.lastIndex = 0
  while ((match = INLINE_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    if (match[1] !== undefined) {
      nodes.push(<strong key={`${keyPrefix}-${count++}`}>{match[1]}</strong>)
    } else if (match[2] !== undefined) {
      nodes.push(<code key={`${keyPrefix}-${count++}`}>{match[2]}</code>)
    } else if (match[3] !== undefined) {
      nodes.push(
        <a key={`${keyPrefix}-${count++}`} href={match[4]} target="_blank" rel="noopener noreferrer">
          {match[3]}
        </a>
      )
    } else if (match[5] !== undefined) {
      nodes.push(<em key={`${keyPrefix}-${count++}`}>{match[5]}</em>)
    }

    lastIndex = INLINE_RE.lastIndex
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const blocks = parseBlocks(content)

  return (
    <Box
      sx={{
        '& p': { mb: 3, lineHeight: 1.9, color: 'text.secondary' },
        '& h1': { mt: 5, mb: 2, fontWeight: 800, fontSize: '2rem' },
        '& h2': { mt: 5, mb: 2, fontWeight: 700, fontSize: '1.5rem' },
        '& h3': { mt: 4, mb: 2, fontWeight: 600 },
        '& ul, & ol': { pl: 3, mb: 3, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } },
        '& hr': { border: 'none', borderTop: '1px solid rgba(41,121,255,0.15)', my: 5 },
        '& strong': { color: 'text.primary', fontWeight: 700 },
        '& a': { color: 'primary.light' },
        '& pre': {
          backgroundColor: 'background.paper',
          border: '1px solid rgba(41,121,255,0.2)',
          borderRadius: 2,
          p: 3,
          mb: 3,
          overflow: 'auto',
          fontSize: '0.875rem',
        },
        '& code': {
          backgroundColor: 'rgba(41,121,255,0.1)',
          px: 0.75,
          py: 0.25,
          borderRadius: 1,
          fontSize: '0.875rem',
          color: 'primary.light',
        },
        '& blockquote': {
          borderLeft: '3px solid',
          borderColor: 'primary.main',
          pl: 3,
          ml: 0,
          mb: 3,
          '& p': { color: 'text.secondary', fontStyle: 'italic' },
        },
      }}
    >
      {blocks.map((block, i) => {
        const key = `block-${i}`

        switch (block.type) {
          case 'h1':
            return <h1 key={key}>{renderInline(block.text, key)}</h1>
          case 'h2':
            return <h2 key={key}>{renderInline(block.text, key)}</h2>
          case 'h3':
            return <h3 key={key}>{renderInline(block.text, key)}</h3>
          case 'hr':
            return <hr key={key} />
          case 'ul':
            return (
              <ul key={key}>
                {block.items.map((item, j) => (
                  <li key={`${key}-${j}`}>{renderInline(item, `${key}-${j}`)}</li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={key}>
                {block.items.map((item, j) => (
                  <li key={`${key}-${j}`}>{renderInline(item, `${key}-${j}`)}</li>
                ))}
              </ol>
            )
          case 'code':
            return (
              <pre key={key}>
                <code>{block.text}</code>
              </pre>
            )
          case 'blockquote':
            return (
              <blockquote key={key}>
                <p>{renderInline(block.text, key)}</p>
              </blockquote>
            )
          case 'p':
          default:
            return <p key={key}>{renderInline(block.text, key)}</p>
        }
      })}
    </Box>
  )
}
