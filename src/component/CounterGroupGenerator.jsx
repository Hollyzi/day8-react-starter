import { useState } from "react";

const CounterGroupGenerator = (props) => {
    const [size, setSize] = useState(0);

    const {setOutersize} = props;

    const handleChange = (event) => {
        event.target.value = Math.min(Math.max(0, event.target.value), 20);
        setSize(event.target.value);
    };

    const handleReset = () => {
        setOutersize(size);
    };

    return (
        <div className="counter-group-generator">
            <span>size:</span>
            <input type="number" value={size} onChange={handleChange}></input>
            <button onClick={handleReset}>reset</button>
        </div>
    );
};

export default CounterGroupGenerator;