import React, {useState, useEffect, useRef} from "react"

function StopWatch(){


    const [IsRunning, setIsRunning] = useState(false);
    const [ElapsedTime, setElapsedTime] = useState(0);
    const IntervalIdRef = useRef(null);
    const startTimeRef = useRef(0);


    useEffect(() =>{

        if(IsRunning){

            IntervalIdRef.current = setInterval(() => {

                setElapsedTime(Date.now() - startTimeRef.current)
                
            }, 10);
        }

        return () =>{
            clearInterval(IntervalIdRef.current);
        }


    }, [IsRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - ElapsedTime;
        console.log(startTimeRef.current);

}

    function stop(){
        setIsRunning(false)

    }


    function reset(){

        setIsRunning(false);
        setElapsedTime(0);

    }

    function formattime(){


        let minutes = Math.floor(ElapsedTime / (1000 * 60) % 60 );
        let seconds = Math.floor(ElapsedTime / (1000) % 60 );
        let milliseconds = Math.floor((ElapsedTime % 1000 ) / 10);

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;

    }


    return(
        <div className="display">
            <div className="format-time">{formattime()}</div>
            <div className="display-button">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>

        </div>

    );


}

export default StopWatch