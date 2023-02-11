import type { FC } from 'react'
import { HideToggle } from '../HideToggle'
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
          <li>
            <div className="flex">
              <HideToggle />
              <span className="w-40 shrink-0">{tech.section}:</span>
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
