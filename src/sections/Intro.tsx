import { type FC } from 'react'

import { getUrl, getUrlText } from '@/utills/string'

interface IntroProps {
  name: string
  nickname: string
  phone: string
  email: string
  location: string
  links?: Array<[string, string]>
}

export const Intro: FC<IntroProps> = ({
  name,
  nickname,
  phone,
  email,
  location,
  links,
}) => {
  return (
    <div className="text-sm sm:text-base">
      <h2 className="w-full flex-none p-4 text-center !text-4xl font-bold sm:order-none lg:text-6xl print:pt-0">
        {name}
        <span className="-mt-1 block !text-base lg:text-lg">({nickname})</span>
      </h2>

      <div className="flex flex-row flex-wrap gap-x-5">
        <div className="w-48 flex-1 text-left sm:py-4">
          <p>
            <a href={`tel:${phone}`}>{phone}</a>
          </p>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>{location}</p>
        </div>
        {links && links.length > 0 ? (
          <ul className="w-48 flex-1 text-left text-sm sm:py-4 sm:text-right sm:text-base print:text-right">
            {links.map(([linkName, linkUrl]) => {
              const url = getUrl(linkUrl)
              const urlText = getUrlText(linkUrl)

              if (!url || !urlText) {
                return null
              }

              return (
                <li key={`link-${linkName}`}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {urlText}
                  </a>
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
