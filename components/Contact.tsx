import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Contact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact
      </h3>

      <div className="mt-20 flex flex-col space-y-6">
        <h4 className="text-center text-3xl font-semibold">
          Always open to...{' '}
          <span className="underline decoration-[#ff25e2]/50">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#ff25e2]" />
            <p className="text-xl">(415) 853-7949</p>
          </div>
        </div>
        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#ff25e2]" />
            <p className="text-xl">fn@fn-dev.com</p>
          </div>
        </div>
        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#ff25e2]" />
            <p className="text-xl">San Francisco Bay Area</p>
          </div>
        </div>

        <form className="mx-auto flex w-fit flex-col space-y-2">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactFields" type="text" />
            <input placeholder="Email" className="contactFields" type="email" />
          </div>
          <input placeholder="Subject" className="contactFields" type="text" />

          <textarea placeholder="Message" className="contactFields" />
          <button
            type="submit"
            className="rounded-md bg-[#ff25e2]/80 py-5 px-10 text-lg font-bold text-gray-900"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  )
}
