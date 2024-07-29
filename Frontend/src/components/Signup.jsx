import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Login from "./Login";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };
    try {
      const signupResponse = await axios.post(
        "http://localhost:4000/user/signup",
        userInfo
      );
      console.log(signupResponse.data);
      if (signupResponse.data) {
        toast.success("Signup Successfully");

        // Automatically log in the user after signup
        const loginResponse = await axios.post(
          "http://localhost:4000/user/login",
          {
            email: data.email,
            password: data.password,
          }
        );
        console.log(loginResponse.data);
        if (loginResponse.data) {
          toast.success("Login Successfully");
          localStorage.setItem(
            "Users",
            JSON.stringify(loginResponse.data.user)
          );
          navigate(from, { replace: true });
          window.location.reload();
        }
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-white text-black dark:bg-slate-900 dark:text-white">
        <div className="w-[600px] ">
          <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white border">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none bg-inherit"
                  {...register("fullName", { required: true })}
                />
                <br />
                {errors.fullName && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none bg-inherit"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none bg-inherit"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Signup button */}
              <div className="flex justify-around  mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-xl">
                  Have an account?
                  <button
                    type="button"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("my_modal_3").showModal();
                    }}
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <Login />
    </>
  );
}

export default Signup;
