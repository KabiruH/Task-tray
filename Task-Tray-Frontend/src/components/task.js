import React from "react";
import { Link } from "react-router-dom";

export default function Task () {

    let todos = [];

    function handleDelete () {

    }

    

    return (
        <div>
            <Link to="/add"><button class="btn btn-primary">Add To Do</button></Link>
            
        <table className="taskTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
            
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>1{todo.name}</td>
              <td>2{todo.description}</td>
              <td>3{todo.priority}</td>
              <td>4{todo.status}</td>
              <td>
                <Link to="/update"><button class="btn btn-primary">Update</button></Link>
                <button class="btn btn-primary" onClick={() => handleDelete(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    )
}