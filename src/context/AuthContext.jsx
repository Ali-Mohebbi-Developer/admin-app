import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, getUsers } from "../service/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await getUsers(1);
      const users = response.data.data;

      const registeredUser = users.find(
        (val) => val.email === email && val.password === password
      );

      if (registeredUser) {
        if (email === "admin@example.com" && password === "admin") {
          setUser({ email });
          navigate("/admin");
        } else {
          setUser({ email });
          navigate("/users");
        }
      } else {
        alert("email or password is incorrect");
      }
    } catch (error) {
      console.error("error", error);
      alert("error");
    }
  };

  const signup = async (first_name, last_name, email, password) => {
    try {
      const newUser = {
        first_name,
        last_name,
        email,
        password,
        avatar: "https://example.com/avatar.png",
      };

      const response = await createUser(newUser);
      console.log(response.data);

      alert("register is successfully");
      navigate("/login");
    } catch (error) {
      console.error("error", error);
      alert("register failed");
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
