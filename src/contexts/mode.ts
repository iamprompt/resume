import { createContext } from 'react'

import { MODE } from '@/constants/mode'

interface IModeContext {
  mode: MODE
  setMode: (mode: MODE) => void
  toggleMode: () => void
}

const defaultModeContext = {
  mode: MODE.PREVIEW,
  setMode: (_mode: MODE) => {
    throw new Error('setMode must be implemented')
  },
  toggleMode: () => {
    throw new Error('toggleMode must be implemented')
  },
}

export const ModeContext = createContext<IModeContext>(defaultModeContext)
