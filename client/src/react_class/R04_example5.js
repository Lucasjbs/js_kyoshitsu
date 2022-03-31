import React, {useState} from 'react'

const R04_example5 = () => {
  const [value, setValue] = useState(0)

  const reset = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value + 1)
      setValue((data) => {
        return data + 1
      })
    }, 2000)  //Execute after 2 seconds
  }

  return(
    <React.Fragment>
      <section className='container'>
        <h2>Use State With a Regular Counter</h2>
        <h4>{value}</h4>
        <button type='button' className='btn btn-danger' onClick={() => setValue(value -1)}>Decrease</button>
        <button type='button' className='btn btn-warning' onClick={reset}>Reset</button>
        <button type='button' className='btn btn-success' onClick={() => setValue(value +1)}>Increase</button>
      </section>

      <br></br>
      <br></br>

      <section className='container'>
      <h2>Use State With a Complex Counter</h2>
        <h4>{value}</h4>
        <button type='button' className='btn btn-info' onClick={complexIncrease}>Complex Increase</button>
      </section>
    </React.Fragment>
  )
}

export default R04_example5