import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from "react-router-dom";
import logo from './logo.png'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useState, useEffect } from 'react';


const linkStyle = {
  textDecoration: "none"
};

function Navbar() {
  const [navLinksStyle, updateNavLinksStyle] = useState({
    main: 'active',
    news: '',
    songRequests: '',
    shoutouts: '',
    about: ''
  })

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      updateNavLinksStyle({
        main: 'active',
        news: '',
        songRequests: '',
        shoutouts: '',
        about: ''
      });
    } else if (location.pathname === '/aktualnosci') {
      updateNavLinksStyle({
        main: '',
        news: 'active',
        songRequests: '',
        shoutouts: '',
        about: ''
      });
    } else if (location.pathname === '/zglos-piosenke') {
      updateNavLinksStyle({
        main: '',
        news: '',
        songRequests: 'active',
        shoutouts: '',
        about: ''
      });
    } else if (location.pathname === '/dedykacje') {
      updateNavLinksStyle({
        main: '',
        news: '',
        songRequests: '',
        shoutouts: 'active',
        about: ''
      });
    } else if (location.pathname === '/o-nas') {
      updateNavLinksStyle({
        main: '',
        news: '',
        songRequests: '',
        shoutouts: '',
        about: 'active'
      });
    }
  }, [location.pathname]);

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
                        <Link to="/" style={linkStyle}>
                            <a class={"nav-link " + navLinksStyle['main']} aria-current="page" href="#">Strona główna</a>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/aktualnosci" style={linkStyle}>
                            <a class={"nav-link " + navLinksStyle['news']} href="#">Aktualności</a>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/zglos-piosenke" style={linkStyle}>
                            <a class={"nav-link " + navLinksStyle['songRequests']} href="#">Zaproponuj piosenkę</a>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/dedykacje" style={linkStyle}>
                            <a class={"nav-link " + navLinksStyle['shoutouts']} href="#">Zamów dedykację</a>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/o-nas" style={linkStyle}>
                            <a class={"nav-link " + navLinksStyle['about']} href="#">O nas</a>
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