import React, { useState } from 'react'
import { AiFillCaretRight } from "react-icons/ai";
import data from "./data.json"

function Division3() {
    const [third, setThird] = useState(false)
  return (
    <div>
          <AiFillCaretRight onClick={() => { third ? setThird(false) : setThird(true) }} />location
          <ul style={{ listStyle: "none" }}>
              {third ? data.map((e, index) => (
                  <li key={index}>City : {e.location.city} <br/>
                  </li>
              )) : ""}
          </ul>
    </div>
  )
}

export default Division3