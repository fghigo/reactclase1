import { useState } from "react";

const ItemCount = ({ stock = 25, initial = 0}) => {
    const [count, setCount] = useState(initial);
    const contador = (op) => {
      if (op === "-" && count > 0) {
        setCount(count - 1);
      }
      if (op === "+" && count < stock) {
        setCount(count + 1);
      }
    };

return (
    <>
    <button onClick={() => contador ("-")}>-</button>
    {count}
    <button onClick={() => contador ("+")}>+</button>
    <button>ComprA!</button>
    </>
)
};

export default ItemCount;