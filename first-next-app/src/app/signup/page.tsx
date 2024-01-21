"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const onsignup = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1>Sign up</h1>
      <hr />
      <label htmlFor="username">user name:</label>
      <input
        type="text"
        className="p-2 border-gray-300 text-black rounded mb-4 focus:outline-none focus:border-gray-600"
        id="username"
        value={user.username}
        onChange={(e) => {
          setUser({
            ...user,
            username: e.target.value,
          });
        }}
        placeholder="username"
      />
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
        onClick={onsignup}
      >
        Signup here
      </button>

      <Link
        href="/login"
        className="p-2 border-gray-300  rounded mb-4 focus:outline-none focus:border-gray-600 bg-gray-500 hover:bg-gray-800"
      >
        Visit Login page
      </Link>
    </div>
  );
}

export default SignupPage;
