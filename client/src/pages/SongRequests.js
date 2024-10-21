import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SongSearch from '../components/SongSearch';

function SongRequests() {
    document.title = "Propozycje - Radiowęzeł";
    return (
        <div class="py-5 px-3 d-flex">
            <div class="row my-5 justify-content-center">
                <div class="col-sm-7 order-2 mb-3">
                    <div class="mb-5 px-3 py-5 h-100 text-center bg-body-tertiary rounded-3">
                        <figure>
                            <blockquote class="blockquote">
                                <p><i>Jakieś życzenia? ✨</i></p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                pojawiało się kiedyś na Instagramowym koncie radiowęzła.
                            </figcaption>
                        </figure>

                        <p class="mt-5 lead">
                            <b>Teraz możesz zdradzić nam piosenki, które chodzą Ci po głowie 🤘 przy użyciu poniższego formularza. Dzięki temu łatwiej będzie nam dodać je do playlisty i puścić na korytarzu.</b>
                        </p>
                    </div>
                </div>

                <div class="col-sm-5 order-1 mb-3">
                    <div class="mb-5 p-5 h-100 text-center bg-body-tertiary rounded-3">
                        <SongSearch label="Wyszukaj utwór, który chcesz zaproponować." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SongRequests;