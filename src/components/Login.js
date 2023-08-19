import {useState} from "react"


import { useNavigate } from "react-router-dom"


import "./Login.css"


const Login = () => {
    const navigate=useNavigate()
    const [username,getUsername] = useState("")
    const [password,gePassword] = useState("")
    const getUsernameData = (event)  => getUsername(event.target.value)
    const getPasswordData = event => gePassword(event.target.value)

    const submitSuccess = () => {
        navigate("/")
    }

    const submitFailure = () => {
        navigate("/login")
    }
    const getFormSubmit = event => {
        event.preventDefault()
        if (username === "rama" && password === "123456") {
            return submitSuccess()
        }
        else {
        return submitFailure()
        }
    }
    return (
        <div>
            <form onSubmit={getFormSubmit}>
            <h1>Login Form</h1>
            <div>
                <label>
                    USERNAME
                </label>
                <input type="text" placeholder="USERNAME" onChange={getUsernameData} value={username}/>
            </div>
            <div>
                <label>
                    PASSWORD
                </label>
                <input type="password" placeholder="PASSWORD" onChange={getPasswordData} value={password}/>
            </div>
            <button type="submit">Login</button>  
            </form>
        </div>
    )
}
export default Login