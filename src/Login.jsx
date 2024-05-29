import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const navigate = useNavigate();

  const [email, setid] = useState("");
  const [password, setpass] = useState("");
  const [message, setMessage] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://todo-backend-example.onrender.com/api/auth/login",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      setMessage("User logged in successfully");
      navigate("/home");
    } catch (error) {
      setMessage("Error logging in");
    }
  };
  const movetoReg = () => {
    navigate("/register");
  };
  return (
    <div>
      <div
        className="text-white h-screen flex justify-center items-center bg-cover"
        style={{ backgroundImage: "url('/backiee-286745-landscape.jpg" }}
      >
        <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
          <h1 className="text-4xl font-bold text-center mb-6 courgette-regular text-white">
            Login
            <FontAwesomeIcon icon={faSignInAlt} className="ml-3 text-white" />
          </h1>
          <form action="" onSubmit={loginUser}>
            <div className="relative my-8">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-3 top-2 text-white"
              />
              <input
                value={email}
                onChange={(e) => setid(e.target.value)}
                type="email"
                className="block w-72 py-2.3 pl-10 pr-2 text-lg text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer"
                placeholder=""
                required
              />

              <label
                htmlFor=""
                className="absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-0 left-10 -z-10 origin-[0] peer-focus:left-10 peer-focus:text-blue-300 peer-focus:dark:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
              >
                Mail-id
              </label>
            </div>

            <div className="relative my-4">
              <FontAwesomeIcon
                icon={faKey}
                className="absolute left-3 top-2 text-white"
              />
              <input
                value={password}
                onChange={(e) => setpass(e.target.value)}
                type="password"
                className="block w-72 py-2.3 pl-10 pr-2 text-lg text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                htmlFor=""
                className="absolute text-base text-white duration-300 -translate-y-6 transform scale-75 top-0 left-10 -z-10 origin-[0] peer-focus:left-10 peer-focus:text-blue-300 peer-focus:dark:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
              >
                Your Password
              </label>
            </div>

            <div className="flex justify-center relative my-5">
              <button
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-full border border-white hover:bg-black hover:text-white-500 dark:bg-blue-900 dark:hover:text-white dark:hover:bg-black"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="flex justify-center relative my-0">
              <p> Not yet Started?</p>{" "}
              <a href="" className="text-blue-300 ml-1" onClick={movetoReg}>
                {" "}
                Get_Started
              </a>
            </div>
            {message && <p className="mt-4 text-red-500">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
