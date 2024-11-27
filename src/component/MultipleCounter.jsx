import CounterGroupGenerator from "./CounterGroupGenerator";
import {useState} from "react";
import CounterGroup from "./CounterGroup";

const MultipleCounter=()=>{
    const [outersize,setoutersize]=useState(0)
    return(
        <div>
            <CounterGroupGenerator outersize={outersize} setoutersize={setoutersize}></CounterGroupGenerator>
            <CounterGroup outersize={outersize}></CounterGroup>
            {/*<CounterGroup outersize={outersize}>{outersize}</CounterGroup>*/}
        </div>
    )
}
export default MultipleCounter