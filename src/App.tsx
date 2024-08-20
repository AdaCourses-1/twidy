import Header from "./shared/header/Header";
import "./App.css";
import Category from "./shared/category/Category";
import Recommendation from "./shared/recommendation/Recommendation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Messages from "./pages/messages/Messages";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <div className="pt-10 bg-[#F2F2FE] min-h-[100vh] max-w-[1440px] mx-auto">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/messages" Component={Messages} />
        <Route path="/settings" Component={Settings} />
      </Routes>
    </div>
  );
}

export default App;
