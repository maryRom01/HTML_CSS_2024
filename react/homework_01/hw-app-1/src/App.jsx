import './App.css'
import Button from './components/Button'

function App() {

  return (
    <>
      <Button type="default" onClick={() => console.log('1')} classNames='first'>Open first modal</Button>
      <Button type="default" onClick={() => console.log('2')} classNames='second'>Open second modal</Button>
    </>
  )
}

export default App
