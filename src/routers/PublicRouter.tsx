import { Navigate } from "react-router-dom";

interface Props extends React.PropsWithChildren {
  status: string;
}

const PublicRouter = ({ status, children }: Props) => {
  return status === "authenticated" ? <Navigate replace to="/" /> : children;
};

export default PublicRouter;
