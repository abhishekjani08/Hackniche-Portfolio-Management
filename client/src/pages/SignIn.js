import axios from 'axios';
import React, { useState } from 'react'

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");


  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const userData = { userName, email, userPassword };

      const data = await axios.post("http://localhost:5000/api/user/signup", userData);
      if (data.data.user === null) {
        alert("Error while getting login");
      }
      else {
        setUserName(data.data.userName);
        setEmail(data.data.email);
        setUserPassword(data.data.userPassword);

        console.log(data);

        alert("User Signin successful");
      }


    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form onSubmit={handleSignIn} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Register</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Name"
              onChange={(e) => setUserName(e.target.value)}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={(e) => setUserPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-indigo-500 text-white hover:bg-indigo-700 focus:outline-none my-1"
            >Create Account</button>

            {/* <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                Terms of Service
              </a> and
              <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                Privacy Policy
              </a>
            </div> */}
          </form>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a className="no-underline border-b border-blue text-blue" href="/login">
              Login
            </a>.
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn