import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPolicyTerms from "~/pages/policy&terms/Layout";
import HomePage from "~/pages/HomePage";
import NotFoundPage from "~/pages/NotFoundPage";
import MdViewer from "./components/utils/MdViewer";
import IndexPolicyTerms from "./pages/policy&terms";
import { privAndTermsLst } from "./utils/privacytermsLs";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path='/home' element={<HomePage></HomePage>} />
        <Route path='/privacy&terms' element={<LayoutPolicyTerms />}>
          <Route index element={<IndexPolicyTerms />} />
          {privAndTermsLst.map((item, index) => (<Route key={index * 1} path={"/privacy&terms".concat(item.route)} element={<MdViewer url={item.url} />} />))}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
