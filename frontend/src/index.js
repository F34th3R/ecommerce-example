import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './components/App'
import { ThemeProvider } from './context/ThemeContext'
// import * as serviceWorker from './serviceWorker'

render(
  <ThemeProvider>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)

// serviceWorker.unregister()
