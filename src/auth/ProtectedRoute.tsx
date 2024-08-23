import { Navigate } from "react-router";

interface IProtectedRoute {
  isAllowed: boolean;
  redirectPath: string;
  children: React.ReactNode;
  data?: unknown;
}

const ProtectedRoute = ({
  isAllowed,
  redirectPath,
  children,
  data,
}: IProtectedRoute) => {
  if (!isAllowed) return <Navigate to={redirectPath} replace state={data} />;
  return children;
};

export default ProtectedRoute;
