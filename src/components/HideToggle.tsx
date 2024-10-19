import { useState } from 'react'

type HideToggleProps = {
  className?: string
  level?: number
}

export const HideToggle = ({ className, level = 1 }: HideToggleProps) => {
  const [hide, setHide] = useState(false)

  function hideToggle(e: React.MouseEvent<HTMLButtonElement>) {
    setHide(!hide)
    const el = e.target as HTMLButtonElement
    let parentEl: HTMLElement | null = el.parentElement

    for (let i = 1; i < level; i++) {
      if (!parentEl) {
        break
      }

      parentEl = parentEl?.parentElement as HTMLLIElement
    }

    if (!hide) {
      parentEl?.classList.add('web-only', 'text-gray-300')
    } else {
      parentEl?.classList.remove('web-only', 'text-gray-300')
    }
  }

  return (
    <button
      className={`hide-toggle web-only ${className}`}
      onClick={hideToggle}
    >
      {hide ? '[Show]' : '[Hide]'}
    </button>
  )
}
