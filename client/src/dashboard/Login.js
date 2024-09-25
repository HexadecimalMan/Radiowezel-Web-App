import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Login() {
    const [showPassword, updateShowPassword] = useState(false)
    const showPasswordHandler = () => {
        updateShowPassword(!showPassword)
    }

    const [loginData, updateLoginData] = useState({ login: "", password: "" })

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://192.168.1.207:3002/sign_in", loginData);
            console.log('Login data submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting login data:', error);
        }
    };

    return (
        <div class="mx-3 my-5 p-5">
            <div class="col-lg-5 card p-5 m-auto bg-body-tertiary border rounded-3">
                <h6 class="display-6 pb-4 px-3 text-center">Zaloguj się do aplikacji</h6>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" class="btn btn-light float-end">Zaloguj</button>
                </form>
            </div>
        </div>
    );
}

export default Login;