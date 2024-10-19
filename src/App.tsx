import clsx from 'clsx'

import { Header } from './components/Header'
import { MODE } from './constants/mode'
import {
  educations,
  honors,
  interests,
  introData,
  projects,
  technologies,
  workExperiences,
} from './data'
import { useMode } from './hooks/useMode'
import { EducationsSection } from './sections/Educations'
import { HonorsSection } from './sections/Honors'
import { InterestsSection } from './sections/Interests'
import { Intro } from './sections/Intro'
import { ProjectsSection } from './sections/Projects'
import { TechnologiesSection } from './sections/Technologies'
import { WorkSection } from './sections/Works'

const App = () => {
  const { mode } = useMode()

  return (
    <>
      <Header />
      <main
        className={clsx(
          `max-w-screen-xl m-0 space-y-4 p-4 text-center md:m-8 xl:mx-auto print:space-y-3`,
          mode === MODE.EDIT && 'edit-mode',
          mode === MODE.PREVIEW && 'display-mode',
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
