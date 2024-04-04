import React from 'react'
import { useState } from 'react'

export default function Counter() {
    let [counter,setcounter]=useState(0)
    let [user, setuser]=useState(["Qavi","Anus","Maaz","Akhmal","Hasan","Aliza"])
  return (
    <div>
      <h1 style={{ backgroundColor: "red", color: "blue", fontSize: "50px"}}>Counter App</h1>
    <h1>{counter}</h1>
    <h2>
    <button onClick={()=>setcounter(++counter)}>+</button>
    <button onClick={()=> counter > 0 ? setcounter(--counter) : ""}>-</button>
    </h2>
    {
        user.map((val,index)=>{
            return(
                <li>{val}</li>
            )
        })
    }
    </div>
  )
}
