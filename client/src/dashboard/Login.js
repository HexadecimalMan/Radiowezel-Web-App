import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import logo from './logo.png'

function Login() {
    const [showPassword, updateShowPassword] = useState(false)
    const showPasswordHandler = () => {
        updateShowPassword(!showPassword)
    }

    const [loginData, updateLoginData] = useState({ login: "", password: "" })
    const [status, changeStatus] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        changeStatus("awaiting response from server")
        try {
            const response = await axios.post("https://radiowezel-web-app-api.onrender.com/sign_in", loginData);
            console.log('Login data submitted successfully:', response.data);
            changeStatus("")
        } catch (error) {
            console.error('Error submitting login data:', error);
            changeStatus("")
        }
    };

    return (
        <div class="mx-3 my-5 p-5">
            <div class="col-lg-5 card p-5 m-auto bg-body-tertiary border rounded-3">
                <a class="mx-auto mb-4" href='/'><img style={{height: 6+'rem', width: 10+'rem'}} src={logo}></img></a>
                <form>
                    <div class="mb-4">
                        <label for="inputLogin" class="form-label">Login</label>
                        <input type="text" class="form-control" name="login" value={loginData.login} onChange={handleChange} id="inputLogin" aria-describedby="loginHelp" />
                    </div>
                    <div class="mb-2">
                        <label for="inputPassword" class="form-label">Hasło</label>
                        <input type={showPassword ? "text" : "password"} class="form-control" name="password" value={loginData.password} onChange={handleChange} id="inputPassword" />
                    </div>
                    <div class="mb-4 form-check">
                        <input type="checkbox" class="form-check-input" id="showPassword" checked={showPassword} onChange={showPasswordHandler} />
                        <label class="form-check-label" for="showPassword">Pokaż hasło</label>
                    </div>
                    <button type="submit" onClick={handleSubmit} class="btn btn-light float-end">
                        {
                            status == "awaiting response from server" ? (
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            ) 
                            : "Zaloguj"
                        }
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;