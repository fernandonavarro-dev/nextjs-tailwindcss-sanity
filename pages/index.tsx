import Header from 'components/Header'
import Hero from 'components/Hero'
import IntroTemplate from 'intro-template'
import Head from 'next/head'

export default function IndexPage() {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white">
      <Head>
        <title>Fernando Navarro Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </div>
  )
}
