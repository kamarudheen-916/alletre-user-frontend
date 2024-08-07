import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import LodingTestAllatre from "../component/shared/lotties-file/loding-test-allatre";
import useAxios from "../hooks/use-axios";
import routes from "../routes";
import Auth from "../utils/auth";

const AuthContext = React.createContext();

const WHITE_LIST = [routes.auth.default, routes.auth.forgetpass.default];

function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  const history = useHistory();
  const { pathname } = useLocation();

  const { run, isError } = useAxios();

  const login = ({ accessToken, refreshToken }) => {
    setUser(Auth._decodeToken(accessToken));

    Auth.setToken({
      newAccessToken: accessToken,
      newRefreshToken: refreshToken,
    });
  };

  const logout = () => {
    Auth.setToken({ newAccessToken: "", newRefreshToken: "" });
    setUser(null);
    history.push(routes.app.home);
  };

  React.useEffect(() => {
    Auth.getUser().then((user) => {
      if (!user) {
        if (WHITE_LIST.filter((w) => pathname.startsWith(w)).length === 0) {
          history.push(`${routes.app.home}?page=1&perPage=28`);
        }
      }
      setUser(user);
      setIsLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user,
        isLoading,
        isError,
      }}
    >
      {isLoading ? (
        <div className="h-screen w-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <LodingTestAllatre />
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

function useAuthState() {
  const { user, isLoading, isError, login, logout } =
    React.useContext(AuthContext);

  return {
    user,
    isLoading,
    isError,
    logout,
    login,
  };
}

export { AuthProvider, useAuthState };
