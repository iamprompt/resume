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
import { MODE, useMode } from './hooks/useMode'
import { Header } from './components/Header'
import { Intro } from './sections/Intro'
import { WorkSection } from './sections/Works'
import { TechnologiesSection } from './sections/Technologies'
import { EducationsSection } from './sections/Educations'
import { ProjectsSection } from './sections/Projects'
import { HonorsSection } from './sections/Honors'
import { InterestsSection } from './sections/Interests'

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
        <TechnologiesSection data={technologies} />
        <EducationsSection data={educations} />
        <WorkSection data={workExperiences} />
        <HonorsSection data={honors} />
        <ProjectsSection data={projects} />
        <InterestsSection data={interests} />
      </main>
    </>
  )
}

export default App
