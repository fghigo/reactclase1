import { useState } from "react";

const ItemCount = ({ stock = 25, initial = 0, onAdd}) => {
    const [count, setCount] = useState(initial);
    const contador = (op) => {
      if (op === "-" && count > 0) {
        setCount(count - 1);
      }
      if (op === "+" && count < stock) {
        setCount(count + 1);
      }
    };
    const updateCountInput = (e) => {
      const { value } = e.target;
      if (value <= stock) {
        setCount(isNaN(value) ? 0 : parseInt(value));
      }
    };

return (
    <>
     <input
          onChange={(e) => updateCountInput(e)}
          placeholder=""
          value={count}
          type="number"
        />
    <button className="btn btn-secondary" onClick={() => contador ("-")}>-</button>
    {count}
    <button className="btn btn-secondary" onClick={() => contador ("+")}>+</button>
    <button className="btn btn-primary" onClick={() => onAdd(count)} 
          disabled={count === "" || count <= 0}
          >ComprA!</button>
          </>
)
};


  

export default ItemCount;