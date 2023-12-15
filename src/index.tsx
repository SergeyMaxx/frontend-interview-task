import {createRoot} from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

createRoot(document.getElementById('root') as HTMLElement)
  .render(<App/>)

reportWebVitals()