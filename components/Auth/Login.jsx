"use client";
import React, { useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const validateInfo = () => {
    const { email, password } = formData;
    if (!email || !password) {
      toast.error("All fields are required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInfo()) return;

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://joystickjunction.onrender.com/auth/login",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Gamer Login successfully!");
        router.push('/dashboard')
        setIsLoading(false);
      }

      if (response.data.success) {
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        console.log("Token saved:", token);
      } else {
        console.log("Login failed:", response.data.message);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred during login";
      toast.error(errorMessage);
      setIsLoading(false);
    }
  };


  return (
    <div className="auth flex w-full h-screen">
      {/* Left Panel */}
      <div className="w-full flex h-screen sm:py-5 text-white flex-col gap-4 items-center justify-center px-[4rem] sm:px-2">
        <h1 className="text-[45px] sm:text-[40px] font-bold text-center">
          Welcome Back!
        </h1>
        <p className="text-[25px] font-light w-[400px] text-center">
          Log into your{" "}
          <span className="text-[30px] font-semibold">Joystick Junction</span>{" "}
          account to continue enjoying rewards for what you love most!
        </p>
      </div>

      {/* Right Panel */}
      <div className="w-full flex h-screen sm:py-5 flex-col gap-4 items-center justify-center px-[4rem] sm:px-2">
        <div className="flex-col gap-4 py-5 flex items-center justify-center bg-[#A5A6F6B2]/70 rounded-lg w-[700px] sm:w-full min-h-[600px]">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 px-[4rem] sm:px-3">
            <h2 className="text-[40px] sm:text-[24px] font-semibold">
              It’s good to see you again!
            </h2>

            {/* Input for Email */}
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleInputChange}
            />

            {/* Input for Password */}
            <PasswordField
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              showPassword={showPassword}
              toggleVisibility={togglePasswordVisibility}
              placeholder="Enter your password"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[45px] flex items-center justify-center bg-[#7879F1] rounded-lg text-[#FFFFFF] text-[18px] font-semibold"
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// InputField Component
const InputField = ({ label, type, name, value, onChange, placeholder }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[16px] font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3 bg-[#D9D9D9]"
    />
  </div>
);

// PasswordField Component
const PasswordField = ({ label, value, onChange, showPassword, toggleVisibility, name, placeholder }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[16px] font-medium">{label}</label>
    <div className="flex justify-between items-center border-2 rounded-lg h-[43px] shadow-lg px-3 bg-[#D9D9D9]">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="outline-none w-full bg-transparent"
      />
      <button
        onClick={toggleVisibility}
        type="button"
        className="cursor-pointer"
      >
        {showPassword ? <LuEyeOff /> : <LuEye />}
      </button>
    </div>
  </div>
);

export default Login;
