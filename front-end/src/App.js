import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Regiter from "./components/Register/Regiter";
import "./App.css"
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Regiter />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
