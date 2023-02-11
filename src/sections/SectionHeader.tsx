import type { FC } from 'react'
import { HideToggle } from '../components/HideToggle'

interface SectionHeaderProps {
  title: string
}

export const SectionHeader: FC<SectionHeaderProps> = ({ title }) => {
  return (
    <>
      <HideToggle />
      <h2 className="text-left text-2xl uppercase">{title}</h2>
      <hr />
    </>
  )
}
