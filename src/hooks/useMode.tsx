import type { FC, ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'

export enum MODE {
  EDIT = 'edit',
  PREVIEW = 'preview',
}

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

const modeContext = createContext<IModeContext>(defaultModeContext)

export const useMode = () => useContext(modeContext)

const useModeProvider = () => {
  const [mode, setMode] = useState<MODE>(MODE.PREVIEW)

  const toggleMode = () => {
    setMode(mode === MODE.EDIT ? MODE.PREVIEW : MODE.EDIT)
  }

  return {
    mode,
    setMode: (mode: MODE) => setMode(mode),
    toggleMode,
  }
}

export const ModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const mode = useModeProvider()

  return <modeContext.Provider value={mode}>{children}</modeContext.Provider>
}
