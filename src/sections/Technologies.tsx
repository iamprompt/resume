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

      <ul className="text-left">
        {data.map((tech) => {
          const details = Array.isArray(tech.details)
            ? tech.details.join(', ')
            : tech.details

          return (
            <li key={`tech-${tech.section}`}>
              <span className="flex items-baseline">
                <div className="flex w-40 shrink-0 flex-col items-start font-bold">
                  {tech.section}:
                </div>
                <span className="flex-1">{details}</span>
                <HideToggle level={2} />
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
