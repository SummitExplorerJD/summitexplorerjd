import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "~/pages/Layout";
import HomePage from "~/pages/HomePage";
import NotFoundPage from "~/pages/NotFoundPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path='home' element={<HomePage></HomePage>}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
