import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default AuthRouter;
