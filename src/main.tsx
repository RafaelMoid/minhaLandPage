import React from 'react'
import ReactDOM from 'react-dom'
import Main from './pages/Main'

import GlobalStyles from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
)
