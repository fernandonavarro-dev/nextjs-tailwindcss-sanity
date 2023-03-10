import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 mx-auto max-w-7xl items-start justify-between p-5 xl:items-center">
      <div className="flex items-start justify-between">
        <div className="flex flex-row items-center">
          <SocialIcon
            url="https://www.linkedin.com/in/fernando-n-dev/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/fernando-n-dev/"
            network="github"
            fgColor="gray"
            bgColor="transparent"
          />
          {/* <SocialIcon
            url="https://www.linkedin.com/in/fernando-n-dev/"
            fgColor="gray"
            bgColor="transparent"
          /> */}
        </div>
        <div className="flex cursor-pointer flex-row items-center text-gray-300">
          <SocialIcon
            url="https://www.linkedin.com/in/fernando-n-dev/"
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
            Get in touch
          </p>
        </div>
      </div>
    </header>
  )
}
