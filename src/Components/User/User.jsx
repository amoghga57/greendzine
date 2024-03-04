import React, { useState } from 'react'
import LogoCommon from '../Common components/LogoCommon'
import "./user.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const User = () => {

  let data =
    [
      { "id": 1, "name": "Arjun", "dob": "16-11-2000", "role": "Software Engineer" },
      { "id": 2, "name": "Mahesh", "dob": "16-11-2000", "role": "Software Engineer" },
      { "id": 3, "name": "Suresh", "dob": "16-11-2000", "role": "Software Engineer" },
      { "id": 4, "name": "Ramesh", "dob": "16-11-2000", "role": "Software Engineer" },
      { "id": 5, "name": "Surjan", "dob": "16-11-2000", "role": "Software Engineer" },
      { "id": 6, "name": "Darshan", "dob": "16-11-2000", "role": "Software Engineer" },
      { "id": 7, "name": "Robert", "dob": "16-11-2000", "role": "Software Engineer" },
      { "id": 8, "name": "Chad", "dob": "16-11-2000", "role": "Software Engineer" },
      { "id": 9, "name": "Suraj", "dob": "16-11-2000", "role": "Software Engineer" },
      { "id": 10, "name": "Arjun", "dob": "16-11-2000", "role": "Software Engineer" },

    ]

    const [Names, setNames] = useState("")

    const filteredData = data.filter(item => item.name.toLowerCase().includes(Names.toLowerCase()));
  return (
    <div id='main'>
      <div id="fixed_boxs">
        <LogoCommon />
        <div>
          <div id='search_bar'>
            <input type="text" value={Names} onChange={(e) => setNames(e.target.value)} placeholder='Search with name' />
            <FontAwesomeIcon icon={faMagnifyingGlass} id='symbol' />
          </div>
        </div>
      </div>

      <div id="info">
        {filteredData.map((x) => {
          return (
            <div id="boxs">
              <div>EMP ID : <span id='idno'> &nbsp; {x.id}</span></div>
              <div>Name &nbsp; &nbsp; : <span id='idno' > &nbsp; {x.name}</span></div>
              <div>DOB &nbsp; &nbsp; &nbsp;: <span id='dobd'> &nbsp; {x.dob}</span></div>
              <div>Role &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <span id='role'> &nbsp;{x.role}</span></div>
            </div>
          )
        })}
      </div>
      <div>
        <footer></footer>
      </div>
    </div>
  )
}

export default User