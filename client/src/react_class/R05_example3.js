import React, {useState, useEffect} from 'react'

const R05_example3 = () => {
  const [item, setItem] = useState([])

  const dataArray = 'https://api.github.com/users'

  const getUsers = async () => {
    const response = await fetch(dataArray)
    const items = await response.json()
    setItem(items)
  }
  
  useEffect(() => {
    getUsers()
  }, [])  //Prevent the re-render loop

  return(
    <React.Fragment>
      <h2>Use Effect Example - Item List</h2>
      <ul>
        {item.map((data) => {
          const {id, login, avatar_url, type} = data
          return(
            <li key={id}>
              <p>{login}</p>
              <img src={avatar_url} alt='Profile' style={{ width: '3rem', height: '3rem' }}></img>
              <p>{type}</p>
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

export default R05_example3