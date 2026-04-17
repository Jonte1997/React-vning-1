import { useState } from "react";

function Counter(){
const [count, setCount] = useState(0);

function handleClick() {
    setCount(count + 1);
}

return (
    <div>
        <h2>Räknare</h2>
        <p>Antal klick: {count}</p>
        <button onClick={handleClick}>Öka räknaren</button>
    </div>
    );
}

export default Counter;