import './App.css'
import { DevAlert } from '~/components/DevAlert'
import AsideMenu from './components/AsideMenu'

function App() {

  return (
    <>
      <main>
        app test
      </main>
      <AsideMenu></AsideMenu>
      {import.meta.env.DEV ? <DevAlert></DevAlert> : null}
    </>
  )
}

export default App
