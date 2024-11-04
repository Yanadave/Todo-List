"use client"
import React, { useState } from "react";

const page = () => {
  const[title,settitle] = useState("")
  const[desc,setdesc] = useState("")
  
  //data ko ADD ON krne ke liye mtlb ki data ko save rkhne ke liye
  const[maintask,setmaintask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()

    // data save rkhne ke liye (addon krna)
    setmaintask([...maintask,{title,desc}])
    // ek baar ADDTASK pe click krne ke baad wapis box khali krne ke liye
    settitle("")
    setdesc("")
    console.log(maintask)
  }

  // DELETE KRNE KE LIYE
  const Deletehandler = (i) =>{
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)

  }

  let renderTask = <h2>No Task Available</h2>
  //agar kb ni todo list mai bhra toh khali dikhana vrna mt dikhana(no task available)
  if(maintask.length>0)

   renderTask = maintask.map((t,i) => {
    return(
      <li key={i} className="flex items-center justify-between mb-8">
        <div className="flex items-center justify-between  w-2/3">
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-lg font-medium">{t.desc}</h6>
        </div>
        <button 
        onClick={() => {
          Deletehandler(i)
        }}
        className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
      </li>
    )
     

  })
  return (
    <>
    <h1 className="bg-black text-white p-5 text-4xl font-bold text-center">Yana's Todo List</h1>
    <form  onSubmit={submitHandler} className="ml-64">
      <input type="text" className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
      placeholder="Enter Title Here"
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />

      <input type="text" className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
      placeholder="Enter Discription Here"
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />

      <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">Add Task</button>
    </form>  
    <hr />
    <div className="p-8 bg-slate-200">
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page