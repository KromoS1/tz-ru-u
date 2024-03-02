import {useEffect, useState} from 'react';

const SECOND = 1000;
const MINUTE = 60000;

const formatTime = (milliseconds: number) => {
  const minutes = Math.floor(milliseconds / MINUTE);
  const seconds = Math.floor((milliseconds % MINUTE) / SECOND);

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedMinutes}:${formattedSeconds}`;
};

export const useTimer = (milliseconds: number) => {
  const [time, setTime] = useState<number>(milliseconds);

  useEffect(() => {
    let intervalId: number;

    const startTimer = () => {
      intervalId = +setInterval(() => {
        setTime(prevTime => prevTime - SECOND);
      }, SECOND);
    };

    if (time > 0) {
      startTimer();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  return {time: formatTime(time), mlseconds: time};
};
