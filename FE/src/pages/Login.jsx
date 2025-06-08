import 'remixicon/fonts/remixicon.css';
import { Link } from "react-router-dom";
import googleImage from '../assets/google.png';


const Login = () => {
return (
<div className="fixed top-0  left-0 w-full h-screen bg-[#0f1a24] flex flex-col justify-between overflow-x-hidden"
  style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}>

  {/* Back Icon - di atas sendiri */}
  <div className="absolute top-4 left-4 w-full">
    <Link to="/">
    <i className="ri-arrow-left-line text-3xl text-gray-400 hover:text-white transition-colors duration-200"></i>
    </Link>
  </div>

  {/* Kontainer utama konten halaman */}
  <div className="pt-35">
    {/* Header - SayIt */}
    <div className="flex justify-center items-center bg-[#0f1a24] px-4 pb-2">
      <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] text-center">
        SayIt
      </h2>
    </div>

    {/* Welcome Text */}
    <h3 className="text-white tracking-light text-2xl font-bold leading-tight px-4 text-center pb-2 pt-5">
      Welcome back
    </h3>
    <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
      Sign in to continue
    </p>

    {/* Email Input */}
    <div className="flex justify-center w-full px-4 py-3">
      <div className="w-full max-w-[400px] flex-wrap items-end gap-4">
        <label className="flex flex-col w-full">
          <input type="email" placeholder="Email"
            className="form-input w-full rounded-lg text-white border border-[#2e4e6b] bg-[#172736] h-12 p-[15px] text-base placeholder:text-[#8daece] focus:outline-none focus:border-[#2e4e6b]" />
        </label>
      </div>
    </div>

    {/* Password Input */}
    <div className="flex justify-center w-full px-4 py-3">
      <div className="w-full max-w-[400px] flex-wrap items-end gap-4">
        <label className="flex flex-col w-full">
          <input type="password" placeholder="Password"
            className="form-input w-full rounded-lg text-white border border-[#2e4e6b] bg-[#172736] h-12 p-[15px] text-base placeholder:text-[#8daece] focus:outline-none focus:border-[#2e4e6b]" />
        </label>
      </div>
    </div>

    {/* Login Button */}
    <div className="flex justify-center px-4 py-3 w-full">
      <button
        className="flex w-full max-w-[400px] items-center justify-center rounded-lg h-12 px-4 bg-[#359dff] hover:bg-[#6894bc] hover:text-white transition-colors text-[#0f1a24] text-sm font-bold tracking-[0.015em]">
        <span className="truncate">Login</span>
      </button>
    </div>

    <div className="flex justify-center items-center text-sm ">
      or
    </div>

    {/* Login with google */}
    <div className="flex justify-center px-4 py-3 w-full">
      <button
        className="flex w-full max-w-[400px] items-center justify-center rounded-lg h-12 px-4 bg-[#ffffff] hover:bg-[#bdbdbd] transition-colors text-[#0f1a24] text-sm font-bold tracking-[0.015em]">
        <img src={googleImage} className="w-5 h-5 mr-4" />
        <span className="truncate text-sm">Continue with Google</span>
      </button>
    </div>

    {/* Register Link */}
    <Link to='/register'>
    <p className="text-[#8daece] text-sm font-normal text-center underline px-4 pb-3 pt-1 hover:text-gray-300">
      Don't have an account? Register
    </p>
    </Link>
  </div>

  {/* Background Images */}
  <div>
    <div
      className="w-full bg-center bg-no-repeat bg-cover aspect-[390/320] hidden group-[:not(.dark)]/design-root:block"
      style={{ backgroundImage: 'url("/dark.svg")' }}></div>
    <div className="w-full bg-center bg-no-repeat bg-cover aspect-[390/320] hidden group-[.dark]/design-root:block"
      style={{ backgroundImage: 'url("/light.svg")' }}></div>
  </div>
</div>
);
}

export default Login;