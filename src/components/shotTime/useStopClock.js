import { useState, useEffect, useRef } from 'react';

const useStopClock = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [time, setTime] = useState(0);

    const interval = useRef();

    useEffect(() => {
        if (isStarted) {
            interval.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000)
        } else  {
            clearInterval(interval.current);
        }
    }, [isStarted]);

    return {
        setIsStarted,
        time,
        isStarted
    }
};

export default useStopClock;
