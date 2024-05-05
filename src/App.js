import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <div className="flex flex-col w-screen min-h-screen h-full bg-richblack-900 ">
      <Navbar
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />

      <Routes>
        <Route path="/" element={<Home  isUserLoggedIn={isUserLoggedIn}/>} />
        <Route path="/About" element={<About />} />
        <Route
          path="/Login"
          element={<Login setIsUserLoggedIn={setIsUserLoggedIn} />}
        />
        <Route
          path="/Signup"
          element={<Signup setIsUserLoggedIn={setIsUserLoggedIn} />}
        />
        <Route path="/Home" element={<Home />} />
        <Route
          path="/Dashboard"
          element={
            <PrivateRoute isUserLoggedIn={isUserLoggedIn}>
              {" "}
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
