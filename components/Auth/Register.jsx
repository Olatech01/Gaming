"use client";

import React, { useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    tag_name: "",
    password: "",
    confirmPassword: "",
    tournament_type: "",
  });
  const [agreed, setAgreed] = useState(false);

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
    const { first_name, last_name, tag_name, email, password, confirmPassword, tournament_type } = formData;

    if (!first_name || !last_name || !tag_name || !email || !password || !confirmPassword || !tournament_type) {
      toast.error("All fields are required");
      return false;
    }
    if (tournament_type === "") {
      toast.error("Please select a tournament type");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    if (!passwordValidation.validLength || !passwordValidation.hasNumber || !passwordValidation.hasSymbol) {
      toast.error("Password must meet all complexity requirements");
      return false;
    }
    if (!agreed) {
      toast.error("Please agree to the Terms and Privacy Policy");
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
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          tag_name: formData.tag_name,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          tournament_type: formData.tournament_type,
        };

        const response = await axios.post(
          "https://joystickjunction.onrender.com/auth/register",
          payload,
          { headers: { "Content-Type": "application/json" } }
        );

        if (response.status === 200 || response.status === 201) {
          setTimeout(() => {
            setIsLoading(false);
            toast.success("Account created successfully!");
          }, 2000);
        }
      } catch (error) {
        toast.error("An error occurred while creating the account");
        setIsLoading(false);
      }
    }
  };

  const options = [
    { value: 'PS5', label: 'PS5' },
    { value: 'PS4', label: 'PS4' },
  ]
  return (
    <div className="auth">
      <div className="w-full flex h-screen sm:py-5 sm:min-h-fit flex-col gap-4 items-center justify-center px-[4rem] sm:px-2">
        <div className="flex-col gap-4 py-5 flex items-center justify-center bg-[#FFFFFF] rounded-lg w-[700px] sm:w-full min-h-[600px] sm:min-h-fit">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 px-[4rem] sm:px-3">
            <h2 className="text-[40px] sm:text-[24px] font-semibold">Create Your Account</h2>

            {/* First Name */}
            <div className="grid grid-cols-2 gap-3">
              <InputField
                label="First Name"
                type="text"
                name="first_name"
                value={formData.first_name}
                placeholder="Enter your first name"
                onChange={handleInputChange}
              />

              {/* Last Name */}
              <InputField
                label="Last Name"
                type="text"
                name="last_name"
                value={formData.last_name}
                placeholder="Enter your last name"
                onChange={handleInputChange}
              />
            </div>

            {/* Tag Name */}
            <InputField
              label="Tag Name"
              type="text"
              name="tag_name"
              value={formData.tag_name}
              placeholder="Enter your tag name"
              onChange={handleInputChange}
            />

            {/* Email */}
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleInputChange}
            />

            {/* Password */}
            <PasswordField
              label="Password"
              value={formData.password}
              onChange={handlePasswordChange}
              showPassword={showPassword}
              toggleVisibility={togglePasswordVisibility}
            />

            {/* Confirm Password */}
            <PasswordField
              label="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange(e)}
              showPassword={showConfirmPassword}
              toggleVisibility={toggleConfirmPasswordVisibility}
              name="confirmPassword"
              placeholder="Verify Password"
            />

            <div className="flex flex-col gap-2 w-full">
              <p className="text-[16px] font-medium">Tournament Type</p>
              <select
                name="tournament_type"
                value={formData.tournament_type}
                onChange={handleInputChange}
                className="rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3 w-full"
              >
                <option value="">Select a Tournament Type</option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Terms & Conditions */}
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <p>I agree to the Terms and Privacy Policy</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[45px] flex items-center justify-center bg-[#3C4E70] rounded-lg text-[#FFFFFF] text-[18px] font-semibold"
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
      className="rounded-lg h-[43px] shadow-lg border-2 outline-none pl-3"
    />
  </div>
);



// PasswordField Component
const PasswordField = ({ label, value, onChange, showPassword, toggleVisibility, name, placeholder }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[16px] font-medium">{label}</label>
    <div className="flex justify-between items-center border-2 rounded-lg h-[43px] shadow-lg px-3">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="outline-none w-full"
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

export default Register;
