import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../core/Base";


export function UserDetails({user}){
    const {id} =useParams();
    const person = user[id];
    return(
        <BaseApp
        title={"Book and Author Details"}
        >
            <div className="user-content">
                <div className="user-card">
                   <h1>{person.bookname}</h1>
                   <p>author : {person.author}</p>
                   <p>Email : {person.email}</p>
                   <p>publishdate : {person.publishdate}</p> 
                   
                </div>
            </div>

        </BaseApp>
    )
}