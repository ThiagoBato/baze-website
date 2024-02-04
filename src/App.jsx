import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Residencials from './pages/Residencial.jsx';
import Buildings from './pages/Buildings.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Comercials from './pages/Comercials.jsx';
import Interior from './pages/Interior.jsx';
import Team from './pages/Team.jsx';
import NoPage from './pages/NoPage.jsx';

// import { CookieConsentBanner } from './components/CookieConsentBanner';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="residenciais" element={<Residencials />} />
            <Route path="edificios" element={<Buildings />} />
            <Route path="comerciais" element={<Comercials />} />
            <Route path="interior" element={<Interior />} />
            <Route path="time" element={<Team />} />
            <Route path="projeto-detalhe" element={<ProjectDetail />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <CookieConsentBanner /> */}
    </>
  );
}

export default App;
