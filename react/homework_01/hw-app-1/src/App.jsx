import './App.css'
import Button from './components/Button'

function App() {

  return (
    <>
      <Button type="default" onClick={() => console.log('')}>Open first modal</Button>
      <Button type="default" onClick={() => console.log('')}>Open second modal</Button>
    </>
  )
}

export default App
