import clsx from 'clsx'
import { useState } from 'react'
import {
  educations,
  fullVersionLink,
  interests,
  introData,
  projects,
  sourceLink,
  technologies,
  workExperiences,
  honors,
} from './data'
import { HideToggle } from './HideToggle'
import { Intro } from './Intro'
import { Work } from './Work'

const App = () => {
  const [editMode, setEditMode] = useState(false)

  function toggleMode() {
    setEditMode(!editMode)
  }

  return (
    <>
      <header className="web-only text-center p-4 sm:p-6 bg-green-400 text-white w-screen">
        <h1 className="text-4xl">Resumette</h1>
        <h3>
          <button onClick={toggleMode} className="underline text-lg">
            {editMode ? '[View]' : '[Edit]'}
          </button>
          <button onClick={() => window.print()} className="underline text-lg">
            [Print]
          </button>
        </h3>
        <p>
          Printer-friendly standard résumé, any HTML tags with <code>web-only</code> CSS class will be hidden on print.
        </p>
        <p>
          You can toggle{' '}
          <button onClick={toggleMode} className="underline">
            [Edit Mode]
          </button>{' '}
          to hide some sections before printing.
        </p>
        (
        <a href={sourceLink} target="_blank" rel="noopener">
          Source
        </a>
        )
      </header>

      <main
        className={clsx(
          `text-center p-4 m-0 md:m-8 xl:mx-auto max-w-screen-xl space-y-4 print:space-y-3`,
          editMode ? 'edit-mode' : 'display-mode'
        )}
      >
        <Intro {...introData} />

        {technologies.length > 0 ? (
          <section>
            <HideToggle />
            <h2 className="text-2xl uppercase text-left">Technologies and Languages</h2>
            <hr />
            <ul className="text-left list-disc pl-8">
              {technologies.map((tech) => (
                <li className="flex">
                  <HideToggle />
                  <span className="w-40 shrink-0">{tech.section}:</span>
                  <span>{Array.isArray(tech.details) ? tech.details.join(', ') : tech.details}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {educations.length > 0 ? (
          <section>
            <HideToggle />
            <h2 className="text-2xl uppercase text-left">Education</h2>
            <hr />

            <ul className="text-left list-disc pl-8">
              {educations.map((education) => (
                <li>
                  <HideToggle />
                  <strong>{education.head}</strong>
                  <br />
                  {education.details}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {workExperiences.length > 0 ? (
          <section>
            <HideToggle />
            <h2 className="text-2xl uppercase text-left">Work Experience</h2>
            <hr />

            {workExperiences.map((work) => (
              <Work {...work} />
            ))}
          </section>
        ) : null}

        {honors.length > 0 ? (
          <section>
            <HideToggle />
            <h2 className="text-2xl uppercase text-left">Honors / Awards</h2>
            <hr />

            {honors.map((honor) => (
              <div>
                <div className="flex font-bold">
                  <div className="flex-1 text-left">{honor.name}</div>
                </div>
                <ul className="text-left list-disc pl-8 print:pl-6">
                  {honor.details.map((detail) => (
                    <li>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ) : null}

        {projects.length > 0 ? (
          <section>
            <HideToggle />
            <h2 className="text-2xl uppercase text-left">Projects</h2>
            <hr />

            <ul className="text-left list-disc pl-8">
              {projects.map((project) => (
                <li>
                  <HideToggle />
                  <strong>{project.name}</strong> - {project.details}{' '}
                  {project.url ? (
                    <>
                      <br />
                      <a href={`https://${project.url}`} target="_blank" rel="noreferrer">
                        <strong>{project.url}</strong>
                      </a>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {interests.length > 0 ? (
          <section>
            <HideToggle />
            <h2 className="text-2xl uppercase text-left">Interests</h2>
            <hr />

            <ul className="text-left list-disc pl-8">
              {interests.map((interest) => (
                <li key={interest}>
                  <HideToggle />
                  {interest}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
    </>
  )
}

export default App
