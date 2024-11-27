import React, { useEffect, useState } from "react";


const Counter = (props) => {
    const [number, setNumber] = useState(0);

    const { outersize, setSum } = props;

    useEffect(() => {
        setNumber(0);
    }, [outersize]);

    const increase = () => {
        setNumber((count) => count + 1);
        setSum((sum) => sum + 1);
    };
    const decrease = () => {
        setNumber((count) => count - 1);
        setSum((sum) => sum - 1);
    };

    return (
        <div>
            <button onClick={increase}>+</button>
            <span>{number}</span>
            <button onClick={decrease}>-</button>
        </div>
    );
};

export default Counter;