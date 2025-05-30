import { FC, lazy, Suspense } from "react";
import AsideMenu from '~/components/AsideMenu'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Home from '~/components/Home'
import Halmet from 'react-helmet'


const AboutMe = lazy(() => import('~/components/AboutMe'));
const Services = lazy(() => import('~/components/Services'));
const Skills = lazy(() => import('~/components/Skills'));
const Projects = lazy(() => import('~/components/Projects'));
const Contact = lazy(() => import('~/components/Contact'));

const HomePage: FC = () => {
  return (
    <>
      <Halmet>
        <link rel="preload" href="/1000192510.avif" as="image" />
        <link rel="preload" href="/1000192628.avif" as="image" />
      </Halmet>
      <Header></Header>
      <main className='bg-[url(/1000192510.avif)] md:bg-[url(/1000192628.avif)] bg-cover bg-center bg-fixed bg-no-repeat' style={{ minHeight: '100vh', contain: 'paint' }}>
        <Home></Home>
        <Suspense fallback={<div className="loading-placeholder">Cargando...</div>}>
          <AboutMe></AboutMe>
          <Services></Services>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
        </Suspense>
      </main>
      <AsideMenu></AsideMenu>
      <Footer></Footer>
    </>
  )
}

export default HomePage;