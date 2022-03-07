import React from 'react'
import ReactDOM from 'react-dom'
import Main from './pages/Main'
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
        <Route path="/teste" element={() => <h1>Teste</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
