import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookDate.css';

function BookDate({ sendDataToParent }) {
    const [selectedCell, setSelectedCell] = useState(null);
    const [cellStatus, setCellStatus] = useState([])

    const buildWeek = (date) => {
        var week = []
        for (let i = 1; i <= 5; i++) {
            let first = date.getDate() - date.getDay() + i 
            let day = new Date(date.setDate(first))
            week.push(day)
        };
        return week;
    }

    const updateWeek = (call) => {
        const currentDate = new Date();
        let newOffset = weekOffset;
    
        if (call === 'next') {
          newOffset = weekOffset + 1;
          setWeekOffset(newOffset);
        } else if (call === 'previous') {
          newOffset = weekOffset - 1;
          setWeekOffset(newOffset);
        }

        const date = new Date(currentDate.getTime() + newOffset * (7 * 24 * 60 * 60 * 1000));
        const week = buildWeek(date);
        updateAvailability(week);
        setDatesDisplayed(week);
    };
    
    const updateAvailability = ( week ) => {
        const currentDate = new Date();
        let dayDifference1 = Math.round((week[0] - currentDate)/(1000*60*60*24))
        let dayDifference2 = Math.round((week[1] - currentDate)/(1000*60*60*24))
        let dayDifference3 = Math.round((week[2] - currentDate)/(1000*60*60*24))
        let dayDifference4 = Math.round((week[3] - currentDate)/(1000*60*60*24))
        let dayDifference5 = Math.round((week[4] - currentDate)/(1000*60*60*24))

        if (dayDifference1 < 3) {
            setCellStatus((prevStatus) => {
                const newStatus = { ...prevStatus };
                newStatus["r1c1"] = 'unavailable';
                newStatus["r2c1"] = 'unavailable';
                newStatus["r3c1"] = 'unavailable';
                newStatus["r4c1"] = 'unavailable';
                newStatus["r5c1"] = 'unavailable';
                newStatus["r6c1"] = 'unavailable';
                return newStatus;
                });
        }
        else {
            setCellStatus((prevStatus) => {
                const newStatus = { ...prevStatus };
                newStatus["r1c1"] = 'available';
                newStatus["r2c1"] = 'available';
                newStatus["r3c1"] = 'available';
                newStatus["r4c1"] = 'available';
                newStatus["r5c1"] = 'available';
                newStatus["r6c1"] = 'available';
                return newStatus;
            });
        }
        if (dayDifference2 < 2) {
            setCellStatus((prevStatus) => {
                const newStatus = { ...prevStatus };
                newStatus["r1c2"] = 'unavailable';
                newStatus["r2c2"] = 'unavailable';
                newStatus["r3c2"] = 'unavailable';
                newStatus["r4c2"] = 'unavailable';
                newStatus["r5c2"] = 'unavailable';
                newStatus["r6c2"] = 'unavailable';
                return newStatus;
                });
        }
        else {
            setCellStatus((prevStatus) => {
                const newStatus = { ...prevStatus };
                newStatus["r1c2"] = 'available';
                newStatus["r2c2"] = 'available';
                newStatus["r3c2"] = 'available';
                newStatus["r4c2"] = 'available';
                newStatus["r5c2"] = 'available';
                newStatus["r6c2"] = 'available';
                return newStatus;
            });
        }
        if (dayDifference3 < 2) {
            setCellStatus((prevStatus) => {
                const newStatus = { ...prevStatus };
                newStatus["r1c3"] = 'unavailable';
                newStatus["r2c3"] = 'unavailable';
                newStatus["r3c3"] = 'unavailable';
                newStatus["r4c3"] = 'unavailable';
                newStatus["r5c3"] = 'unavailable';
                newStatus["r6c3"] = 'unavailable';
                return newStatus;
                });
        }
        else {
            setCellStatus((prevStatus) => {
                const newStatus = { ...prevStatus };
                newStatus["r1c3"] = 'available';
                newStatus["r2c3"] = 'available';
                newStatus["r3c3"] = 'available';
                newStatus["r4c3"] = 'available';
                newStatus["r5c3"] = 'available';
                newStatus["r6c3"] = 'available';
                return newStatus;
            });
        }
        if (dayDifference4 < 2) {
            setCellStatus((prevStatus) => {
                const newStatus = { ...prevStatus };
                newStatus["r1c4"] = 'unavailable';
                newStatus["r2c4"] = 'unavailable';
                newStatus["r3c4"] = 'unavailable';
                newStatus["r4c4"] = 'unavailable';
                newStatus["r5c4"] = 'unavailable';
                newStatus["r6c4"] = 'unavailable';
                return newStatus;
                });
        }
        else {
            setCellStatus((prevStatus) => {
                const newStatus = { ...prevStatus };
                newStatus["r1c4"] = 'available';
                newStatus["r2c4"] = 'available';
                newStatus["r3c4"] = 'available';
                newStatus["r4c4"] = 'available';
                newStatus["r5c4"] = 'available';
                newStatus["r6c4"] = 'available';
                return newStatus;
            });
        }
        if (dayDifference5 < 2) {
            setCellStatus((prevStatus) => {
                const newStatus = { ...prevStatus };
                newStatus["r1c5"] = 'unavailable';
                newStatus["r2c5"] = 'unavailable';
                newStatus["r3c5"] = 'unavailable';
                newStatus["r4c5"] = 'unavailable';
                newStatus["r5c5"] = 'unavailable';
                newStatus["r6c5"] = 'unavailable';
                return newStatus;
                });
        }
        else {
            setCellStatus((prevStatus) => {
                const newStatus = { ...prevStatus };
                newStatus["r1c5"] = 'available';
                newStatus["r2c5"] = 'available';
                newStatus["r3c5"] = 'available';
                newStatus["r4c5"] = 'available';
                newStatus["r5c5"] = 'available';
                newStatus["r6c5"] = 'available';
                return newStatus;
            });
        }
    }
    
    const currentWeek = buildWeek(new Date());
    const [datesDisplayed, setDatesDisplayed] = useState(currentWeek);
    const [weekOffset, setWeekOffset] = useState(0);
    useEffect(() => {
        updateAvailability(datesDisplayed);
      }, [datesDisplayed]);

    // Function to handle date selection
    const handleCellSelect = (cellId) => {
        if (cellStatus[cellId] != "unavailable") {
            if (selectedCell != null) {
                setCellStatus((prevStatus) => {
                    const newStatus = { ...prevStatus };
                    newStatus[selectedCell] = 'available';
                    return newStatus;
                });
            }
    
            // Toggle the status between available, selected, and unavailable
            setCellStatus((prevStatus) => {
            const newStatus = { ...prevStatus };
            newStatus[cellId] =
                newStatus[cellId] === 'available'
                ? 'selected'
                : newStatus[cellId] === 'selected'
                ? 'available' : 'selected';
            return newStatus;
            });
    
            // Update the selected date
            setSelectedCell(cellId);

            let row = cellId[1];
            let column = cellId[3];

            let hours = ["", "09:05", "10:00", "11:00", "12:00", "12:55", "13:50"];
            let hour = hours[row];
            let date = datesDisplayed[column-1].toISOString().slice(8, 10) + "." + datesDisplayed[column-1].toISOString().slice(5, 7) + "." + datesDisplayed[column-1].toISOString().slice(0, 4)

            sendDataToParent([hour, date])
        }
    };

    return (
        <div class="table-responsive-sm float-xxl-end">
            <table class="mb-5">
                <tr id="days">
                    <th></th>
                    <th>
                        <div class="ms-2 text-center">
                            <p id="day1">{datesDisplayed[0].toISOString().slice(8, 10) + "." + datesDisplayed[0].toISOString().slice(5, 7)}</p>
                            <p class="lead" style={{fontSize: 1+'rem', marginTop: -20, marginBottom: -5}}>PON</p>
                        </div>
                    </th>
                    <th id="day2">
                        <div class="ms-2 text-center">
                            <p id="day2">{datesDisplayed[1].toISOString().slice(8, 10) + "." + datesDisplayed[0].toISOString().slice(5, 7)}</p>
                            <p class="lead" style={{fontSize: 1+'rem', marginTop: -20, marginBottom: -5}}>WT</p>
                        </div>
                    </th>
                    <th id="day3">
                        <div class="ms-2 text-center">
                            <p id="day3">{datesDisplayed[2].toISOString().slice(8, 10) + "." + datesDisplayed[0].toISOString().slice(5, 7)}</p>
                            <p class="lead" style={{fontSize: 1+'rem', marginTop: -20, marginBottom: -5}}>ŚR</p>
                        </div>
                    </th>
                    <th id="day4">
                        <div class="ms-2 text-center">
                            <p id="day4">{datesDisplayed[3].toISOString().slice(8, 10) + "." + datesDisplayed[0].toISOString().slice(5, 7)}</p>
                            <p class="lead" style={{fontSize: 1+'rem', marginTop: -20, marginBottom: -5}}>CZW</p>
                        </div>
                    </th>
                    <th id="day5">
                        <div class="ms-2 text-center">
                            <p id="day5">{datesDisplayed[4].toISOString().slice(8, 10) + "." + datesDisplayed[0].toISOString().slice(5, 7)}</p>
                            <p class="lead" style={{fontSize: 1+'rem', marginTop: -20, marginBottom: -5}}>PT</p>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>09:05</th>
                    <td>
                        <div id="r1c1" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r1c1 === 'available' ? 'secondary' : cellStatus.r1c1 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r1c1')}></div>
                    </td>
                    <td>
                        <div id="r1c2" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r1c2 === 'available' ? 'secondary' : cellStatus.r1c2 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r1c2')}></div>
                    </td>
                    <td>
                        <div id="r1c3" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r1c3 === 'available' ? 'secondary' : cellStatus.r1c3 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r1c3')}></div>
                    </td>
                    <td>
                        <div id="r1c4" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r1c4 === 'available' ? 'secondary' : cellStatus.r1c4 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r1c4')}></div>
                    </td>
                    <td>
                        <div id="r1c5" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r1c5 === 'available' ? 'secondary' : cellStatus.r1c5 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r1c5')}></div>
                    </td>
                </tr>
                <tr>
                    <th>10:00</th>
                    <td>
                        <div id="r2c1" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r2c1 === 'available' ? 'secondary' : cellStatus.r2c1 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r2c1')}></div>
                    </td>
                    <td>
                        <div id="r2c2" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r2c2 === 'available' ? 'secondary' : cellStatus.r2c2 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r2c2')}></div>
                    </td>
                    <td>
                        <div id="r2c3" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r2c3 === 'available' ? 'secondary' : cellStatus.r2c3 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r2c3')}></div>
                    </td>
                    <td>
                        <div id="r2c4" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r2c4 === 'available' ? 'secondary' : cellStatus.r2c4 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r2c4')}></div>
                    </td>
                    <td>
                        <div id="r2c5" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r2c5 === 'available' ? 'secondary' : cellStatus.r2c5 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r2c5')}></div>
                    </td>
                </tr>
                <tr>
                    <th>11:00</th>
                    <td>
                        <div id="r3c1" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r3c1 === 'available' ? 'secondary' : cellStatus.r3c1 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r3c1')}></div>
                    </td>
                    <td>
                        <div id="r3c2" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r3c2 === 'available' ? 'secondary' : cellStatus.r3c2 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r3c2')}></div>
                    </td>
                    <td>
                        <div id="r3c3" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r3c3 === 'available' ? 'secondary' : cellStatus.r3c3 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r3c3')}></div>
                    </td>
                    <td>
                        <div id="r3c4" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r3c4 === 'available' ? 'secondary' : cellStatus.r3c4 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r3c4')}></div>
                    </td>
                    <td>
                        <div id="r3c5" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r3c5 === 'available' ? 'secondary' : cellStatus.r3c5 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r3c5')}></div>
                    </td>
                </tr>
                <tr>
                    <th>12:00</th>
                    <td>
                        <div id="r4c1" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r4c1 === 'available' ? 'secondary' : cellStatus.r4c1 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r4c1')}></div>
                    </td>
                    <td>
                        <div id="r4c2" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r4c2 === 'available' ? 'secondary' : cellStatus.r4c2 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r4c2')}></div>
                    </td>
                    <td>
                        <div id="r4c3" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r4c3 === 'available' ? 'secondary' : cellStatus.r4c3 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r4c3')}></div>
                    </td>
                    <td>
                        <div id="r4c4" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r4c4 === 'available' ? 'secondary' : cellStatus.r4c4 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r4c4')}></div>
                    </td>
                    <td>
                        <div id="r4c5" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r4c5 === 'available' ? 'secondary' : cellStatus.r4c5 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r4c5')}></div>
                    </td>
                </tr>
                <tr>
                    <th>12:55</th>
                    <td>
                        <div id="r5c1" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r5c1 === 'available' ? 'secondary' : cellStatus.r5c1 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r5c1')}></div>
                    </td>
                    <td>
                        <div id="r5c2" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r5c2 === 'available' ? 'secondary' : cellStatus.r5c2 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r5c2')}></div>
                    </td>
                    <td>
                        <div id="r5c3" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r5c3 === 'available' ? 'secondary' : cellStatus.r5c3 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r5c3')}></div>
                    </td>
                    <td>
                        <div id="r5c4" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r5c4 === 'available' ? 'secondary' : cellStatus.r5c4 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r5c4')}></div>
                    </td>
                    <td>
                        <div id="r5c5" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r5c5 === 'available' ? 'secondary' : cellStatus.r5c5 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r5c5')}></div>
                    </td>
                </tr>
                <tr>
                    <th>13:50</th>
                    <td>
                        <div id="r6c1" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r6c1 === 'available' ? 'secondary' : cellStatus.r6c1 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r6c1')}></div>
                    </td>
                    <td>
                        <div id="r6c2" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r6c2 === 'available' ? 'secondary' : cellStatus.r6c2 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r6c2')}></div>
                    </td>
                    <td>
                        <div id="r6c3" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r6c3 === 'available' ? 'secondary' : cellStatus.r6c3 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r6c3')}></div>
                    </td>
                    <td>
                        <div id="r6c4" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r6c4 === 'available' ? 'secondary' : cellStatus.r6c4 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r6c4')}></div>
                    </td>
                    <td>
                        <div id="r6c5" className={`p-4 ms-2 mt-2 rounded border border-secondary bg-${cellStatus.r6c5 === 'available' ? 'secondary' : cellStatus.r6c5 === 'selected' ? 'success' : 'body-tertiary'}`} onClick={() => handleCellSelect('r6c5')}></div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td colSpan={5}>
                    <div class="row ms-2 me-3 mt-3 justify-content-center">
                        <div id="next-week" class="col col-2"><button class="btn border border-secondary fs-5" onClick={() => updateWeek('previous')}><b>&laquo;</b></button></div>
                        <div id="previous-week" class="col col-2"><button class="btn border border-secondary fs-5" onClick={() => updateWeek('next')}><b>&raquo;</b></button></div>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="p-3 ms-3 mt-2 rounded bg-secondary"></div>
                    </td>
                    <td colSpan={5}>
                        <p class="ms-1 mt-4 text-start align-middle form-text font-monospace">- dostępny termin</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="p-3 ms-3 rounded bg-success"></div>
                    </td>
                    <td colSpan={5}>
                        <p class="ms-1 mt-3 text-start align-middle form-text font-monospace">- wybrany termin</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="p-3 ms-3 rounded bg-body-tertiary border border-secondary"></div>
                    </td>
                    <td colSpan={5}>
                        <p class="ms-1 mt-3 text-start align-middle form-text font-monospace">- termin niedostępny</p>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default BookDate;