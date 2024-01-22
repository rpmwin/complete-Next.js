"use client";
import axios from "axios";
import Link from "next/link";
import {  useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col py-2 min-h-screen">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <button
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
