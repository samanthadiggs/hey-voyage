import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import {login} from "../api/auth";

const LoginPage = () => {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(e){
        e.preventDefault();
        setLoading(true);
        setError("");

        try{
            const {res, data} = await login(identifier, password);

            if(!res){
                setError(data.error || "Load failed");

            } else if(!res.ok){
                setError(data.message || "Login failed");
            } else{
                localStorage.setItem("session_token", data.token);
                console.log("Login successful");
                // Redirect to dashboard or home page
            }

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }

        
    }
    return (
        <>
        <h1>hey voyage!</h1>
        <h2>your perfect travel buddy</h2>

        <LoginForm 
        identifier={identifier} 
        password={password} 
        setIdentifier={setIdentifier} 
        setPassword={setPassword} 
        onSubmit={handleLogin} 
        error={error} 
        loading={loading} />
        </>
    );
}


export default LoginPage;