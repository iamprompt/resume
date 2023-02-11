import clsx from 'clsx'
import {
  educations,
  honors,
  interests,
  introData,
  projects,
  technologies,
  workExperiences,
} from './data'
import { HideToggle } from './HideToggle'
import { MODE, useMode } from './hooks/useMode'
import { Header } from './components/Header'
import { Intro } from './sections/Intro'
import { Work } from './sections/Work'
import { SectionHeader } from './sections/SectionHeader'

const App = () => {
  const { mode } = useMode()

  return (
    <>
      <Header />
      <main
        className={clsx(
          `m-0 max-w-screen-xl space-y-4 p-4 text-center md:m-8 xl:mx-auto print:space-y-3`,
          mode === MODE.EDIT && 'edit-mode',
          mode === MODE.PREVIEW && 'display-mode'
        )}
      >
        <Intro {...introData} />

        {technologies.length > 0 ? (
          <section>
            <SectionHeader title="Technologies and Languages" />

            <ul className="list-disc pl-8 text-left">
              {technologies.map((tech) => (
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
        ) : null}

        {educations.length > 0 ? (
          <section>
            <SectionHeader title="Educations" />

            <ul className="list-disc pl-8 text-left">
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
            <SectionHeader title="Work Experiences" />

            {workExperiences.map((work) => (
              <Work {...work} />
            ))}
          </section>
        ) : null}

        {honors.length > 0 ? (
          <section>
            <SectionHeader title="Honors / Awards" />

            {honors.map((honor) => (
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
        ) : null}

        {projects.length > 0 ? (
          <section>
            <SectionHeader title="Projects" />

            <ul className="list-disc pl-8 text-left">
              {projects.map((project) => (
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
        ) : null}

        {interests.length > 0 ? (
          <section>
            <HideToggle />
            <h2 className="text-left text-2xl uppercase">Interests</h2>
            <hr />

            <ul className="list-disc pl-8 text-left">
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
