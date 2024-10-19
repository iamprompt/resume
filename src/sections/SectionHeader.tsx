import { type FC } from 'react'

import { HideToggle } from '../components/HideToggle'

interface SectionHeaderProps {
  title: string
}

export const SectionHeader: FC<SectionHeaderProps> = ({ title }) => {
  return (
    <>
      <div className="flex items-baseline justify-between">
        <h2 className="inline text-left text-2xl uppercase">{title}</h2>
        <HideToggle level={2} />
      </div>
      <hr />
    </>
  )
}
