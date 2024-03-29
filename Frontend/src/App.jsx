import "./App.css";
import Home from "./components/Home";
import LoginFormComponents from "./components/LoginFormComponents";
import RegisterComponent from "./components/RegisterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginFormComponents />} />
          <Route path="register" element={<RegisterComponent />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
