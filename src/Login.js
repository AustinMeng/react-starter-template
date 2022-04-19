import React, {useState} from "react"

function Login(){
    const [loginForm, setLoginForm] = useState({});
    // loginForm = {loginId:"jchen", password:"abc123"}
    // loginForm = {loginId:"jchen"}
    // loginForm = {password:"abc123"}
    function handleInputChange(e){
       // console.log(e.target.name + ": " + e.target.value)
       setLoginForm({
           ...loginForm,
           [e.target.name]:e.target.value
       })
    }

    function handleSubmit(e){
        e.preventDefault(); //prevent form refreshing the page
        console.log(loginForm);
    }
    return (
        <div>
            <h3>Login</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        placeholder="Enter your ID"
                        name="loginId"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div>
                    <input 
                        type="password"
                        placeholder="Enter your Password"
                        name="password"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;