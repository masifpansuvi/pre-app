import { useEffect, useState } from "react";

const AutoCounter = () => {
    // let counter = 1
    const [counterValue, setCounterValue] = useState(0)
    const startCounter = () => {
        const timer = setInterval(() => {
            setCounterValue( counterVal => {
                return counterVal + 1
            })
            console.log("start");
            
        }, 1000)
        return timer
    } 
    const stopCounter = () => {
        setCounterValue( counterValue - 1)
    } 
    const resetCounter = () => {
        setCounterValue(0)
    } 

    useEffect(() => {
        // mount
        const timer = startCounter()

        // unmount 
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <>
        <section className="flex flex-col mb-10">
            <h1>COUNT IS</h1>
            <p>{counterValue}</p>
            <div className="flex justify-center gap-4 my-4">
                <button onClick={stopCounter} className="border-2 border-gray-500 py-2 px-3 rounded-md" >- STOP COUNTER</button>
                <button onClick={startCounter} className="border-2 border-gray-500 py-2 px-3 rounded-md" >+ START COUNTER</button>
            </div>
            <div className="flex justify-center">
                <button onClick={resetCounter} className="border-2 border-gray-500 py-2 px-3 rounded-md">RESET COUNTER</button>
            </div>
        </section>
        </>
    )
}

export default AutoCounter;