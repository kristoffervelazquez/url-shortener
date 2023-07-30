import { Routes, Route, Navigate } from "react-router-dom";
import MainScreen from "../screens/main/MainScreen";
import AccountScreen from "../screens/main/AccountScreen";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/account" element={<AccountScreen />} />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default MainRouter;
