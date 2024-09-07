import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import logo from './logo.png'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'


const linkStyle = {
  textDecoration: "none"
};

function Navbar() {
    return (
        <header data-bs-theme="dark">
          <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                      <img style={{height: 3+'rem'}} src={logo}></img>
                  </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarCollapse">
                      <ul class="navbar-nav me-auto mb-2 mb-md-0">
                      <li class="nav-item">
                        <Link to="/dashboard" style={linkStyle}>
                            <a class="nav-link active" aria-current="page" href="#">Strona główna</a>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/dashboard/news" style={linkStyle}>
                            <a class="nav-link" href="#">Aktualności</a>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/dashboard/song-requests" style={linkStyle}>
                            <a class="nav-link" href="#">Zgłoszone piosenki</a>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/dashboard/shoutouts" style={linkStyle}>
                            <a class="nav-link" href="#">Dedykacje</a>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/dashboard/about" style={linkStyle}>
                            <a class="nav-link" href="#">O nas</a>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/dashboard/settings" style={linkStyle}>
                            <a class="nav-link" href="#">Ustawienia</a>
                        </Link>
                      </li>
                      </ul>
                  </div>
              </div>
          </nav>
        </header>
    );
}

export default Navbar;