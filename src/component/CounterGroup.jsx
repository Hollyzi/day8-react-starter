import Counter from "../Counter";

const CounterGroup = (props) => {
    const { outersize, setSum } = props;

    const counters = Array.from({ length: outersize }).map((_, i) => (
        <Counter key={i} setSum={setSum} outersize={outersize} />
    ));

    return <div>{counters}</div>;
};

export default CounterGroup;