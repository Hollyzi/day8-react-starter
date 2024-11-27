import { useEffect, useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterGroupGenerator from "./CounterGroupGenerator";
import CounterGroupSum from "./CounterGroupSum";

const MultipleCounter = () => {
    const [outersize, setOutersize] = useState(0);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        setSum(0);
    }, [outersize]);

    return (
        <div>
            <CounterGroupGenerator setOutersize={setOutersize} outersize={outersize} />
            <CounterGroupSum sum={sum} setSum={setSum} />
            <CounterGroup outersize={outersize} setSum={setSum} />
        </div>
    );
};

export default MultipleCounter;