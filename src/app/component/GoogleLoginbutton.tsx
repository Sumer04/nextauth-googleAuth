"use client";
import { signIn } from "next-auth/react";

const GoogleLoginButton = () => {
  const signInHandler = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };
  return (
    <div>
      <button onClick={signInHandler}>
        <span className="bg-b border-l-black">Login with Google</span>
      </button>
    </div>
  );
};
export default GoogleLoginButton;
