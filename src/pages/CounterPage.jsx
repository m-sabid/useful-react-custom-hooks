import { useCounter } from "../hooks/useCounter";

/**
 * just css style.
 * you can use any css framework
 * TODO: delete or comment this style object when use css framework
 */
const style = {
  button: {
    color: "white",
    backgroundColor: "green",
    padding: "8px",
    borderRadius: "10px",
    border: "none",
  },
  span: {
    padding: "5px 20px",
    border: "1px solid",
    backgroundColor: "#eee",
  },
};

const CounterPage = () => {
  /**
   * destructure count, increment, decrement
   * set vale to 0, upperBound set 5, lowerBound set 3
   */
  const { count, handelInc, handelDec } = useCounter({
    value: 0,
    upperBound: 5,
    lowerBound: 3,
  });

  /**
   * destructure and rename count to count1, increment to increment1, decrement to decrement1
   * set value 5, upperBound 10, lowerBound5
   */
  const {
    count: count1,
    handelInc: handelInc1,
    handelDec: handelDec1,
  } = useCounter({
    value: 5,
    upperBound: 10,
    lowerBound: 5,
  });

  /**
   * no destructure store inside a variable
   * set only value 3
   */
  const counter3 = useCounter({ value: 3 });

  return (
    <>
      <h1 style={{ marginTop: "10px", textDecoration: "underline" }}>
        useCounter()
      </h1>
      <br />
      <CounterComponent
        count={count}
        handelInc={handelInc}
        handelDec={handelDec}
      />{" "}
      <br />
      <br />
      <CounterComponent
        count={count1}
        handelInc={handelInc1}
        handelDec={handelDec1}
      />
      <br />
      <br />
      {/* de destructure when send props */}
      <CounterComponent
        count={counter3.count}
        handelInc={counter3.handelInc}
        handelDec={counter3.handelDec}
      />
      <br />
      <br />
      <h5 style={{ color: "green" }}>
        Create as many counter as you want, it's very easy. No code repetition
        maximum reuse of code.
      </h5>
      <p>
        for this functionality just use{" "}
        <span style={{ backgroundColor: "#F3F4F4", color: "gray" }}>
          useCounter()
        </span>
      </p>
      <br />
      <a href="https://github.com/m-sabid/useful-react-custom-hooks">
        Source Code
      </a>
    </>
  );
};

export default CounterPage;

// counter component
const CounterComponent = ({ count, handelInc, handelDec }) => {
  return (
    <>
      <button style={style.button} onClick={handelInc}>
        increment
      </button>
      <span style={style.span}>{count}</span>
      <button style={style.button} onClick={handelDec}>
        decrement
      </button>
    </>
  );
};
