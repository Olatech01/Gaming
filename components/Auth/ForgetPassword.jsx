"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const ForgetPassword = () => {
    const [formData, setFormData] = useState({ email: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateInfo = () => {
        const { email } = formData;
        if (!email) {
            toast.error("Email field is required");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateInfo()) return;

        setIsLoading(true);
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("User token is missing. Please log in.");
                setIsLoading(false);
                return;
            }

            const response = await axios.post(
                "https://joystickjunction.onrender.com/user/reset",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200 || response.status === 201) {
                setIsLoading(false);
                toast.success("Reset link sent successfully!");
            }
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "An error occurred";
            toast.error(errorMessage);
            setIsLoading(false);
        }
    };

    return (
        <div className="auth flex w-full h-screen">
            <div className="w-full flex h-screen sm:py-5 text-white flex-col gap-4 items-center justify-center px-[4rem] sm:px-2">
                <h1 className="text-[45px] sm:text-[40px] font-bold text-center">
                    Uhhh Sorry
                </h1>
                <p className="text-[25px] font-light w-[400px] text-center">
                    Sorry to hear that you forgot your{" "}
                    <span className="text-[30px] font-semibold">Joystick Junction</span>{" "}
                    account password. Kindly enter your email address to reset your password!
                </p>
            </div>

            <div className="w-full flex h-screen sm:py-5 flex-col gap-4 items-center justify-center px-[4rem] sm:px-2">
                <div className="flex-col gap-4 py-5 flex items-center text-white justify-center bg-[#A5A6F6B2]/70 rounded-lg w-[700px] sm:w-full min-h-[600px]">
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 px-[4rem] sm:px-3">
                        <h2 className="text-[40px] sm:text-[24px] font-semibold text-white">
                            Reset your password now
                        </h2>

                        <InputField
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Enter your email"
                            onChange={handleInputChange}
                        />

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
                                "Send"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

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

export default ForgetPassword;
