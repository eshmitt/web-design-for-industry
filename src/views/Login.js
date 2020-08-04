import React, { Component } from 'react';
import ReactDOM from "react-dom";
import LoginForm from "LoginForm.js";

function Login(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1></h1>
            {unreadMessages.length > 0 && (
                <h2>
                    
                </h2>
            )}
        </div>
    )
}

export default Login