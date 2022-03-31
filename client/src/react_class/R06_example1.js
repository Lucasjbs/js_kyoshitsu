import React, {useState, useEffect} from 'react'

const url = 'https://api.github.com/users/Lucasjbs';

const R06_example1 = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [profile, setProfile] = useState([])

  useEffect(() => {
    fetch(url).then((res) => {
      if(res.status >= 200 && res.status <= 299){
        return res.json()
      }
      else{
        setIsLoading(false)
        setIsError(true)
        throw new Error(res.statusText)
      }
    }).then((data) => {
      const {name, type, location, bio} = data
      setProfile({name, type, location, bio})
      setIsLoading(false)
    }).catch((error) => {console.log(error)})
  }, [])

  //Conditional render:
  if(isLoading){
    return(
      <div>
        <h2>Loading....</h2>
      </div>
    )
  }
  if(isError){
    return(
      <div>
        <h2>Error....</h2>
      </div>
    )
  }
  return(
    <React.Fragment>
      <h2>Conditional Rendering With Multiple Returns</h2>
      <h5>The {profile.type} full name is: {profile.name}</h5>
      <h5>The {profile.type} location is: {profile.location}</h5>
      <h5>Biography: {profile.bio}</h5>
    </React.Fragment>
  )
}

export default R06_example1