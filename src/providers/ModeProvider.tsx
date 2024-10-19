import { FC, ReactNode } from 'react'

import { ModeContext } from '@/contexts/mode'
import { useModeProvider } from '@/hooks/useMode'

export const ModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const mode = useModeProvider()

  return <ModeContext.Provider value={mode}>{children}</ModeContext.Provider>
}
