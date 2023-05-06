import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../core/Base";

export default function AddTeacherUser({user, setUser}){
  const history =useHistory()

   const[name,setName]=useState("");
   const[id, setId]=useState("");
   const[email, setEmail] = useState("");
   const[exeprience, setExeprience]=useState("");
   const[category, setcategory]=useState("")
   const[batch, setBatch] = useState("");

   const addNewTeacherUser =()=>{
    const newUser = {
        id,
        name,
        email,
        batch,
        category,
        exeprience
    }
    
    
    setUser([...user,newUser]);
    history.push("/")




    setName("");
    setBatch("");
    setEmail("");
    setExeprience("");
    setcategory("")
    setId("");

   }


    return(
    <BaseApp
    title={"Add a Teacher Details"}
    >

<div>
           
           <input placeholder="id"
           value={id}
           onChange={(event)=>setId (event.target.value)}
           />


           <input placeholder="name"
           value={name}
           onChange={(event)=>setName(event.target.value)}

           />


           <input placeholder="email"
           value={email}
           onChange={(event)=>setEmail(event.target.value)}
           />



           <input placeholder="exeprience"
           value={exeprience}
           onChange={(event)=>setExeprience(event.target.value)}
           />

           <input placeholder="category"
           value={category}
           onChange={(event)=>setcategory(event.target.value)}
           />



           <input placeholder="batch"
           value={batch}
           onChange={(event)=>setBatch(event.target.value)}
           />



           <button
           onClick={addNewTeacherUser}
           >Add</button>
        
       
       
       
          </div>
    </BaseApp>
        

    )
}