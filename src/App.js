import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
