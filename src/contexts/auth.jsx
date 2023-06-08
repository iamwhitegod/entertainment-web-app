import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  isSignedIn: false,
  user: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { ...state, isSignedIn: true, user: { ...action.payload } };

    case "LOGIN":
      return { ...state, isSignedIn: true, user: { ...action.payload } };

    case "LOGOUT":
      return {
        ...state,
        isSignedIn: false,
        user: null,
      };

    default:
      return state;
  }
};

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, dispatch] = useReducer(
    userReducer,
    JSON.parse(sessionStorage.getItem("user")) || initialState
  );

  const signupUser = (userData) => {
    try {
      localStorage.setItem("user", JSON.stringify(userData));
      sessionStorage.setItem("user", JSON.stringify(userData));

      dispatch({
        type: "SIGNUP",
        payload: userData,
      });

      if (user) {
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
      throw Error("Oops. Something went wrong. Unable to signup");
    }
  };

  const loginUser = (userData) => {
    // Sign In logic
    try {
      const DBUser = JSON.parse(localStorage.getItem("user"));
      if (!DBUser) return;

      if (
        DBUser &&
        DBUser.email === userData.email &&
        DBUser.password === userData.password
      ) {
        sessionStorage.setItem("user", JSON.stringify(userData));
        dispatch({
          type: "LOGIN",
          payload: userData,
        });

        navigate("/home");
      }
    } catch (err) {
      console.log(err);
      throw Error("Oops. Something went wrong. Unable to Login");
    }
  };

  const logoutUser = () => {
    // Logout logic
    sessionStorage.clear();

    dispatch({
      type: "LOGOUT",
    });

    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ user, loginUser, signupUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
