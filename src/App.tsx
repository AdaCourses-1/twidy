import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Messages from './pages/messages/Messages';
import Settings from './pages/settings/Settings';
import Sidebar from './shared/sidebar/Sidebar';
import UserProfile from './pages/profiles/[...id]/UserProfile';
import {  useEffect } from 'react';
import { auth } from './firebase/config';
import { setAuthState, setUser } from './features/user/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const { authIsReady, info: user } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user));
      dispatch(setAuthState(true));
      return unsub();
    });
  }, []);

  return (
    <div className="pt-10 bg-[#F2F2FE] min-h-[100vh] max-w-[1440px] mx-auto flex">
      {authIsReady && (
        <>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/messages"
              element={user ? <Messages /> : <Navigate to="/" replace />}
            />
            <Route
              path="/settings"
              element={user ? <Settings /> : <Navigate to="/" replace />}
            />
            <Route path="/users/:id" element={<UserProfile />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
