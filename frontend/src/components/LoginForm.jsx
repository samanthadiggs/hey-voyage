import React from 'react';
const LoginForm = ({
    identifier, 
    password,
    setIdentifier,
    setPassword,
    onSubmit,
    error,
    loading
}) => {

    return (
        <>
        <div>
            <h2>Login</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input value= {identifier} onChange= {(e) => setIdentifier(e.target.value)} type="email" className="form-control" id="email" placeholder="Enter email" />

                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Password" />

                    <input type="submit" className="btn btn-primary" value={loading ? "Logging In" : "Log In"} disabled = {loading}/>
                </div>
            </form>
        </div>
        </>
        
    );
}

export default LoginForm;