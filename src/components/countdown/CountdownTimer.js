import React, { useEffect, useState } from 'react';
import "./CountdownTimer.css";

export default function CountdownTimer() {
    const calculateTime = () => {
        const difference = + new Date("April 1, 2023 17:30:00") - + new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTime());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTime());
        }, 1000);
    })

    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowDimension <= 960;


    return (
        <div className={isMobile? "mobile-timer" : "timer"}>
            {timeLeft.days
                || timeLeft.hours
                || timeLeft.minutes
                || timeLeft.seconds ? (
                <h1>
                    <span>{timeLeft.days} days, </span>
                    <span>{timeLeft.hours} hours, </span>
                    <span>{timeLeft.minutes} minutes, </span>
                    <span>{timeLeft.seconds} seconds to go! <br /></span>
                    <span> April 1<sup>st</sup>, 2023</span>
                </h1>
            ) : (
                <h1>Time for us to get married!</h1>
            )}
        </div>
    );
};
