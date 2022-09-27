import ReactDOM from 'react-dom/client'
import { App } from './App'
import { TestComponent } from './components/testing'

const domContainer = document.getElementById('main')
const root = ReactDOM.createRoot(domContainer)
root.render(
  <App>
    <>
      <TestComponent />
    </>
  </App>
)
