import 'remixicon/fonts/remixicon.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../axiosInstance"; // Pastikan path sesuai

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    setError("");

    if (password !== confirmPassword) {
      setError("Maaf, password anda tidak sama");
      return;
    }

    try {
     await axiosInstance.get("/sanctum/csrf-cookie");
     
      await axiosInstance.post("/api/register", {
        email,
        password,
        password_confirmation: confirmPassword,
      });


      alert("Registrasi berhasil! Kamu akan dialihkan ke login.");
      navigate("/login");
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Registrasi gagal. Silakan coba lagi.");
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#0f1a24] flex flex-col justify-between overflow-x-hidden">
      <div className="absolute top-4 left-4 w-full">
        <Link to="/login">
          <i className="ri-arrow-left-line text-3xl text-gray-400 hover:text-white transition-colors duration-200"></i>
        </Link>
      </div>

      <div className="pt-35">
        <p className="text-white text-base font-normal pb-3 pt-1 px-4 text-center">
          Create New Account
        </p>

        <div className="flex justify-center w-full px-4 py-3">
          <div className="w-full max-w-[400px]">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="form-input w-full rounded-lg text-white border border-[#2e4e6b] bg-[#172736] h-12 p-[15px] text-base placeholder:text-[#8daece] focus:outline-none focus:border-[#2e4e6b]" />
          </div>
        </div>

        <div className="flex justify-center w-full px-4 py-3">
          <div className="w-full max-w-[400px]">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="form-input w-full rounded-lg text-white border border-[#2e4e6b] bg-[#172736] h-12 p-[15px] text-base placeholder:text-[#8daece] focus:outline-none focus:border-[#2e4e6b]" />
          </div>
        </div>

        <div className="flex justify-center w-full px-4 py-3">
          <div className="w-full max-w-[400px]">
            <input type="password" placeholder="Konfirmasi Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input w-full rounded-lg text-white border border-[#2e4e6b] bg-[#172736] h-12 p-[15px] text-base placeholder:text-[#8daece] focus:outline-none focus:border-[#2e4e6b]" />
          </div>
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center px-4">{error}</p>
        )}

        <div className="flex justify-center px-4 py-3 w-full">
          <button
            onClick={handleRegister}
            className="flex w-full max-w-[400px] items-center justify-center rounded-lg h-12 px-4 bg-[#359dff] hover:bg-[#6894bc] hover:text-white transition-colors text-[#0f1a24] text-sm font-bold tracking-[0.015em]">
            <span className="truncate">Register</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
