import {useState} from "react";

const CounterGroupGenerator = (props) => {
    const [size, setSize] = useState(5)
    const {outersize, setoutersize} = props
    const handleChange = (event) => {
        // props.setSize(props.size)
        setSize(event.target.value)
    }
    const handleReset = () => {
        setoutersize(size)
    }
    return (
        <div>
            <span>Size:</span>
            <input type="number" value={size} onChange={handleChange} min={0} max={20}/>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}
export default CounterGroupGenerator