import React, {useState} from 'react'

const R04_example2 = () => {
  // const quote = ("Value")[0]
  // const setQuote = ("Value")[1]
  // Destructuring:
  const [quote, setQuote] = useState("The sun is rising on the beach!")

  const clickHandler = () => {
    if(quote === "The sun is rising on the beach!")
      setQuote("The sun is setting on the mountain!")
    else
      setQuote("The sun is rising on the beach!")
  }

  return(
    <React.Fragment>
      <h2>Basic Use State Example</h2>
      <p>{quote}</p>
      <button type='button' className='btn btn-primary' onClick={clickHandler}>Change Time</button>
    </React.Fragment>
  )
}

export default R04_example2