import { useState } from "react";

const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);
    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => Math.max(0, prev - 1)); // Empêche d'avoir un nombre négatif
    const reset = () => setCount(initialValue);
    return { count, increment, decrement, reset };
};
export default useCounter;