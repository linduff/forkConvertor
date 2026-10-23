import { useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState(0)

  const adjustScore = (e) => {
    setScore(Number(e.target.value))
    console.log(score)
  }

  return (
    <>
      <div id='header'>
        <a href="https://birdfuck.com">BIRDFUCK</a>
        <a href="https://hdtgm.com/">HDTGM</a>
      </div>
      <input 
        type="range" 
        min="0" 
        max="20" 
        step="1"
        value={score}
        onChange={adjustScore}
      />
      <table>
        <tbody>
          <tr>
            <td>Forks</td>
            <td>{(score/4).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Fangs</td>
            <td>{(score/2).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Straw Juniors</td>
            <td>{score.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
