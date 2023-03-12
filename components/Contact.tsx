import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

type Props = {}

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (FormData, event) => {
    event.preventDefault()
    window.location.href = `mailto:fn@fn-dev.com?subject=${FormData.subject}&body=Hi, my name is ${FormData.name}. ${FormData.message} (${FormData.email})`
    event.target.reset()
  }

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

      <div className="mt-20 flex w-fit flex-col space-y-6">
        <h4 className="text-wr w-auto text-center text-2xl font-semibold">
          Always open to cool projects with good teams.{' '}
          <span className="underline decoration-[#ff25e2]/60">
            Please reach out.
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#ff25e2]" />
            <p className="text-l">(415) 853-7949</p>
          </div>
        </div>
        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#ff25e2]" />
            <p className="text-l">fn@fn-dev.com</p>
          </div>
        </div>
        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#ff25e2]" />
            <p className="text-l">San Francisco Bay Area</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-2"
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              required={true}
              placeholder="Name"
              className="contactFields"
              type="text"
            />
            <input
              {...register('email')}
              required={true}
              placeholder="Email"
              className="contactFields"
              type="email"
            />
          </div>
          <input
            {...register('subject')}
            required={true}
            placeholder="Subject"
            className="contactFields"
            type="text"
          />

          <textarea
            {...register('message')}
            required={true}
            placeholder="Message"
            className="contactFields"
          />
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
