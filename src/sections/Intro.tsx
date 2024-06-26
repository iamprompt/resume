import type { FC } from 'react'

interface IntroProps {
  name: string
  nickname: string
  phone: string
  email: string
  location: string
  github: string
  website: string
  linkedin: string
}

export const Intro: FC<IntroProps> = ({
  name,
  nickname,
  phone,
  email,
  location,
  github,
  website,
  linkedin,
}) => {
  return (
    <div className="text-sm sm:text-base">
      <h2 className="w-full flex-none p-4 text-center text-4xl font-bold sm:order-none lg:text-6xl print:pt-0">
        {name}
        <span className="-mt-1 block text-base lg:text-lg">({nickname})</span>
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

        <div className="w-48 flex-1 text-left text-sm sm:py-4 sm:text-right sm:text-base print:text-right">
          <p>
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noreferrer"
            >
              github.com/{github}
            </a>
          </p>
          <p>
            <a href={`https://${website}`} target="_blank" rel="noreferrer">
              {website}
            </a>
          </p>
          <p>
            <a
              href={`https://linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
