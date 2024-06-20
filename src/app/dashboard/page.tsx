"use client";
import { signOut } from "next-auth/react";
const Dashboard = () => {
  const logoutHandler = () => {
    signOut();
  };
  return (
    <div>
      <p>welcome back...</p>
      <button onClick={logoutHandler}> Logout</button>
    </div>
  );
};
export default Dashboard;
