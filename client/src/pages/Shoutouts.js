import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import BookDate from '../components/BookDate';
import SongSearch from '../components/SongSearch';

function Shoutouts() {
    const [dataFromChild, setDataFromChild] = useState("");
    const [fromWhom, setFromWhom] = useState("");
    const [toWhom, setToWhom] = useState("");
    const [occasion, setOccasion] = useState("");
    const [song, setSong] = useState("");

    function handleDataFromChild(data) {
        setDataFromChild(data);
    }

    function handleSongSearch(songData) {
        setSong(songData); // Assuming SongSearch component sends back a song or its ID
    }

    function SendDedication() {
        const date = dataFromChild ? `${dataFromChild[0]}, ${dataFromChild[1]}` : "";
        
        // Build the query string for the GET request
        const queryParams = new URLSearchParams({
            date,
            fromWhom,
            toWhom,
            occasion,
            song
        }).toString();

        // Send the GET request with query parameters
        fetch(`http://localhost:3002/dedication?${queryParams}`, {
            method: 'GET',
        })
        .then(response => response.text())
        .then(data => {
            alert("Dedication booked: " + data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }

    return (
        <div className="py-5 px-1 d-flex">
            <div className="container-fluid my-5 justify-content-center">
                <div className="text-center bg-body-tertiary rounded-3">
                    <div className="row">
                        <div className="col-lg-4 order-1">
                            <div id="reservationBoard" className="p-5">
                                <p className="text-start fs-6 mb-4 ms-2"><b>Wybierz godzinę swojej dedykacji...</b></p>
                                <BookDate sendDataToParent={handleDataFromChild} />
                            </div>
                        </div>
                        <div className="col-lg-8 order-2">
                            <div className="mb-5 p-5 text-start">
                                <label htmlFor="dateInput" className="fs-6 mb-1 ms-2"><b>Data...</b></label>
                                <input
                                    type="text"
                                    value={dataFromChild ? `${dataFromChild[0]}, ${dataFromChild[1]}` : ""}
                                    className="form-control"
                                    id="dateInput"
                                    disabled
                                />
                                <div id="fromHelp" className="form-text font-monospace ms-2">
                                    Twoja dedykacja zostanie zrealizowana wybranego dnia dokładnie o wybranej przez Ciebie godzinie.
                                </div>

                                <label htmlFor="fromInput" className="fs-6 mt-3 mb-1 ms-2"><b>Od...</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fromInput"
                                    value={fromWhom}
                                    onChange={(e) => setFromWhom(e.target.value)}
                                />
                                <div id="fromHelp" className="form-text font-monospace ms-2">Opcjonalne - możesz napisać od kogo pochodzi dedykacja.</div>

                                <label htmlFor="toInput" className="fs-6 mt-3 mb-1 ms-2"><b>Do...</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="toInput"
                                    value={toWhom}
                                    onChange={(e) => setToWhom(e.target.value)}
                                />
                                <div id="toHelp" className="form-text font-monospace ms-2">Podaj adresata dedykacji.</div>

                                <label htmlFor="occasionInput" className="fs-6 mt-3 mb-1 ms-2"><b>Z okazji...</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="occasionInput"
                                    value={occasion}
                                    onChange={(e) => setOccasion(e.target.value)}
                                />
                                <div id="occasionHelp" className="form-text font-monospace ms-2">Opcjonalne - możesz opisać okoliczności dedykacji.</div>

                                <div className="mt-4 mb-4 border-top border-light border-1"></div>

                                <SongSearch label="Wyszukaj utwór, który chcesz zadedykować." sendSongToParent={handleSongSearch} />

                                <button type="button" className="my-5 float-end btn btn-light" onClick={SendDedication}>
                                    Zarezerwuj dedykację
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  

export default Shoutouts;