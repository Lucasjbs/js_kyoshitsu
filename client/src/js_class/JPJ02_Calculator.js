import React, { useState }  from 'react'

function JPJ01_Names() {

  const [data, setData] = useState([])

  const submitQuerry = () => {
    console.log("Hello")
  }

  return (
    <div className='container'>
        <div className='row'>
            <h2>Full Name Sorter: </h2>
            <div className='col-sm-10'>
                <input type="text" className="form-control rounded" aria-label="Pesquisar"
                    aria-describedby="search-addon" onChange={(e) => {setData(e.target.value)}}/>
                <button type="button" className="btn btn-primary" onClick={submitQuerry} >Submit</button>
                <br></br>
                <br></br>

                <a href='http://localhost:3000/'>Return to home page</a>
            </div>
        </div>
    </div>
  )
}

export default JPJ01_Names