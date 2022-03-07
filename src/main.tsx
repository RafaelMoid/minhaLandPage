import React from 'react'
import ReactDOM from 'react-dom'
import Main from './pages/Main'
import AboutMe from './pages/AboutMe'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import GlobalStyles from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/services" element={<AboutMe/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/contact" element={<AboutMe/>}  />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
