import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Residencials from './pages/Residencial.jsx';
import Buildings from './pages/Buildings.jsx';
import Comercials from './pages/Comercials.jsx';
import Interior from './pages/Interior.jsx';
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx';
import NoPage from './pages/NoPage.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="residencials" element={<Residencials />} />
            <Route path="buildings" element={<Buildings />} />
            <Route path="comercials" element={<Comercials />} />
            <Route path="interior" element={<Interior />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
