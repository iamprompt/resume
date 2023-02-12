import type { FC } from 'react'
import { HideToggle } from '../components/HideToggle'
import type { Technology } from '../types'
import { SectionHeader } from './SectionHeader'

interface Props {
  data: Technology[]
}

export const TechnologiesSection: FC<Props> = ({ data = [] }) => {
  if (!data.length) {
    return null
  }

  return (
    <section>
      <SectionHeader title="Technologies and Languages" />

      <ul className="list-disc pl-8 text-left">
        {data.map((tech) => (
          <li key={`tech-${tech.section}`}>
            <div className="flex flex-col gap-x-3 sm:flex-row">
              <HideToggle />
              <span className="w-40 shrink-0 font-bold">{tech.section}:</span>
              <span>
                {Array.isArray(tech.details)
                  ? tech.details.join(', ')
                  : tech.details}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
