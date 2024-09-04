import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Messages from './pages/messages/Messages';
import Settings from './pages/settings/Settings';
import Sidebar from './shared/sidebar/Sidebar';
import UserProfile from './pages/profiles/[...id]/UserProfile';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { authIsReady, user } = useContext(AuthContext);

  return (
    <div className="pt-10 bg-[#F2F2FE] min-h-[100vh] max-w-[1440px] mx-auto flex">
      {authIsReady && (
        <>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/messages" element={user ? <Messages/> : <Navigate to = "/" replace/>}/>
            <Route path="/settings" element={user ? <Settings/> : <Navigate to = "/" replace/>} />
            <Route path="/users/:id" element={<UserProfile/>} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
