import React, {useState, useEffect} from 'react'

const R06_example3 = () => {
  const [show, setShow] = useState(false)
  return(
    <React.Fragment>
      <h2>Conditional Rendering Example</h2>
      <button type='button' className='btn btn-secondary' onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <Item />}
    </React.Fragment>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return() => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  return(
    <React.Fragment>
      <p>Window size in pixels: {size}</p>
    </React.Fragment>
  )
}

export default R06_example3