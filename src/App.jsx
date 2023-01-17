import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Router from "./routes";

// import Button from "./components/Button";
// import Heading from "./components/Heading";
// import InputField from "./components/InputField";
// import SearchBar from "./components/SearchBar";
// import Text from "./components/Text";
// import Image from "./components/Image";

// import Thumbnail from "./components/Thumbnail";
// import Bookmark from "./components/Bookmark";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
