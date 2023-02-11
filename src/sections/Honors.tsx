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
        <div>
          <div className="flex font-bold">
            <div className="flex-1 text-left">{honor.name}</div>
          </div>
          <ul className="list-disc pl-8 text-left print:pl-6">
            {honor.details.map((detail) => (
              <li>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
