import React, { Component } from 'react';
import ReactDOM from "react-dom";
import LoginForm from "../components/LoginForm.js";

function Login(props) {
    const unreadMessages = props.unreadMessages;
    const LoginForm = props.LoginForm;
    return (
        <div>
            <h1></h1>
            {unreadMessages.length > 0 && (
                <h2>
                    <LoginForm/>
                </h2>
            )}
        </div>
    )
}

export default Login