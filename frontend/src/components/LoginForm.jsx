const LoginForm = () => {

    return (
        <>
        <div>
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
            </form>
        </div>
        </>
        
    );
}

export default LoginForm;