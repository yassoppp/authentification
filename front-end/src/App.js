import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Regiter from "./components/Register/Regiter";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Regiter />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
