import React, { useEffect } from 'react';

const time = 30;

function Timer() {
    return <span>{time === 60 ? "1:00" : `0:${time < 10 ? "0" + time : time}`}</span>
}

export default Timer;
