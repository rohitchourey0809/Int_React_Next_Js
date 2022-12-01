import React from 'react'

const TimerComponent = (props) => {
    const [minutes, setMinutes] = React.useState('00');
    const [seconds, setSeconds] = React.useState(59);
    let timer;
    React.useEffect(() => {
      timer = setInterval(() => {
        setSeconds(seconds - 1);
        if (seconds == 0) {
          setSeconds(59);
          props.reset();
  
        }
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }, [seconds]);
    return (
      <span>
        {minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </span>
    );
}

export default TimerComponent