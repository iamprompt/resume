import { useState } from 'react'

type HideToggleProps = {
  className?: string
}

export const HideToggle = ({ className }: HideToggleProps) => {
  const [hide, setHide] = useState(false)

  function hideToggle(e: React.MouseEvent<HTMLButtonElement>) {
    setHide(!hide)
    const el = e.target as HTMLInputElement
    const parentEl = el.parentNode as HTMLInputElement
    if (!hide) {
      parentEl.classList.add('web-only', 'text-gray-300')
    } else {
      parentEl.classList.remove('web-only', 'text-gray-300')
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
