import { GlobalStyle } from './GlobalStyle.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Residencials from './pages/Residencial';
import Buildings from './pages/Buildings';
import ProjectDetail from './pages/ProjectDetail';
import Comercials from './pages/Comercials';
import Interior from './pages/Interior';
import Team from './pages/Team';
// import NoPage from './pages/NoPage';

// import { CookieConsentBanner } from './components/CookieConsentBanner';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="residenciais" element={<Residencials />} />
            <Route path="edificios" element={<Buildings />} />
            <Route path="comerciais" element={<Comercials />} />
            <Route path="interior" element={<Interior />} />
            <Route path="time" element={<Team />} />
            <Route path="projeto-detalhe/:postId" element={<ProjectDetail />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <CookieConsentBanner /> */}
    </>
  );
}

export default App;
