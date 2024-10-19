import type { FC } from 'react'

import { HideToggle } from '../components/HideToggle'
import type { Education } from '../types'
import { SectionHeader } from './SectionHeader'

export const EducationsSection: FC<{ data: Education[] }> = ({ data = [] }) => {
  if (!data.length) {
    return null
  }

  return (
    <section>
      <SectionHeader title="Educations" />

      <ul className="list-disc pl-8 text-left">
        {data.map((education) => (
          <li key={`education-${education.head}`}>
            <HideToggle />
            <strong>{education.head}</strong>
            <br />
            {education.details}
          </li>
        ))}
      </ul>
    </section>
  )
}
