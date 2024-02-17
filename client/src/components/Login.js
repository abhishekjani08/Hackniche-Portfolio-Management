import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const history = useHistory();


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userData = { email, userPassword };

      const data = await axios.post("http://localhost:5000/api/user/login", userData);

      setEmail(data.data.email);
      setUserPassword(data.data.userPassword);

      console.log(data);

      alert("User Logged in Successful");
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form onSubmit={handleLogin} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Login</h1>

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
            >Login</button>

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
            Create an Account?
            <a className="no-underline border-b border-blue text-blue" href="/register">
              &nbsp;Login
            </a>.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;