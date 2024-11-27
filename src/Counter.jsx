import {useState} from "react";

const Counter=()=>{
    const [number,setNumber]=useState(0)
    const increaseNumber=()=>{
        setNumber(number+1);
    }
    const decreaseNumber=()=>{
        setNumber(number-1);
    }
    return(
        <div>
            <button  onClick={increaseNumber}>+</button>
            {number}
            <button  onClick={decreaseNumber}>-</button>
        </div>
    )
}
export default Counter;