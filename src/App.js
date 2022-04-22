import './styles/main.css'
import Rating from './components/Rating'
import Thankyou from './components/Thankyou'
import { useState } from 'react'
import {nanoid} from 'nanoid'

function App() {
  const [rate, setRate] = useState(rateValue())
  const [thanks, setThanks] = useState(false)

  function generateRate(num) {
    return {
      value: num,
      selected: false,
      id: nanoid(),
      selectedValue: ''
    }
  }

  function rateValue() {
    const newRate = []
    for(let i = 1; i < 6; i++) {
      newRate.push(generateRate(i))
    }
    return newRate
  }


  const rateElements = rate.map(item => {
    return (
      <div 
        onClick={() => checkRate(item.id)} 
        key={item.id} 
        className={item.selected ? "rate selected" : "rate"}
        >{item.value}
      </div>
    )
  })

  function checkRate(id) {
    setRate(prev => prev.map(item => {
      return id === item.id ? 
        {...item, selected: true} : 
        {...item, selected: false}
    }))
  }


  function submitBtn() {
    setThanks(true)
  }

  return (
    <main className="App">
      {thanks ? <Thankyou value={rate} /> : <Rating rateElements={rateElements}
      onclick={submitBtn}
      />}
    </main>
  );
}

export default App;
