import React, {useState} from 'react';
import SideBar from './Components/SideBar/SideBar';
import HomePage from './Components/HomePage/Body/HomePage';
import UserProfile from './Components/UserProfile/UserProfile';
import LogIn from './Components/LogInPage/Login';
import GamePage from  './Components/GamePage/GamePage';

/*Routing*/
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";

const App = () => {
  const [userLogIn, setUserLogIn] = useState(false);
  return (
    <div className='container'>
      
      <BrowserRouter>
        <Routes>
          <Route path="/log-in" element={<LogIn />} /> 
          {/*{userLogIn ? <Navigate to="/" /> : (<LogIn userLogIn={userLogIn} setUserLogIn={setUserLogIn} />)} />*/}
          <Route path="/" element={(
            <div className='container'>
              <SideBar />
              <HomePage />
            </div>
        )} />
          {/*{userLogIn ? (<SideBar />,<HomePage />) : <Navigate to="/log-in" />} /> */}
          <Route path="/User-Profile" element={(
            <div className='container'>
              <SideBar />
              <UserProfile />
            </div>
        )} />
          <Route path="/Game-X" element={(
            <div className='container'>
              <SideBar />
              <GamePage />
            </div>
        )} />
        </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
