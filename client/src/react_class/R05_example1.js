import React, {useState, useEffect} from 'react'

const R05_example1 = () => {
  const [emails, setEmails] = useState(0)

  useEffect(() => {
    console.log("Render Use Effect!")
    if(emails > 0){
      document.title = `New Messages (${emails})`
    }
  })  //Use Effect Second Argument

  return(
    <React.Fragment>
      <h2>Use Effect Example</h2>
      <p>Number of unread emails is: {emails}</p>
      <button type='button' className='btn btn-secondary' onClick={() => setEmails(emails + 1)}>Increase Emails</button>
    </React.Fragment>
  )
}

export default R05_example1