import { useState } from "react";

const Counter = () => {
    // let counter = 1
    const [counterValue, setCounterValue] = useState(0)
    const Increment = () => {
        setCounterValue(counterValue + 1)
    } 
    const decrement = () => {
        setCounterValue(counterValue - 1)
    } 
    const reset = () => {
        setCounterValue(0)
    } 
    return (
        <>
        <section className="flex flex-col mb-10">
            <h1>COUNT IS</h1>
            <p>{counterValue}</p>
            <div className="flex justify-center gap-4 my-4">
                <button onClick={decrement} className="border-2 border-gray-500 py-2 px-3 rounded-md" >- Derement</button>
                <button onClick={Increment} className="border-2 border-gray-500 py-2 px-3 rounded-md" >+ Increment</button>
            </div>
            <div className="flex justify-center">
                <button onClick={reset} className="border-2 border-gray-500 py-2 px-3 rounded-md">Reset</button>
            </div>
        </section>
        </>
    )
}

export default Counter;