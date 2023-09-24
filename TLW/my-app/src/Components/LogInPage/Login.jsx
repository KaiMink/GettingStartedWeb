import React from "react";
import "./Login.scss";

const LogIn =({userLogIn, setUserLogIn}) => {
    const handleLogin = () => {
        // Xử lý đăng nhập ở đây
        // Sau khi đăng nhập thành công, gọi setUserLogIn(true) để cập nhật trạng thái đăng nhập
        setUserLogIn(true);
      };
    return (
        <div className="LogInContainer">
            <div className="loginContent ">
                <form action="" className="LoginForm grid">
                    <h1 className="Title">
                        Log In 
                    </h1>
                    <div className="inputBox">
                        <input type ="text" placeholder="Username" required />
                    </div>
                    <div className="inputBox">
                        <input type="password" placeholder="Password" required />
                    </div>
                    
                    <div className="rememberForgot flex">
                        <label>
                            <input type="checkbox" />
                            Remember Me
                        </label>
                        <a href="#">Forgot your password?</a>
                    </div>
                    
                    <button /*</form>type="submit"*/ className="SubmitButton">
                        <a href="/"></a>
                        Log In 
                    </button>

                    <div className="RegisterLink">
                        <p>Don't have an account?<a href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogIn