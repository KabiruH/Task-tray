import React, { useState } from "react";

export default function AddTodo() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");

    const [task, setTask] = useState({
        title: "",
        description: "",
        priority: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description, priority }),
        });
        if (response.ok) {
            setTask({ title: "", description: "", priority: "" });
        } else {
            console.error("Failed to create task");
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTask((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    return (
        <div class="card">
            <div class="card-body">
                <h1>Add task </h1><form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="Task Name" class="form-label">Task name</label>
                        <input type="text" class="form-control" value={title} onChange={handleInputChange} />
                    </div>
                    <div class="mb-3">
                        <label for="Description" class="form-label">Description</label>
                        <input type="text" class="form-control" value={description} onChange={handleInputChange} />
                    </div>
                    <div class="mb-3 form-check">
                        <label for="Status" class="form-label">Status</label>
                        <input type="integer" class="form-control" />
                    </div>
                    <div class="mb-3 form-check">
                        <label for="Priority" class="form-label">Priority</label>
                        <select type="integer" class="form-control" value={priority} onChange={handleInputChange}><option value="">--Select Priority--</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>

                    </div>
                    <button type="submit" class="btn btn-primary">Add Task</button>
                </form>
            </div>
        </div>
    )
}