import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <div class="mx-3 my-5 p-5">
            <div class="col-lg-5 card p-5 m-auto">
                <h6 class="display-6 pb-4 px-3 text-center">Zaloguj się do aplikacji</h6>
                <form>
                    <div class="mb-4">
                        <label for="inputLogin" class="form-label">Login</label>
                        <input type="text" class="form-control" id="inputLogin" aria-describedby="loginHelp" />
                    </div>
                    <div class="mb-2">
                        <label for="inputPassword" class="form-label">Hasło</label>
                        <input type="password" class="form-control" id="inputPassword" />
                    </div>
                    <div class="mb-4 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Pokaż hasło</label>
                    </div>
                    <button type="submit" class="btn btn-light float-end">Zaloguj</button>
                </form>
            </div>
        </div>
    );
}

export default Login;