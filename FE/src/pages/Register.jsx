import 'remixicon/fonts/remixicon.css';
import { Link } from "react-router-dom";

const Register = () => {
return (
<div className="fixed top-0  left-0 w-full h-screen bg-[#0f1a24] flex flex-col justify-between overflow-x-hidden"
  style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}>

  {/* Back Icon - di atas sendiri */}
  <div className="absolute top-4 left-4 w-full">
    <Link to="/login">
    <i className="ri-arrow-left-line text-3xl text-gray-400 hover:text-white transition-colors duration-200"></i>
    </Link>
  </div>

  {/* Kontainer utama konten halaman */}
  <div className="pt-35">

    {/* Welcome Text */}
    <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
      Create New Account
    </p>

    {/* Password Input */}
    <div className="flex justify-center w-full px-4 py-3">
      <div className="w-full max-w-[400px] flex-wrap items-end gap-4">
        <label className="flex flex-col w-full">
          <input type="text" placeholder="Username"
            className="form-input w-full rounded-lg text-white border border-[#2e4e6b] bg-[#172736] h-12 p-[15px] text-base placeholder:text-[#8daece] focus:outline-none focus:border-[#2e4e6b]" />
        </label>
      </div>
    </div>

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

    {/* Password Input */}
    <div className="flex justify-center w-full px-4 py-3">
      <div className="w-full max-w-[400px] flex-wrap items-end gap-4">
        <label className="flex flex-col w-full">
          <input type="password" placeholder="Password"
            className="form-input w-full rounded-lg text-white border border-[#2e4e6b] bg-[#172736] h-12 p-[15px] text-base placeholder:text-[#8daece] focus:outline-none focus:border-[#2e4e6b]" />
        </label>
      </div>
    </div>

    {/* Register Button */}
    <div className="flex justify-center px-4 py-3 w-full">
      <button
        className="flex w-full max-w-[400px] items-center justify-center rounded-lg h-12 px-4 bg-[#359dff] hover:bg-[#6894bc] hover:text-white transition-colors text-[#0f1a24] text-sm font-bold tracking-[0.015em]">
        <span className="truncate">Register</span>
      </button>
    </div>

    {/* Register Link */}
    <p className="text-[#8daece] text-sm font-normal text-center underline px-4 pb-3 pt-1">
      Forgot Password? reset password
    </p>
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

export default Register;