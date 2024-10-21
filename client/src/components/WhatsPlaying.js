import React, { useState, useEffect, useRef } from 'react'
import './background.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const albumImage = "https://i.scdn.co/image/ab67616d0000b27355665a9cd743b85fa72a9b33";

function WhatsPlaying({code}) {
    const ref = useRef(null);
    useEffect(() => {
        console.log('width', ref.current ? ref.current.offsetWidth : 0);
        updateBackground(
            <div id="bg-image" class="p-4" style={{backgroundImage: 'url(' + albumImage + ")", width: ref.current.offsetWidth /1.97}}></div>
        )
    }, [ref.current]);

    const [background, updateBackground] = useState(null)

    return (
        <div>
            {background}
            <div id="content" class="mb-4">
                <div class="row">
                    <p class="text-uppercase" style={{fontSize: 0.8+"rem"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note" viewBox="0 0 16 16">
                            <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2"/>
                            <path fill-rule="evenodd" d="M9 3v10H8V3z"/>
                            <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z"/>
                        </svg>
                        &nbsp;Aktualnie na antenie
                    </p>
                </div>
                <div class="row" ref={ref}>
                    <div class="col-lg-3">
                        <img src={albumImage} class="img-fluid" />
                    </div>
                    <div class="col-lg ms-2 pe-3 mt-auto mb-5">
                        <h1 class="mt-4">Słodkiego, miłego życia</h1>
                        <h3 class="fw-light">Kombi</h3>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default WhatsPlaying;