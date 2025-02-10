import React from 'react';
import Countdown from 'react-countdown';
import './CountDownTimer.css';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <span>Conference has started!</span>;
    } else {
        return (
            <div className="row justify-content-center align-items-center">
                <div className="col-6 col-sm-2 m-2 count-box">
                    <h2>{days}</h2>
                    <p className="cdt-p">Days</p>
                </div>
                <div className="col-6 col-sm-2 m-2 count-box">
                    <h2>{hours}</h2>
                    <p className="cdt-p">Hours</p>
                </div>
                <div className="col-6 col-sm-2 m-2 count-box">
                    <h2>{minutes}</h2>
                    <p className="cdt-p">Minutes</p>
                </div>
                <div className="col-6 col-sm-2 m-2 count-box">
                    <h2>{seconds}</h2>
                    <p className="cdt-p">Seconds</p>
                </div>
            </div>
        );
    }
};

const CountdownTimer = ({ date }) => (
    <Countdown date={date} renderer={renderer} />
);

export default CountdownTimer;
