import { useContext, useState } from 'react'

import { MODE } from '@/constants/mode'
import { ModeContext } from '@/contexts/mode'

export const useMode = () => useContext(ModeContext)

export const useModeProvider = () => {
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
