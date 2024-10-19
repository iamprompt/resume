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

      <ul className="list-disc space-y-2 pl-8 text-left">
        {data.map((project) => {
          return (
            <li key={`project-${project.name}`}>
              <HideToggle className="mr-1" />
              <strong>{project.name}</strong>
              {project.tagline ? ` - ${project.tagline}` : null}
              {project.details ? (
                <div className="text-sm">{project.details}</div>
              ) : null}
              {project.links && project.links.length > 0 ? (
                <ul>
                  {project.links.map(([linkName, linkUrl]) => {
                    const url = getUrl(linkUrl)
                    const text = getUrlText(linkUrl)

                    if (!url || !text) {
                      return null
                    }

                    return (
                      <li
                        key={`${project.name}-${linkName}`}
                        className="text-sm"
                      >
                        <span className="font-bold">{linkName}</span> -{' '}
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          {text}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              ) : null}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
