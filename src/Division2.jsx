import React, { useState } from 'react'
import { AiFillCaretRight } from "react-icons/ai";
import data from "./data.json"

function Division2() {
    const [second, setSecond] = useState(false)
  return (
    <div>
          <AiFillCaretRight onClick={() => { second ? setSecond(false) : setSecond(true) }} />Job
          <ul style={{ listStyle: "none" }}>
              {second ? data.map((e, index) => (
                  <li key={index}> Designation: {e.job.role} <br /> Experience : {e.job.experience} </li>
              )) : ""}
          </ul>
    </div>
  )
}

export default Division2