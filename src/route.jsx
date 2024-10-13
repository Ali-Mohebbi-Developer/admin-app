import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import UserListPage from "./components/UserListPage";
import UserDetail from "./components/UserDetail";

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/admin" element={<AdminPage />} />
    <Route path="/users/:id" element={<UserDetail />} />
    <Route path="/users" element={<UserListPage />} />
    <Route path="/" element={<LoginPage />} />
  </Routes>
);

export default AppRoutes;
