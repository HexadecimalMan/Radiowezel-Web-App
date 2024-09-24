import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import BookDate from '../components/BookDate';
import SongSearch from '../components/SongSearch';

function Shoutouts() {
    const [dataFromChild, setDataFromChild] = useState("");
    function handleDataFromChild(data) {
        setDataFromChild(data);
      }
    
    return (
        <div class="py-5 px-1 d-flex">
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
                                <input type="text" value={dataFromChild ? dataFromChild[0] + ", " + dataFromChild[1] : " "} class="form-control" id="fromInput" aria-describedby="fromHelp" disabled="true" />
                                <div id="fromHelp" class="form-text font-monospace ms-2">Twoja dedykacja zostanie zrealizowana wybranego dnia dokładnie o wybranej przez Ciebie godzinie.</div>
                                <label for="fromInput" class="fs-6 mt-3 mb-1 ms-2"><b>Od...</b></label>
                                <input type="text" class="form-control" id="fromInput" aria-describedby="fromHelp" />
                                <div id="fromHelp" class="form-text font-monospace ms-2">Opcjonalne - możesz napisać od kogo pochodzi dedykacja.</div>
                                <label for="toInput" class="fs-6 mt-3 mb-1 ms-2"><b>Do...</b></label>
                                <input type="text" class="form-control" id="toInput" aria-describedby="toHelp" />
                                <div id="toHelp" class="form-text font-monospace ms-2">Podaj adresata dedykacji.</div>
                                <label for="occasionInput" class="fs-6 mt-3 mb-1 ms-2"><b>Z okazji...</b></label>
                                <input type="text" class="form-control" id="occasionInput" aria-describedby="occasionHelp" />
                                <div id="occasionHelp" class="form-text font-monospace ms-2">Opcjonalne - możesz opisać okoliczności dedykacji.</div>

                                <div class="mt-4 mb-4 border-top border-light border-1"></div>

                                <SongSearch label="Wyszukaj utwór, który chcesz zadedykować." />

                                <button type="button" class="my-5 float-end btn btn-light">Zarezerwuj dedykację</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shoutouts;