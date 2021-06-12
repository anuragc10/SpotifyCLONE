import React from 'react';
import "./Login.css";
import { loginUrl } from './spotify';


function Login() {
    return (
        <div className="login">
            <img 
            src="https://www.pngkey.com/png/full/788-7885953_we-distribute-playlist-for-spotify-logo-on-black.png"
            alt=""
            />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;
