import type { FC } from 'react'

import type { Honors } from '../types'
import { SectionHeader } from './SectionHeader'

export const HonorsSection: FC<{ data: Honors[] }> = ({ data = [] }) => {
  if (!data.length) {
    return null
  }

  return (
    <section>
      <SectionHeader title="Honors / Awards" />

      {data.map((honor) => (
        <div key={`honor-${honor.name}`}>
          <div className="flex items-baseline justify-between">
            <div className="flex-1 text-left font-bold">
              {honor.name}
              <span className="text-sm font-normal">
                {honor.issuer ? ` by ${honor.issuer}` : ''}
              </span>
            </div>
            <div className="text-right font-bold">
              {honor.years?.join(' - ')}
            </div>
          </div>
          <ul className="list-disc pl-8 text-left print:pl-6">
            {honor.details.map((detail, i) => (
              <li key={`honor-${honor.name}-${i}`}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
