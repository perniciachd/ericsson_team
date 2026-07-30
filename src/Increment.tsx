import { useState } from "react";
function Increment(){
    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () =>{
    setCount(count-1);
  } 
    return (
    <div>
    <h2>{count}</h2>
    <button onClick={increment}>inc</button>
    <button onClick={decrement}>dec</button>
    </div>
    );
}
export default Increment;