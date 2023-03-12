import About from 'components/About'
import Experience from 'components/Experience'
import Header from 'components/Header'
import Hero from 'components/Hero'
import Projects from 'components/Projects'
import Skills from 'components/Skills'
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

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>
    </div>
  )
}
