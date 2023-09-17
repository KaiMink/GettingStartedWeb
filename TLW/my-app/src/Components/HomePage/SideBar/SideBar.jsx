import React from "react";
import "./SideBar.scss";

import logo from '../../../Assets/logo.png'
const SideBar = () => {
    return (
        <div>
        <div className="logo flex">
                <img src={logo} alt="Img Name"></img>
                <h2>GameWeb</h2>
            </div>
        <div className="sideBar grid">
            
            <div className="Tag">
                <h3 className="Title">
                    USER MENU
                </h3>
                <ul className="UserMenuList grid">
                    <li className="ListItems">
                        <a href="User-infor" className="tagLink">
                            Trang cá nhân
                        </a>
                    </li>

                    <li className="ListItems">
                        <a href="User-games" className="tagLink">
                            Quản lý game
                        </a>
                    </li>

                    <li className="ListItems">
                        <a href="Upload-game" className="tagLink">
                            Upload game
                        </a>
                    </li>

                </ul>
            </div>
        </div>
        </div>
    )
}

export default SideBar