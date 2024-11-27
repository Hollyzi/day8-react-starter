const Counter=()=>{
    const number = 1
    const increaseNumber=()=>{
        this.number++;
    }
    const decreaseNumber=()=>{
        this.number--;
    }
    return(
        <div>
            <button  onClick={increaseNumber()}></button>
            <div>{number}</div>
            <button  onClick={decreaseNumber()}></button>
        </div>
    )
}
export default Counter;