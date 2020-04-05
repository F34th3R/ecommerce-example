import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import 'typeface-roboto'
import { App } from './components/App'
import { CoreProvider } from './context/CoreContext'
// import * as serviceWorker from './serviceWorker'

render(
  <CoreProvider>
    <Router>
      <App />
    </Router>
  </CoreProvider>,
  document.getElementById('root')
)

// serviceWorker.unregister()
