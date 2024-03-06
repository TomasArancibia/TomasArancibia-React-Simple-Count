import Counter from './components/counter'
import './App.css'
import { useState } from 'react';

function App() {
  const [seconds, setSeconds] = useState("")
  const [second, setSecond] = useState(0)
  const handleChange = (e) => {
  setSecond(e.target.value >= 0 ? e.target.value : "")}
  const handleSubmit = (e) => {
    e.preventDefault()
    setSeconds(second)
  }
  return (
    <>
      <Counter seconds={seconds} />
      <form onSubmit={handleSubmit} className='formcon'>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Countdown from:"
          maxLength={6}
          className='limitTimer bg-dark text-center'
        />
        <button type="submit" className="buttonCustom bg-dark">
          Start Countdown
        </button>
      </form>
    </>
  )
}

export default App
