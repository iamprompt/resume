import type { FC } from 'react'
import { HideToggle } from '../components/HideToggle'
import type { Interests } from '../types'

export const InterestsSection: FC<{ data: Interests[] }> = ({ data = [] }) => {
  if (!data.length) {
    return null
  }

  return (
    <section>
      <HideToggle />
      <h2 className="text-left text-2xl uppercase">Interests</h2>
      <hr />

      <ul className="list-disc pl-8 text-left">
        {data.map((interest) => (
          <li key={`interest-${interest}`}>
            <HideToggle />
            {interest}
          </li>
        ))}
      </ul>
    </section>
  )
}
