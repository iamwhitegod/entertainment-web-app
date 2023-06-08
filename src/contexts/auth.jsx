import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const userDB = [
  { name: "test test", email: "test@gmail.com", password: "test1234" },
];

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const signupUser = () => {};

  const loginUser = (credentials) => {
    if (!credentials) return;

    // Check if user exists
    const user = userDB.find((user) => user.email === credentials.email);

    // Check if password is correct
    const isPasswordCorrect = user.password === credentials.password;

    if (user && isPasswordCorrect) {
      setUser(user);
    }

    navigate("/home");
  };

  return (
    <UserContext.Provider value={{ user, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
