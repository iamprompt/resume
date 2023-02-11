import type { FC } from 'react'
import { HideToggle } from '../components/HideToggle'
import type { Project } from '../types'
import { SectionHeader } from './SectionHeader'

export const ProjectsSection: FC<{ data: Project[] }> = ({ data = [] }) => {
  if (!data.length) {
    return null
  }

  return (
    <section>
      <SectionHeader title="Projects" />

      <ul className="list-disc pl-8 text-left">
        {data.map((project) => (
          <li>
            <HideToggle />
            <strong>{project.name}</strong> - {project.details}{' '}
            {project.url ? (
              <>
                <br />
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>{project.url}</strong>
                </a>
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
