// import { useEffect } from "react";

import { useEffect, useRef } from "react";
import useAuth from "../../../hooks/use-auth";
import Spinner from "../../atoms/spinner";

interface AuthRouteProps {
  element: JSX.Element;
}

// const AuthRoute = ({ element }: AuthRouteProps) => {
//   const { loadingAuth, isAuthenticated, refreshAccessToken } = useAuth();
//   useEffect(() => {
//     refreshAccessToken();
//     console.log("hello from the AuthRoute Refresh");
//   }, []);
//   if (loadingAuth) {
//     return;
//   } else {
//     <Spinner size="lg" />;
//     if (isAuthenticated) return element;
//     else return <Spinner size="lg" />;
//   }
// };

// export default AuthRoute;

const AuthRoute = ({ element }: AuthRouteProps) => {
  const { loadingAuth, isAuthenticated, refreshAccessToken } = useAuth();
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      refreshAccessToken();
      console.log("hello from the AuthRoute Refresh");
      isFirstRun.current = false;
    }
  }, []);

  if (loadingAuth) {
    return <Spinner size="lg" />;
  }

  return isAuthenticated ? element : <Spinner size="lg" />;
};

export default AuthRoute;
