import React, {
  createContext,
  useCallback,
  useMemo,
  useState,
  useContext,
} from "react";
import PropTypes from "prop-types";

const MY_AUTH_SAAS_QA = "MY_AUTH_SAAS_QA";
const MY_USER_SAAS_QA = "MY_USER_SAAS_QA";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem(MY_AUTH_SAAS_QA) ?? false
  );
  const [userData, setUserData] = useState(
    localStorage.getItem(MY_USER_SAAS_QA) ?? ""
  );

  const login = useCallback(function (userData) {
    localStorage.setItem(MY_AUTH_SAAS_QA, true);
    localStorage.setItem(MY_USER_SAAS_QA, JSON.stringify(userData));
    setIsAuthenticated(true);
    setUserData(JSON.stringify(userData));
  }, []);

  const logout = useCallback(function () {
    localStorage.removeItem(MY_AUTH_SAAS_QA, false);
    localStorage.removeItem(MY_USER_SAAS_QA, "");
    setIsAuthenticated(false);
    setUserData("");
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
      userData,
    }),
    [login, logout, isAuthenticated, userData]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.object,
};

export function useAuthContext() {
  return useContext(AuthContext);
}
