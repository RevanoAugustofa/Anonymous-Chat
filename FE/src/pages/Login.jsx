import "remixicon/fonts/remixicon.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";
import googleImage from "../assets/google.png";
import axiosInstance from '../axiosInstance';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");

    try {
      await axiosInstance.get("/sanctum/csrf-cookie");
      await axiosInstance.post("/api/login", { email, password });

      // Step 3: Cek user
      const res = await axiosInstance.get("/api/user", { withCredentials: true });
      localStorage.setItem("kode_unik", res.data.kode_unik);

      // Step 4: Arahkan ke home
      navigate("/Home_page");
    } catch (err) {
      console.error(err);
      if (err.response?.status === 422) {
        setError("Email atau password salah.");
      } else if (err.response?.status === 419) {
        setError("Session expired. Refresh dan coba lagi.");
      } else if (err.response?.status === 401){
        setError("Email atau password salah.");
      } else {
        setError("Login gagal. Silakan coba lagi.");
      }
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-[#0f1a24] flex flex-col justify-between overflow-x-hidden"
      style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
    >
      <div className="absolute top-4 left-4 w-full">
        <Link to="/">
          <i className="ri-arrow-left-line text-3xl text-gray-400 hover:text-white transition-colors duration-200"></i>
        </Link>
      </div>

      <div className="pt-35">
        <div className="flex justify-center items-center px-4 pb-2">
          <h2 className="text-white text-3xl font-bold tracking-[-0.015em] text-center">
            SayIt
          </h2>
        </div>

        <h3 className="text-white text-2xl font-bold text-center pb-2 pt-5">
          Welcome back
        </h3>
        <p className="text-white text-base text-center pb-3 pt-1">
          Sign in to continue
        </p>

        <div className="flex justify-center w-full px-4 py-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input w-full max-w-[400px] rounded-lg text-white border border-[#2e4e6b] bg-[#172736] h-12 px-4 placeholder:text-[#8daece] focus:outline-none"
          />
        </div>

        <div className="flex justify-center w-full px-4 py-3">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input w-full max-w-[400px] rounded-lg text-white border border-[#2e4e6b] bg-[#172736] h-12 px-4 placeholder:text-[#8daece] focus:outline-none"
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center px-4">{error}</p>
        )}

        <div className="flex justify-center px-4 py-3 w-full">
          <button
            onClick={handleLogin}
            className="w-full max-w-[400px] h-12 bg-[#359dff] hover:bg-[#6894bc] text-[#0f1a24] font-bold rounded-lg"
          >
            Login
          </button>
        </div>

        <div className="flex justify-center text-sm">or</div>

        <div className="flex justify-center px-4 py-3 w-full">
          <button className="w-full max-w-[400px] h-12 bg-white hover:bg-[#bdbdbd] text-[#0f1a24] font-bold rounded-lg flex items-center justify-center">
            <img src={googleImage} className="w-5 h-5 mr-4" alt="Google" />
            Continue with Google
          </button>
        </div>

        <Link to="/register">
          <p className="text-[#8daece] text-sm text-center underline px-4 pb-3 hover:text-gray-300">
            Don't have an account? Register
          </p>
        </Link>
      </div>

      <div>
        <div
          className="w-full bg-center bg-no-repeat bg-cover aspect-[390/320] hidden group-[:not(.dark)]/design-root:block"
          style={{ backgroundImage: 'url("/dark.svg")' }}
        ></div>
        <div
          className="w-full bg-center bg-no-repeat bg-cover aspect-[390/320] hidden group-[.dark]/design-root:block"
          style={{ backgroundImage: 'url("/light.svg")' }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
