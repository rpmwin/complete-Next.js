"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

function Loginpage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [Loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("login success", response.data);
      toast.success("login success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1>Login Page</h1>
      <hr />

      <label htmlFor="email">email:</label>
      <input
        type="text"
        className="p-2 border-gray-300 text-black rounded mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        value={user.email}
        onChange={(e) => {
          setUser({
            ...user,
            email: e.target.value,
          });
        }}
        placeholder="email"
      />
      <label htmlFor="password">password:</label>
      <input
        type="password"
        className="p-2 border-gray-300 text-black rounded mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        value={user.password}
        onChange={(e) => {
          setUser({
            ...user,
            password: e.target.value,
          });
        }}
        placeholder="password"
      />
      <button
        className="p-2 border-gray-300  rounded mb-4 focus:outline-none focus:border-gray-600 bg-gray-500 hover:bg-gray-800"
        onClick={onLogin}
      >
        {Loading ? "loading": "login here"}
      </button>

      <Link
        href="/signup"
        className="p-2 border-gray-300  rounded mb-4 focus:outline-none focus:border-gray-600 bg-gray-500 hover:bg-gray-800"
      >
        Visit Signup page
      </Link>
    </div>
  );
}

export default Loginpage;
