import type { FC } from 'react'

interface WorkProps {
  position: string
  company: string
  url?: string
  years: string[]
  details: string[]
}

export const Work: FC<WorkProps> = ({
  position,
  company,
  url,
  years,
  details,
}) => {
  return (
    <div className="work-experience">
      <div className="mb-2 flex font-bold print:mb-1">
        <div className="flex-1 text-left">{position}</div>
        <div className="flex-0">
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              {company}
            </a>
          ) : (
            <>{company}</>
          )}
        </div>
        <div className="flex-1 text-right">{years.join(' - ')}</div>
      </div>
      <ul className="list-disc pl-8 text-left print:pl-6">
        {details.map((detail) => (
          <li>{detail}</li>
        ))}
      </ul>
    </div>
  )
}
