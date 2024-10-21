import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

function Segment({time, title, subtitle, type, url, bg_color, day, index}) {
    return <div class={"p-2 " + (type == "broadcast" ? "pb-0" : "") + " mt-4 mb-5 border rounded position-relative"} style={{backgroundColor: "#" + bg_color}}>
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
                bg_color: "fcd589"
            },
            {
                time: "09:05",
                title: "PORANNE WIADOMOŚCI",
                subtitle: "Maciek",
                type: "broadcast",
                url: "",
                bg_color: "fb9912"
            }
        ],
        day2: [
            {
                time: "07:00",
                title: "POBUDKA KLASYCZNIE",
                subtitle: "",
                type: "music",
                url: "https://open.spotify.com/playlist/37i9dQZF1EIcLLVNT8vKbD?si=3dbaa160ad544f9a",
                bg_color: "fcd589"
            }
        ],
        day3: [
            {
                time: "07:00",
                title: "POBUDKA KLASYCZNIE",
                subtitle: "",
                type: "music",
                url: "https://open.spotify.com/playlist/37i9dQZF1EIcLLVNT8vKbD?si=3dbaa160ad544f9a",
                bg_color: "fcd589"
            },
            {
                time: "09:05",
                title: "AKTYWNY PORANEK",
                subtitle: "Tosia",
                type: "broadcast",
                url: "",
                bg_color: "70d6ff"
            }
        ],
        day4: [
            {
                time: "07:00",
                title: "POBUDKA KLASYCZNIE",
                subtitle: "",
                type: "music",
                url: "https://open.spotify.com/playlist/37i9dQZF1EIcLLVNT8vKbD?si=3dbaa160ad544f9a",
                bg_color: "fcd589"
            }
        ],
        day5: [
            {
                time: "07:00",
                title: "POBUDKA KLASYCZNIE",
                subtitle: "",
                type: "music",
                url: "https://open.spotify.com/playlist/37i9dQZF1EIcLLVNT8vKbD?si=3dbaa160ad544f9a",
                bg_color: "fcd589"
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

    
    const [newSegment, updateNewSegment] = useState({
        day: "",
        time: "08:10",
        bg_color: "64747c",
        type: "broadcast",
        url: "",
        title: "Nowy segment",
        subtitle: "świetna osoba"
    })


    const createNewSegment = day => {
        const modal = new bootstrap.Modal(document.getElementById('createNew'))
        modal.show()
        updateNewSegment({ ...newSegment, day: day });
        console.log(newSegment["day"])
    }

    const addNewSegment = () => {
        let temp = [{
            time: newSegment["time"],
            bg_color: newSegment["bg_color"],
            type: newSegment["type"],
            url: newSegment["url"],
            title: newSegment["title"],
            subtitle: newSegment["subtitle"]
        }]

        let newSchedule = null
        if (newSegment["day"] == "day1") { 
            newSchedule = schedule["day1"].concat(temp) 
            updateSchedule({ ...schedule, day1: newSchedule })
        }
        else if (newSegment["day"] == "day2") { 
            newSchedule = schedule["day2"].concat(temp) 
            updateSchedule({ ...schedule, day2: newSchedule })
        }
        else if (newSegment["day"] == "day3") { 
            newSchedule = schedule["day3"].concat(temp) 
            updateSchedule({ ...schedule, day3: newSchedule })
        }
        else if (newSegment["day"] == "day4") { 
            newSchedule = schedule["day4"].concat(temp) 
            updateSchedule({ ...schedule, day4: newSchedule })
        }
        else { 
            newSchedule = schedule["day5"].concat(temp) 
            updateSchedule({ ...schedule, day5: newSchedule })
        }
        ;
    }


    const [newSegmentComponent, updateSegmentComponent] = useState(<Segment time={newSegment["time"]} title={newSegment["title"]} subtitle={newSegment["subtitle"]} url={newSegment["url"]} type={newSegment["type"]} bg_color={newSegment["bg_color"]} />)

    const handleChange = (e) => {
        let variable = ""
        const { name, value } = e.target;
        if (name == "type") { 
            value == "Audycja" ? variable = "broadcast" : variable = "music"  
        }
        else {variable = value}
        updateNewSegment({ ...newSegment, [name]: variable });
    };

    useEffect(() => {
        updateSegmentComponent(<Segment time={newSegment["time"]} title={newSegment["title"]} subtitle={newSegment["subtitle"]} url={newSegment["url"]} type={newSegment["type"]} bg_color={newSegment["bg_color"]} />)
    }, [newSegment])

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
                        <div class="container-fluid btn btn-secondary pb-2" onClick={() => createNewSegment("day1")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg>
                        </div>
                    </div>
                    <div class="col-lg-2 mb-5 mx-1 pt-4 pb-5 fw-light rounded bg-body-tertiary border">
                        <div class="text-center">
                            <h5 class="">WTOREK</h5>
                            <h6 class="fw-lighter">22.10</h6>
                        </div>
                        {segmentList["day2"]}
                        <div class="container-fluid btn btn-secondary pb-2" onClick={() => {createNewSegment("day2")}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg>
                        </div>
                    </div>
                    <div class="col-lg-2 mb-5 mx-1 pt-4 pb-5 fw-light rounded bg-body-tertiary border">
                        <div class="text-center">
                            <h5 class="">ŚRODA</h5>
                            <h6 class="fw-lighter">23.10</h6>
                        </div>
                        {segmentList["day3"]}
                        <div class="container-fluid btn btn-secondary pb-2" onClick={() => createNewSegment("day3")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg>
                        </div>
                    </div>
                    <div class="col-lg-2 mb-5 mx-1 pt-4 pb-5 fw-light rounded bg-body-tertiary border">
                        <div class="text-center">
                            <h5 class="">CZWARTEK</h5>
                            <h6 class="fw-lighter">24.10</h6>
                        </div>
                        {segmentList["day4"]}
                        <div class="container-fluid btn btn-secondary pb-2" onClick={() => createNewSegment("day4")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg>
                        </div>
                    </div>
                    <div class="col-lg-2 mb-5 mx-1 pt-4 pb-5 fw-light rounded bg-body-tertiary border">
                        <div class="text-center">
                            <h5 class="">PIĄTEK</h5>
                            <h6 class="fw-lighter">25.10</h6>
                        </div>
                        {segmentList["day5"]}
                        <div class="container-fluid btn btn-secondary pb-2" onClick={() => createNewSegment("day5")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg>
                        </div>
                    </div>

                    <div class="modal fade" id="createNew" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Tworzenie nowego segmentu</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="p-3">
                                    <div class="row mb-3">
                                        <div class="col">
                                            <input name="time" onChange={handleChange} type="text" class="form-control" placeholder="Godzina" aria-label="hour" />
                                        </div>
                                        <div class="col">
                                            <div class="input-group">
                                                <div class="input-group-text">#</div>
                                                <input name="bg_color" onChange={handleChange} type="text" class="form-control" placeholder='fb9912' />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <select name="type" onChange={handleChange} class="form-select">
                                                <option selected>Audycja</option>
                                                <option>Muzyka</option>
                                            </select>
                                        </div>
                                    </div>
                                    {newSegment["type"] == "music" ? (<div class="row mb-3">
                                        <div class="input-group">
                                            <div class="input-group-text">Link do playlisty</div>
                                            <input type="text" onChange={handleChange} class="form-control" name="url" />
                                        </div>
                                    </div>) : (null)}
                                    <div class="row mb-3">
                                        <div class="col">
                                            <input name='title' onChange={handleChange} type="text" class="form-control" placeholder="Tytuł" aria-label="title" />
                                        </div>
                                        <div class="col">
                                            <input name='subtitle' onChange={handleChange} type="text" class="form-control" placeholder="Podtytuł" aria-label="title" />
                                        </div>
                                    </div>
                                    <div class="row mb-3 mx-5">
                                        {newSegmentComponent}
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-light" onClick={addNewSegment}>Dodaj nowy segment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Schedule;