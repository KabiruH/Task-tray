import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Task from "./task";
import AddTodo from "./add";
import UpdateTodos from "./update";


export default function TaskList () {

    return (
        <div>
          
        <Routes>
            <Route path="/" element= {<SignUp/>}></Route>
            <Route path="/signIn" element= {<SignIn/>}></Route>
            <Route path="/task" element= {<Task/>}></Route>
            <Route path="/add" element= {<AddTodo/>}></Route>
            <Route path="/update" element= {<UpdateTodos/>}></Route>
        </Routes>
        </div>
    )
}