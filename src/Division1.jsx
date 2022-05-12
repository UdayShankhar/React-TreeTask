import React, { useState } from 'react'
import data from "./data.json"
import { AiFillCaretRight } from "react-icons/ai";
import Division2 from './Division2';
import Division3 from './Division3';

function Division1() {

    const [first, setFirst] = useState(false)

    return (
        <div style={{ padding: "2.8rem" }}>
            <div style={{ "cursor": "pointer" }} >
                <h4>React Tree Viewer</h4>
                <AiFillCaretRight onClick={() => { first ? setFirst(false) : setFirst(true) }} />User1
                <ul style={{ listStyle: "none" }} >
                    {first ? data.map((e, index) => (
                        <li key={index}> ID : {index + 1} <br />  Name : {e.name} <br /> Email : {e.email} <br />
                            <span><Division2 /></span>
                            <span><Division3 /></span>
                        </li>
                    )) : ""}
                </ul>
            </div>
        </div>
    )
}

export default Division1