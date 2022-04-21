import React, {useState} from 'react'

const R07_example1 = () => {
  const [fullName, setFullName] = useState("")
  const [age, setAge] = useState("")
  const [userList, setUserList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(fullName && age){
      const users = {
        id: new Date().getTime.toString, 
        userName: fullName,
        userAge: age
      }

      setUserList((data) => {
        return [...data, users]
      })

      setFullName('')
      setAge('')
    }
    else
      console.log("Empty data")
  }

  return(
    <React.Fragment>
      <article>
        <form onSubmit={handleSubmit}>
          <div className='form-group' >
            <label htmlFor='fullNameInput'>Enter your full name:</label>
            <input 
              type='text'
              id='fullNameInput'
              name='fullNameInput'
              className='form-control'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              //if onChange is not working, you won't be able to type any value on input
            />
          </div>

          <div className='form-group' >
            <label htmlFor='ageInput'>Enter your age:</label>
            <input 
              type='number'
              id='ageInput'
              name='ageInput'
              className='form-control'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className='btn btn-primary' type='submit'>Add User</button>
        </form>

        <br></br>
        <br></br>
        <h4>User List: </h4>
        {userList.map((data, index) => {
          const {id, userName, userAge} = data
          return(
            <div key={id}>
              <h6>Full Name: {userName}</h6>
              <h6>Age: {userAge}</h6>
            </div>
          )
        })}
      </article>
    </React.Fragment>
  )
}

export default R07_example1