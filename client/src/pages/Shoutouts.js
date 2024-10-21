import { React, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import BookDate from '../components/BookDate';
import SongSearch from '../components/SongSearch';

import * as bootstrap from 'bootstrap';


function Shoutouts() {
    const [dataFromChild, setDataFromChild] = useState("");
    function handleDataFromChild(data) {
        setDataFromChild(data);
        reservation.date = data[0] + ", " + data[1];
        inputStatus.date = true
    }

    const [reservation, updateReservation] = useState({
        date: "",
        from: "",
        to: "",
        occassion: "",
        song_info: "",
        song_uri: ""
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateReservation({ ...reservation, [name]: value });
        updateInputStatus({ ...inputStatus, [name]: true });
    };

    const [inputStatus, updateInputStatus] = useState({
        date: true,
        from: true,
        to: true,
        occassion: true,
        song: true
    })

    const [contentIndex, updateContentIndex] = useState(0);
    function updateContent(index) {
        updateContentIndex(index)
    }

    const modalContent = [(
        <div>
            <div class="tab-pane fade show active" id="pills-page1" role="tabpanel" aria-labelledby="pills-1" tabindex="0">
                <div class="modal-body table">
                    <div class="row">
                        <div class="col text-center"><p>Twoja dedykacja zostanie zarezerwowana na <br /> <strong>{reservation.date}</strong>.</p></div>
                    </div>
                    <div class="row mb-1">
                        <div class="col-5 text-end"> <i>Nadawca:</i> </div>
                        <div class="col-7"> {reservation.from} </div>
                    </div>
                    <div class="row mb-1">
                        <div class="col-5 text-end"> <i>Adresat:</i> </div>
                        <div class="col-7"> {reservation.to} </div>
                    </div>
                    <div class="row mb-1">
                        <div class="col-5 text-end"> <i>Z okazji:</i> </div>
                        <div class="col-7"> {reservation.occassion} </div>
                    </div>
                    <div class="row mb-1">
                        <div class="col-5 text-end"> <i>Piosenka:</i> </div>
                        <div class="col-7"> I will survive - Gloria Gaynor </div>
                    </div>
                </div>
                <p class="text-center">Czy wszystkie informacje są poprawne?</p>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Anuluj</button>
                    <button type="button" class="btn btn-success nav-item" onClick={() => updateContent(1)}>Zgadza się</button>
                </div>
            </div>
        </div>
    ),
    (
        <div class="tab-pane fade" id="pills-page2" role="tabpanel" aria-labelledby="pills-2" tabindex="0">...</div>
    ),
    (
        <div class="tab-pane fade" id="pills-page3" role="tabpanel" aria-labelledby="pills-3" tabindex="0">...</div>
    )]

    function checkInput() {
        if (reservation.date) {inputStatus.date = true} else {inputStatus.date = false}
        if (reservation.from) {inputStatus.from = true} else {inputStatus.from = false}
        if (reservation.to) {inputStatus.to = true} else {inputStatus.to = false}
        if (reservation.occassion) {inputStatus.occassion = true} else {inputStatus.occassion = false}
        if (reservation.song_info) {inputStatus.song = true} else {inputStatus.song = true}

        if (inputStatus.date && inputStatus.from && inputStatus.to && inputStatus.occassion && inputStatus.song) {
            const modal = new bootstrap.Modal(document.getElementById('confirmReservation'))
            modal.show()
            updateInputStatus({
                date: true,
                from: true,
                to: true,
                occassion: true,
                song: true
            })
        }
    }

    document.title = "Dedykacje - Radiowęzeł";

    return (
        <div class="py-5 px-1 d-flex">
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
            <div class="container-fluid my-5 justify-content-center">
                <div class="text-center bg-body-tertiary rounded-3">
                    <div class="row">
                        <div class="col-lg-4 order-1">
                            <div id="reservationBoard" class="p-5">
                                <p class="text-start fs-6 mb-4 ms-2"><b>Wybierz godzinę swojej dedykacji...</b></p>
                                <BookDate sendDataToParent={handleDataFromChild} />
                            </div>
                        </div>
                        <div class="col-lg-8 order-2">
                            <div class="mb-5 p-5 text-start">
                                <label for="fromInput" class="fs-6 mb-1 ms-2"><b>Data...</b></label>
                                <input type="text" value={dataFromChild ? dataFromChild[0] + ", " + dataFromChild[1] : " "} class={inputStatus.date ? "form-control" : "form-control border-danger bg-danger-subtle"} id="fromInput" aria-describedby="fromHelp" disabled="true" />
                                <div id="fromHelp" class="form-text font-monospace ms-2">Twoja dedykacja zostanie zrealizowana wybranego dnia dokładnie o wybranej przez Ciebie godzinie.</div>
                                <label for="fromInput" class="fs-6 mt-3 mb-1 ms-2"><b>Od...</b></label>
                                <input type="text" name="from" value={reservation.from} onChange={handleChange} class={inputStatus.from ? "form-control" : "form-control border-danger bg-danger-subtle"} id="fromInput" aria-describedby="fromHelp" />
                                <div id="fromHelp" class="form-text font-monospace ms-2">Opcjonalne - możesz napisać od kogo pochodzi dedykacja.</div>
                                <label for="toInput" class="fs-6 mt-3 mb-1 ms-2"><b>Do...</b></label>
                                <input type="text" name="to" value={reservation.to} onChange={handleChange} class={inputStatus.to ? "form-control" : "form-control border-danger bg-danger-subtle"} id="toInput" aria-describedby="toHelp" />
                                <div id="toHelp" class="form-text font-monospace ms-2">Podaj adresata dedykacji.</div>
                                <label for="occasionInput" class="fs-6 mt-3 mb-1 ms-2"><b>Z okazji...</b></label>
                                <input type="text" name="occassion" value={reservation.occassion} onChange={handleChange} class={inputStatus.occassion ? "form-control" : "form-control border-danger bg-danger-subtle"} id="occasionInput" aria-describedby="occasionHelp" />
                                <div id="occasionHelp" class="form-text font-monospace ms-2">Opcjonalne - możesz opisać okoliczności dedykacji.</div>

                                <div class="mt-4 mb-4 border-top border-light border-1"></div>

                                <SongSearch class={inputStatus.date ? "form-control" : "form-control border-danger bg-danger-subtle"} label="Wyszukaj utwór, który chcesz zadedykować." />

                                <button type="button" class="my-5 float-end btn btn-light" onClick={checkInput}>Zarezerwuj dedykację</button>
                                <div class="modal fade" id="confirmReservation" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="position-relative m-5 mb-4">
                                                <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{height: 2+"px"}}>
                                                    <div class="progress-bar bg-light" style={{width: contentIndex*50 +'%'}}></div>
                                                </div>
                                                <button type="button" onClick={useEffect(() => {updateContent(0)})} class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-light rounded-pill" style={{height: 2.5+"rem", width: 2.5+"rem"}}>1</button>
                                                <button type="button" onClick={useEffect(() => {updateContent(1)})} class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-light rounded-pill" style={{height: 2.5+"rem", width: 2.5+"rem"}}>2</button>
                                                <button type="button" onClick={useEffect(() => {updateContent(2)})} class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-light rounded-pill" style={{height: 2.5+"rem", width: 2.5+"rem"}}>3</button>
                                            </div>
                                            <div class="tab-content" id="pills-tabContent">
                                                { modalContent[contentIndex] }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shoutouts;