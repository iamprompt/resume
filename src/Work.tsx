import { FC } from 'react'

type WorkProps = {
  position: string
  company: string
  url?: string
  years: string[]
  details: string[]
}

export const Work: FC<WorkProps> = ({ position, company, url, years, details }) => {
  return (
    <div className="work-experience">
      <div className="flex font-bold mb-2 print:mb-1">
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
      <ul className="text-left list-disc pl-8 print:pl-6">
        {details.map((detail) => (
          <li>{detail}</li>
        ))}
      </ul>
    </div>
  )
}
