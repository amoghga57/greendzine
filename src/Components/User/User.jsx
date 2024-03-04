import React, { useEffect, useState } from 'react'
import LogoCommon from '../Common components/LogoCommon'
import "./user.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Navigation from '../Navigation/Navigation'

const User = () => {

  let data =
    [
      { "id": 1, "name": "Arjun", "dob": "16-11-2000", "role": "Software Engineer" },
      { "id": 2, "name": "Mahesh", "dob": "05-05-2022", "role": "Web Developer" },
      { "id": 3, "name": "Suresh", "dob": "11-07-2000", "role": "Backend developer" },
      { "id": 4, "name": "Ramesh", "dob": "07-10-2000", "role": "Software Engineer" },
      { "id": 5, "name": "Surjan", "dob": "21-01-2008", "role": "Cloud Engineer" },
      { "id": 6, "name": "Darshan", "dob": "31-11-2000", "role": "Architecture Engineer" },
      { "id": 7, "name": "Robert", "dob": "20-06-2000", "role": "Frontend Developer" },
      { "id": 8, "name": "Chad", "dob": "15-12-2000", "role": "DevOps" },
      { "id": 9, "name": "Suraj", "dob": "25-02-2000", "role": "Technical Support" },
      { "id": 10, "name": "Arjun", "dob": "01-05-2000", "role": "AI Engineer" },
    ]

  const [Names, setNames] = useState("")


  const filteredData = data.filter(item => item.name.toLowerCase().includes(Names.toLowerCase()));

  useEffect(() => {
    if (filteredData.length <= 0) {
      document.getElementById("notFound").style.display = "flow-root"
    } else {
      // document.getElementById("notFound").style.visibility="hidden"
      document.getElementById("notFound").style.display = "none"
    }
  }, [filteredData])


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
      <label id='notFound' >
        <div>NO PERSON FOUND</div>
      </label>
      <div id="info">

        {filteredData.map((x) => {
          return (
            <div id="boxs">
              <div>EMP ID &nbsp; : <span id='idno'> &nbsp; {x.id}</span></div>
              <div>Name &nbsp; &nbsp; : <span id='idno' > &nbsp; {x.name}</span></div>
              <div>DOB &nbsp; &nbsp; &nbsp; : <span id='dobd'> &nbsp; {x.dob}</span></div>
              <div>Role &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <span id='role'> &nbsp;{x.role}</span></div>
            </div>
          )
        })}
      </div>

      <div>
        <footer></footer>
      </div>

      <Navigation />

    </div>
  )
}

export default User