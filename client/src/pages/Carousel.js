import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './animations.css'


function About() {
    const [flip, Flip] = useState(true)
    setTimeout(() => Flip(!flip), 1000)

    document.title = "Informacje - Radiowęzeł";

    return (
        <div>
            <div class={"bg-secondary position-absolute container-fluid" + (!flip ? " z-0" : " z-1 fade-in")}>Slajd pierwszy</div>
            <div class={"bg-danger position-absolute container-fluid" + (flip ? " z-0" : " z-1 fade-in")}>Slajd drugi</div>
        </div>
    );
}

export default About;