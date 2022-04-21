import React, {useState, useEffect} from 'react'

const R05_example2 = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)

    return () => {
      console.log("Cleanup")
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  return(
    <React.Fragment>
      <h2>Use Effect Example</h2>
      <p>Window Inner Width is: {size} pixels.</p>
    </React.Fragment>
  )
}

export default R05_example2