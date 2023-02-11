import { MODE, useMode } from '../hooks/useMode'

export const Header = () => {
  const { mode, toggleMode } = useMode()

  return (
    <div className="web-only mx-auto max-w-screen-xl p-4">
      <header className="w-full rounded-xl border border-blue-600 bg-blue-50 p-4 text-center text-black sm:p-6">
        <h1 className="mb-4 text-4xl font-bold">iamPrompt Résumé</h1>
        <h3 className="mb-2">
          <button onClick={toggleMode} className="text-lg underline">
            {mode === MODE.EDIT ? '[View]' : '[Edit]'}
          </button>
          <button onClick={() => window.print()} className="text-lg underline">
            [Print]
          </button>
        </h3>
        <p>
          Printer-friendly standard résumé. You can toggle{' '}
          <button onClick={toggleMode} className="underline">
            [Edit Mode]
          </button>{' '}
          to hide some sections before printing.
        </p>
      </header>
    </div>
  )
}
