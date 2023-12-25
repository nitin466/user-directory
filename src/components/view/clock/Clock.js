import React, { useState, useEffect } from "react";
import { getFomattedTime, convertToClientTimezone } from "../../../utilFn"
import "./clock.css";
import Loading from "../../common/Loading";
import { CLOCK_UPDATE_DURATION } from "../../../constants"



const Clock = ({ location }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [time, setTime] = useState("");
    const [localTime, setLocalTime] = useState("");
    const [playTimer, setPlayTimer] = useState(false);

    var intervalId = null;

    // async function fetchLocalTime(location, cb, cb2) {
    //     try {
    //         setIsLoading(true);
    //         const res = await fetch(`${TIMEZONE_URL}/${location}`);
    //         const time = await res.json();
    //         cb(time.datetime);
    //         cb2(time.datetime);
    //         setPlayTimer(true);
    //         setIsLoading(false);
    //     } 
    //     catch(ex) {
    //         console.log(ex);
    //         setIsLoading(false);
    //     }
    // }

    /** ALTERNATE APPROACH */

    useEffect(() => {
        let date = new Date();
        setTime(convertToClientTimezone(date, location))
        setLocalTime(convertToClientTimezone(date, location))
        setPlayTimer(true);
    }, [location])


    function updateTimeLocally(localTime) {

        let currentTime = new Date(localTime);
        let seconds = currentTime.getSeconds();
        currentTime.setSeconds(seconds + 1);
        let updatedTime = new Date(currentTime);
        setLocalTime(updatedTime);

    }

    useEffect(() => {

        intervalId = setInterval(() => {
            updateTimeLocally(localTime)
        }, CLOCK_UPDATE_DURATION)

        return () => {
            clearInterval(intervalId);
        }

    }, [localTime]);

    const handlePause = () => {
        setLocalTime(localTime);
        clearInterval(intervalId)
        setPlayTimer(false);
    }
    const handleResume = () => {
        updateTimeLocally(localTime);
        setPlayTimer(true);
    }

    return (
        <>
            <div className="clk-container">
                <div className="clock">
                    {getFomattedTime(localTime)}
                </div>
                <div className="btn-container">
                    <button className="btn" onClick={handlePause} disabled={!playTimer}> &#x23f8;</button>
                    <button className="btn" onClick={handleResume} disabled={playTimer}>&#x23f5;</button>
                </div>
            </div>
            {isLoading && <Loading />}
        </>

    )
}

export default Clock;