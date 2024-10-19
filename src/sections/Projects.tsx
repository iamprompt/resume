import type { FC } from 'react'

import { getUrl, getUrlText } from '@/utills/string'

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
        {data.map((project) => {
          const url = getUrl(project.url)
          const urlText = getUrlText(project.url)

          return (
            <li key={`project-${project.name}`}>
              <HideToggle />
              <strong>{project.name}</strong> - {project.details}{' '}
              {url ? (
                <>
                  <br />
                  <a href={url} target="_blank" rel="noreferrer">
                    <strong>{urlText}</strong>
                  </a>
                </>
              ) : null}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
