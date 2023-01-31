import React from "react";
import RegisterForm from "./RegisterForm";
import UserManagement from "./UserManagement";

export default function BaiTapUseManagement() {
  return (
    <div className="w-75 mx-auto mt-5">
      <RegisterForm />
      <UserManagement />
    </div>
  );
}
