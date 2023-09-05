import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './css/Header.css';
import './css/Fonts.css';
import Main from './pages/Main';
import About from './pages/About'
import RealEstate from './pages/RealEstate'
import Business from './pages/Business'
import Trust from './pages/Trust'
import Estate from './pages/Estate'
import Malpractice from './pages/Mal'
import Tax from './pages/Tax'
import Probate from './pages/Probate'
import Contact from './pages/ContactUs'
import Services from './pages/Services'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/ryangordonLaw"
          element={<Main />}
        />
        <Route
          path="About"
          element={<About />}
        />
        <Route
          path="RealEstate"
          element={<RealEstate />}
        />
        <Route
          path="Business"
          element={<Business />}
        />
        <Route
          path="Trust"
          element={<Trust />}
        />
        <Route
          path="Estate"
          element={<Estate />}
        />
        <Route
          path="Malpractice"
          element={<Malpractice />}
        />
        <Route
          path="Probate"
          element={<Probate />}
        />
        <Route
          path="Tax"
          element={<Tax />}
        />
        <Route
          path="ContactUs"
          element={<Contact />}
        />
         <Route
          path="Services"
          element={<Services />}
        />
      </Routes>
    </Router>
  );
}

export default App;

