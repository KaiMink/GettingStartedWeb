import React from "react";
import "./HomePage.scss";
import Listing from "./Listing/Listing";
import Activity from "./Activity/Activity";
import Header from "../../Header/Header";

const HomePage = () => {
    return (
       <div className="mainContent">
            <Header />
            
            <div className="body">
                <Listing />
                <Activity />
            </div>
       </div>
    )
}

export default HomePage