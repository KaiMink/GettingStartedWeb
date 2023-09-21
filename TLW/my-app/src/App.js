import React from 'react';
import SideBar from './Components/SideBar/SideBar';
import HomePage from './Components/HomePage/Body/HomePage';
import UserProfile from './Components/UserProfile/UserProfile';

/*Routing*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='container'>
      <SideBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/User-Profile" element={<UserProfile />} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
