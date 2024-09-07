import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SongSearch = ({ label }) => {
    return (
        <div>
            <input autocomplete="false" type="text" class="form-control" id="songInput" aria-describedby="songHelp" />
            <div id="songHelp" class="form-text font-monospace">{label}</div>
        </div>
    );
}

export default SongSearch;