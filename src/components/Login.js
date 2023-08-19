import "./Login.css"


const Login = () => {
    
    return (
        <div>
            <h1>Login Form</h1>
            <div>
                <label>
                    USERNAME
                </label>
                <input type="text" placeholder="USERNAME" />
            </div>
            <div>
                <label>
                    PASSWORD
                </label>
                <input type="text" placeholder="PASSWORD" />
            </div>
            <button type="submit">Login</button>
        </div>
    )
}
export default Login