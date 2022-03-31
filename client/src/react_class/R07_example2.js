import React, {useState} from 'react'

const R07_example2 = () => {
  const [user, setUser] = useState({fullname: '', email: '', age: ''})
  const [userList, setUserList] = useState([])

  const changeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({...user, [name]: value})
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if(user.fullname && user.email && user.age){
      const newUser = {...user, id: new Date().getTime.toString}
      setUserList([...userList, newUser])
      setUser({fullname: '', email: '', age: ''})
    }
  }

  return(
    <React.Fragment>
      <article>
        <form>
          <div className='form-group' >
            <label htmlFor='fullname'>Enter your full name:</label>
            <input 
              type='text'
              id='fullname'
              name='fullname'
              className='form-control'
              value={user.fullname}
              onChange={changeHandler}
            />
          </div>

          <div className='form-group' >
            <label htmlFor='email'>Enter your email:</label>
            <input 
              type='email'
              id='email'
              name='email'
              className='form-control'
              value={user.email}
              onChange={changeHandler}
            />
          </div>

          <div className='form-group' >
            <label htmlFor='age'>Enter your age:</label>
            <input 
              type='number'
              id='age'
              name='age'
              className='form-control'
              value={user.age}
              onChange={changeHandler}
            />
          </div>

          <button type='submit' className='btn btn-primary' onClick={submitHandler}>Add User</button>
        </form>
      </article>

      <article>
        {userList.map((data) => {
          const {id, fullName, email, age} = data
          return(
            <div key={id}>
              <h6>{fullName}</h6>
              <h6>{email}</h6>
              <h6>{age}</h6>
            </div>
          )
        })}
      </article>
    </React.Fragment>
  )
}

export default R07_example2