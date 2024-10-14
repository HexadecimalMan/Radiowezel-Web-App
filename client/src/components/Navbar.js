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
    about: '',
    schedule: ''
  })

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      updateNavLinksStyle({
        main: 'active',
        news: '',
        songRequests: '',
        shoutouts: '',
        about: '',
        schedule: ''
      });
    } else if (location.pathname === '/aktualnosci') {
      updateNavLinksStyle({
        main: '',
        news: 'active',
        songRequests: '',
        shoutouts: '',
        about: '',
        schedule: ''
      });
    } else if (location.pathname === '/zglos-piosenke') {
      updateNavLinksStyle({
        main: '',
        news: '',
        songRequests: 'active',
        shoutouts: '',
        about: '',
        schedule: ''
      });
    } else if (location.pathname === '/dedykacje') {
      updateNavLinksStyle({
        main: '',
        news: '',
        songRequests: '',
        shoutouts: 'active',
        about: '',
        schedule: ''
      });
    } else if (location.pathname === '/o-nas') {
      updateNavLinksStyle({
        main: '',
        news: '',
        songRequests: '',
        shoutouts: '',
        about: 'active',
        schedule: ''
      });
    } else if (location.pathname === '/ramowka') {
      updateNavLinksStyle({
        main: '',
        news: '',
        songRequests: '',
        shoutouts: '',
        about: '',
        schedule: 'active'
      });
    }
  }, [location.pathname]);

    return (
        <header data-bs-theme="dark">
          <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <div class="container-fluid">
                  <a class="navbar-brand" href="/">
                      <img style={{height: 3+'rem'}} src={logo}></img>
                  </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarCollapse">
                      <ul class="navbar-nav me-auto mb-2 mb-md-0">
                      <li class="nav-item">
                        <a class={"nav-link " + navLinksStyle['main']} aria-current="page" href="/">Strona główna</a>
                      </li>
                      <li class="nav-item">
                        <a class={"nav-link " + navLinksStyle['news']} href="/aktualnosci">Aktualności</a>
                      </li>
                      <li class="nav-item">
                        <a class={"nav-link " + navLinksStyle['schedule']} href="/ramowka">Ramówka</a>
                      </li>
                      <li class="nav-item">
                        <a class={"nav-link " + navLinksStyle['songRequests']} href="/zglos-piosenke">Zaproponuj piosenkę</a>
                      </li>
                      <li class="nav-item">
                        <a class={"nav-link " + navLinksStyle['shoutouts']} href="/dedykacje">Zamów dedykację</a>
                      </li>
                      <li class="nav-item">
                        <a class={"nav-link " + navLinksStyle['about']} href="/o-nas">O nas</a>
                      </li>
                      </ul>
                  </div>
              </div>
          </nav>
        </header>
    );
}

export default Navbar;