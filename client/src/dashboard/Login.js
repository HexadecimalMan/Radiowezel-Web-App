import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const [showPassword, updateShowPassword] = useState(false)
    const showPasswordHandler = () => {
        updateShowPassword(!showPassword)
    }

    return (
        <div class="mx-3 my-5 p-5">
            <div class="col-lg-5 card p-5 m-auto bg-body-tertiary border rounded-3">
                <h6 class="display-6 pb-4 px-3 text-center">Zaloguj się do aplikacji</h6>
                <form>
                    <div class="mb-4">
                        <label for="inputLogin" class="form-label">Login</label>
                        <input type="text" class="form-control " id="inputLogin" aria-describedby="loginHelp" />
                    </div>
                    <div class="mb-2">
                        <label for="inputPassword" class="form-label">Hasło</label>
                        <input type={showPassword ? "text" : "password"} class="form-control" id="inputPassword" />
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