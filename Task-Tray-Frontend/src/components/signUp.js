import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {

    return (
        <div class="card">
            <div class="card-body">
                <h1>Sign Up here</h1>
                <form>
                    <div class="row mb-3">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
                        </div>
                       
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail" class="form-label">Email address</label>
                        <input type="email" placeholder="E-mail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="form-check mb-3">
                    <Link to="/signIn"><button type="submit" class="btn btn-primary">Submit</button></Link>
                    </div>
                    
                </form>
                <label class="form-check-label">Already have an account?</label> <br/>
                <Link to="/signIn">Sign in here</Link>
            </div>
        </div>

    )
}

