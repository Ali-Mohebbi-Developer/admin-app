import React from "react";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./route";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
