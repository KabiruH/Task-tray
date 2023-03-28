import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Task () {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://task-tray.onrender.com/todos");
      const data = await response.json();
      setTodos(data);
    }
    fetchData();
  }, []);

    function handleDelete () {

    }

    

    return (
        <div>
            <Link to="/add"><button class="btn btn-primary">Add To Do</button></Link>
            
        <table className="taskTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
            
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>1{todo.title}</td>
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