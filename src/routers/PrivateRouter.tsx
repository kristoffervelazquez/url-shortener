import { Navigate } from "react-router-dom";

interface Props extends React.PropsWithChildren {
  status: string;
}

const PrivateRouter = ({ children, status }: Props) => {
  return status === "authenticated" ? children : <Navigate to="auth/login" />;
};

export default PrivateRouter;
