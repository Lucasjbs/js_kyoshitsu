import React from 'react'

const R04_example1 = () => {
  let quote = "The sun is rising on the beach!"

  const clickHandler = () => {
    quote = "The sun is setting on the mountain!"
    console.log("This function is being called, but the text returned by the JSX is static and will not change.")
    console.log(quote)
  }

  return(
    <React.Fragment>
      <h2>Error Example - Why we need Use State</h2>
      <p>{quote}</p>
      <button type='button' className='btn btn-secondary' onClick={clickHandler}>Change Time</button>
    </React.Fragment>
  )
}

export default R04_example1