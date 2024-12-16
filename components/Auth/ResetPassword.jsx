"use client";
import React, { useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { toast } from "react-toastify";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  if (!token) {
    toast.error("Invalid or missing token. Please check the link.");
    return null;
  }

  const [formData, setFormData] = useState({
    password: "",
    confirm: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [passwordValidation, setPasswordValidation] = useState({
    validLength: false,
    hasNumber: false,
    hasSymbol: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, password: value }));
    setPasswordValidation({
      validLength: value.length >= 6,
      hasNumber: /\d/.test(value),
      hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(value),
    });
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);


  const validateInfo = () => {
    const { password, confirm } = formData;

    if (!password || !confirm) {
      toast.error("All fields are required");
      return false;
    }
    if (password !== confirm) {
      toast.error("Passwords do not match");
      return false;
    }
    if (!passwordValidation.validLength || !passwordValidation.hasNumber || !passwordValidation.hasSymbol) {
      toast.error("Password must meet all complexity requirements");
      return false;
    }
    return true;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateInfo()) {
      setIsLoading(true);
      try {
        const payload = {
          token,
          password: formData.password,
          confirm: formData.confirm,
        };
        const response = await axios.post(
          "https://joystickjunction.onrender.com/user/update",
          payload,
          { headers: { "Content-Type": "application/json" } }
        );

        if (response.status === 200 || response.status === 201) {
          setTimeout(() => {
            setIsLoading(false);
            toast.success("Password reset successfully!");
          }, 2000);
        }
      } catch (error) {
        toast.error("An error occurred while creating the account");
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="auth flex w-full h-screen">
      <div className="w-full flex h-screen sm:py-5 sm:min-h-fit text-white flex-col gap-4 items-center justify-center px-[4rem] sm:px-2">
        <h1 className="text-[45px] sm:text-[40px] font-bold text-center">Are You A Gamer?</h1>
        <p className="text-[25px] font-light w-[400px]"><span className="text-[45px] font-semibold">Joystick juncton</span> is the best platform to earn reward for your passion!</p>
      </div>
      <div className="w-full flex h-screen sm:py-5 sm:min-h-fit flex-col gap-4 items-center justify-center px-[4rem] sm:px-2">
        <div className="flex-col gap-4 py-5 flex items-center justify-center bg-[#A5A6F6B2]/70 rounded-lg w-[700px] sm:w-full min-h-[600px] sm:min-h-fit">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 px-[4rem] sm:px-3">
            <h2 className="text-[40px] sm:text-[24px] font-semibold">Create Your Account</h2>

            <div className="grid grid-cols-2 gap-3">
              <PasswordField
                label="Password"
                value={formData.password}
                onChange={handlePasswordChange}
                showPassword={showPassword}
                toggleVisibility={togglePasswordVisibility}
                placeholder="Password"
              />

              <PasswordField
                label="Confirm Password"
                value={formData.confirm}
                onChange={(e) => handleInputChange(e)}
                showPassword={showConfirmPassword}
                toggleVisibility={toggleConfirmPasswordVisibility}
                name="confirmPassword"
                placeholder="Verify Password"
              />
            </div>


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
                "Sign Up"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


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

export default ResetPassword;
