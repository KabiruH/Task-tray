import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn () {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();

      if (response.ok) {
        navigate("/task");
      } else {
        setErrorMsg("Incorrect password");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div class="card">
      <div class="card-body">
        <h1>Login here</h1>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" placeholder="E-mail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1" onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div class="form-check mb-3">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
        {errorMsg && <p>{errorMsg}</p>}
        <label class="form-check-label">Don't have an account?</label> <br/>
        <Link to="/signUp">Sign up here</Link>
      </div>
    </div>
  );
}
