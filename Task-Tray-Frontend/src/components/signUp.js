import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("https://task-tray.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      if (response.ok) {
        navigate("/signIn");
      } else {
        const data = await response.json();
        console.error(data.error);
      }
    } catch (error) {
      console.error("An unexpected error occurred: ", error);
    }
  };
  
  
  return (
    <div class="card">
      <div class="card-body">
        <h1>Sign Up here</h1>
        <form onSubmit={handleSubmit}>
          <div class="row mb-3">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)} required
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail" class="form-label">
              Email address
            </label>
            <input
              type="email"
              placeholder="E-mail"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              class="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        <label class="form-check-label">Already have an account?</label> <br />
        <Link to="/signIn">Sign in here</Link>
      </div>
    </div>
  );
}