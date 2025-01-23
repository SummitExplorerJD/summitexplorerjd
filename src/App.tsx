import { DevAlert } from '~/components/DevAlert'
import AsideMenu from '~/components/AsideMenu'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

function App() {

  return (
    <>
      <Header></Header>
      <main>
        app test
      </main>
      <AsideMenu></AsideMenu>
      <Footer></Footer>
      {import.meta.env.DEV ? <DevAlert></DevAlert> : null}
    </>
  )
}

export default App
