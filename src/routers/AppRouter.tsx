import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Private Router */}
        <Route
          path="*"
          element={
            <PrivateRouter status="authenticated">
              <MainRouter />
            </PrivateRouter>
          }
        />
        {/* Public Router */}
        <Route
          path="auth/*"
          element={
            <PublicRouter status="authenticated">
              <AuthRouter />
            </PublicRouter>
          }
        />
        <Route path="/*" element={<Navigate replace to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
