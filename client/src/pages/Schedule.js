import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Segment({time, title, subtitle, type, url, bg_color}) {
    return <div class={"p-2 " + (type == "broadcast" ? "pb-0" : "") + " mt-4 mb-5 border rounded position-relative"} style={{backgroundColor: bg_color}}>
                <span class="position-absolute top-0 start-50 translate-middle badge rounded text-dark bg-light">{time}</span>
                <h6 class="mx-2 mt-2 mb-3 text-dark fw-medium">
                    {title} {subtitle != "" ? (<span class="fw-light"> <br />{subtitle}</span>) : (null)}
                </h6>
                {type == "broadcast" ? 
                (<span class="position-absolute top-100 start-50 translate-middle badge rounded text-dark bg-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
                            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/>
                        </svg>
                </span>) : 
                (<a href={url} class="btn bg-light text-dark position-absolute top-100 start-50 translate-middle badge rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-list" viewBox="0 0 16 16">
                        <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2"/>
                        <path fill-rule="evenodd" d="M12 3v10h-1V3z"/>
                        <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z"/>
                        <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    &nbsp;Playlista
                </a>)}
            </div>
}

function Schedule() {
    const [schedule, updateSchedule] = useState({
        day1: [
            {
                time: "07:00",
                title: "POBUDKA KLASYCZNIE",
                subtitle: "",
                type: "music",
                url: "https://open.spotify.com/playlist/37i9dQZF1EIcLLVNT8vKbD?si=3dbaa160ad544f9a",
                bg_color: "#fcd589"
            },
            {
                time: "09:05",
                title: "PORANNE WIADOMOŚCI",
                subtitle: "Maciek",
                type: "broadcast",
                url: "",
                bg_color: "#fb9912"
            }
        ],
        day2: [
            {
                time: "07:00",
                title: "POBUDKA KLASYCZNIE",
                subtitle: "",
                type: "music",
                url: "https://open.spotify.com/playlist/37i9dQZF1EIcLLVNT8vKbD?si=3dbaa160ad544f9a",
                bg_color: "#fcd589"
            }
        ],
        day3: [
            {
                time: "07:00",
                title: "POBUDKA KLASYCZNIE",
                subtitle: "",
                type: "music",
                url: "https://open.spotify.com/playlist/37i9dQZF1EIcLLVNT8vKbD?si=3dbaa160ad544f9a",
                bg_color: "#fcd589"
            },
            {
                time: "09:05",
                title: "AKTYWNY PORANEK",
                subtitle: "Tosia",
                type: "broadcast",
                url: "",
                bg_color: "#70d6ff"
            }
        ],
        day4: [
            {
                time: "07:00",
                title: "POBUDKA KLASYCZNIE",
                subtitle: "",
                type: "music",
                url: "https://open.spotify.com/playlist/37i9dQZF1EIcLLVNT8vKbD?si=3dbaa160ad544f9a",
                bg_color: "#fcd589"
            }
        ],
        day5: [
            {
                time: "07:00",
                title: "POBUDKA KLASYCZNIE",
                subtitle: "",
                type: "music",
                url: "https://open.spotify.com/playlist/37i9dQZF1EIcLLVNT8vKbD?si=3dbaa160ad544f9a",
                bg_color: "#fcd589"
            }
        ]
    })


    const [segmentList, updateSegmentList] = useState({
        day1: [], day2: [], day3: [], day4: [], day5: []
    })  

    const buildSchedule = () => {
        let day1 = []
        for (let i = 0; i < schedule["day1"].length; i++) {
            day1 = day1.concat(<Segment key={i} time={schedule["day1"][i]["time"]} title={schedule["day1"][i]["title"]} subtitle={schedule["day1"][i]["subtitle"]} type={schedule["day1"][i]["type"]} url={schedule["day1"][i]["url"]} bg_color={schedule["day1"][i]["bg_color"]} /> )
        }
        
        let day2 = []
        for (let i = 0; i < schedule["day2"].length; i++) {
            day2 = day2.concat(<Segment key={i} time={schedule["day2"][i]["time"]} title={schedule["day2"][i]["title"]} subtitle={schedule["day2"][i]["subtitle"]} type={schedule["day2"][i]["type"]} url={schedule["day2"][i]["url"]} bg_color={schedule["day2"][i]["bg_color"]} /> )
        }

        let day3 = []
        for (let i = 0; i < schedule["day3"].length; i++) {
            day3 = day3.concat(<Segment key={i} time={schedule["day3"][i]["time"]} title={schedule["day3"][i]["title"]} subtitle={schedule["day3"][i]["subtitle"]} type={schedule["day3"][i]["type"]} url={schedule["day3"][i]["url"]} bg_color={schedule["day3"][i]["bg_color"]} /> )
        }

        let day4 = []
        for (let i = 0; i < schedule["day4"].length; i++) {
            day4 = day4.concat(<Segment key={i} time={schedule["day4"][i]["time"]} title={schedule["day4"][i]["title"]} subtitle={schedule["day4"][i]["subtitle"]} type={schedule["day4"][i]["type"]} url={schedule["day4"][i]["url"]} bg_color={schedule["day4"][i]["bg_color"]} /> )
        }
        
        let day5 = []
        for (let i = 0; i < schedule["day5"].length; i++) {
            day5 = day5.concat(<Segment key={i} time={schedule["day5"][i]["time"]} title={schedule["day5"][i]["title"]} subtitle={schedule["day5"][i]["subtitle"]} type={schedule["day5"][i]["type"]} url={schedule["day5"][i]["url"]} bg_color={schedule["day5"][i]["bg_color"]} /> )
        }
        updateSegmentList({day1: day1, day2: day2, day3: day3, day4: day4, day5: day5})
    }

    document.title = "Ramówka - Radiowęzeł";
    useEffect(() => {
        buildSchedule();
    }, [schedule])

    return (
            <div class="mt-5 m-4">
                <div class="row text-center mx-auto pt-5">
                    <h1>Ramówka radiowęzła</h1>
                </div>
                <div class="row mx-auto pt-5">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-2 mb-5 mx-1 pt-4 pb-5 fw-light rounded bg-body-tertiary border">
                        <div class="text-center">
                            <h5 class="">PONIEDZIAŁEK</h5>
                            <h6 class="fw-lighter">21.10</h6>
                        </div>
                        {segmentList["day1"]}
                    </div>
                    <div class="col-lg-2 mb-5 mx-1 pt-4 pb-5 fw-light rounded bg-body-tertiary border">
                        <div class="text-center">
                            <h5 class="">WTOREK</h5>
                            <h6 class="fw-lighter">22.10</h6>
                        </div>
                        {segmentList["day2"]}
                    </div>
                    <div class="col-lg-2 mb-5 mx-1 pt-4 pb-5 fw-light rounded bg-body-tertiary border">
                        <div class="text-center">
                            <h5 class="">ŚRODA</h5>
                            <h6 class="fw-lighter">23.10</h6>
                        </div>
                        {segmentList["day3"]}
                    </div>
                    <div class="col-lg-2 mb-5 mx-1 pt-4 pb-5 fw-light rounded bg-body-tertiary border">
                        <div class="text-center">
                            <h5 class="">CZWARTEK</h5>
                            <h6 class="fw-lighter">24.10</h6>
                        </div>
                        {segmentList["day4"]}
                    </div>
                    <div class="col-lg-2 mb-5 mx-1 pt-4 pb-5 fw-light rounded bg-body-tertiary border">
                        <div class="text-center">
                            <h5 class="">PIĄTEK</h5>
                            <h6 class="fw-lighter">25.10</h6>
                        </div>
                        {segmentList["day5"]}
                    </div>
                </div>
            </div>
    );
}

export default Schedule;