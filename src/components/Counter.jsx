import React from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
    const { count, increment, decrement, reset } = useCounter(0);
    return (
        <div>
            <p>Compteur : {count}</p>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Réinitialiser</button>
        </div>
    );
};
export default Counter;