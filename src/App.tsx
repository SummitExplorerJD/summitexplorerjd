import { DevAlert } from '~/components/utils/DevAlert'
import AsideMenu from '~/components/AsideMenu'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Home from '~/components/Home'
import AboutMe from '~/components/AboutMe'
import Services from '~/components/Services'
import Skills from '~/components/Skills'
import Projects from '~/components/Projects'
import Contact from '~/components/Contact'

function App() {

  return (
    <>
      <Header></Header>
      <main className='bg-[url(/1000192510.jpg)] md:bg-[url(/1000192628.jpg)] bg-cover bg-center bg-fixed bg-no-repeat'>
        <Home></Home>
        <AboutMe></AboutMe>
        <Services></Services>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <AsideMenu></AsideMenu>
      <Footer></Footer>
      {import.meta.env.DEV ? <DevAlert></DevAlert> : null}
    </>
  )
}

export default App
