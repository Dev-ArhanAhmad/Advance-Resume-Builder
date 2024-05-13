
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from "./Ahmad/Login";
import Signup from "./Ahmad/Signup";
import Home from "./Ahmad/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;