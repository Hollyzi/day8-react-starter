import Counter from "../Counter";

const CounterGroup = (props) => {
    const {outersize} = props

    return (
        <div>
            {
                Array.apply(null, {length: outersize}).map(() => (
                <Counter id={`${Math.random()}`} key={`${Math.random()}`}/>
            ))
            }
        </div>


    )
}
export default CounterGroup;
