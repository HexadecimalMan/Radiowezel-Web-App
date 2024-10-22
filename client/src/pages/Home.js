import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import Navbar from '../components/Navbar';
import WhatsPlaying from '../components/WhatsPlaying';

const linkStyle = {
    textDecoration: "none"
};

function Home() {
    document.title = "Strona główna - Radiowęzeł";
    return (
        <div>
            <Navbar />

            <div class="mb-5">
            </div>

            <div class="p-5 pb-2">
                <WhatsPlaying />
            </div>

            <hr class="mx-5 mb-5"></hr>

            <div class="container-fluid px-5 pb-5 text-center">
                <div class="row">
                    <div class="col-lg-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" fill="currentColor" class="m-3 bi bi-newspaper" viewBox="0 0 16 16">
                            <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z"/>
                            <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z"/>
                        </svg>
                        <h2 class="fw-normal"><i><b>Co jest?</b></i></h2>
                        <p class="px-3">❗ Sprawdź co się dzieje - nadchodzące wydarzenia, najnowsze informacje oraz wieści prosto z anteny.</p>
                        <p><a class="btn btn-secondary" href="/aktualnosci">Zobacz artykuły &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" fill="currentColor" class="m-3 bi bi-boombox" viewBox="0 0 16 16">
                            <path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m7.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-7-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm5.5 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                            <path d="M11.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                            <path d="M7 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                            <path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0M1 3v3h14V3zm14 4H1v7h14z"/>
                        </svg>
                        <h2 class="fw-normal"><i><b>Jakieś życzenia?</b></i></h2>
                        <p class="px-3">📨 Zgłoś piosenki, które ostatnio chodzą Ci po głowie. My dodamy je do naszej playlisty, a Ty wsłuchaj się w ich dźwięk w trakcie jednej z przerw.</p>
                        <p><a class="btn btn-secondary" href="/zglos-piosenke">Zobacz formularz &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" fill="currentColor" class="m-3 bi bi-calendar-week-fill" viewBox="0 0 16 16">
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
                        </svg>
                        <h2 class="fw-normal"><i><b>Zamów dedykację</b></i></h2>
                        <p class="px-3">💌 "A teraz specjalnie na życzenie [...] utwór [...] dla [...] z okazji [...]!"</p>
                        <p><a class="btn btn-secondary" href="/dedykacje">Zarezerwuj termin &raquo;</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
