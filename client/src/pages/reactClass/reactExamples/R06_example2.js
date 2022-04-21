import React, {useState} from 'react'

const R06_example2 = () => {
  const text = ""
  const [isError, setIsError] = useState(false)

  /*  Example
      const text = ""
      const value1 = text || 'John'   (Displays the second value if the first one is FALSY)
      const value2 = text && 'John'   (Displays the second value if the first one is TRUTHY)
  */

  return(
    <React.Fragment>
      <h2>Short Circuit Evaluation Example</h2>
      <p>{text || 'John'}</p>
      <button type='button' className='btn btn-secondary' onClick={() => setIsError(!isError)}>Toggle Error</button>
      {isError && <p>Error....</p>}
      {isError ? (<p>There IS an error...</p>) : (<div><p>There's NO error</p></div>)}
    </React.Fragment>
  )
}

export default R06_example2