import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
        src="https://d1h96izmtdkx5o.cloudfront.net/-MU5d6MCYt79DOxkUICm.jpg?v=12"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          React.js Developer - Internal Apps
        </h4>
        <p className="my-2 flex space-x-2">Just Click MX</p>
        <div>{/* Tech used */}</div>
        <p>Started work... - Ended</p>

        <ul className="ml-5 list-disc space-y-4 text-lg">
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </article>
  )
}
