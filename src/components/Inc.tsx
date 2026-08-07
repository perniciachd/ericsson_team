import { useEffect, useRef, useState } from "react";

function Inc() {
    const [val, setVal] = useState(0);
    const [name, setName] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [name, val]);

    const inc = () => {
        console.log("button clicked");
        setVal(val + 1);
    };

    const dec = () => {
        console.log("button clicked");
        setVal(val - 1);
    };

    return (
        <>
            <p>{val}</p>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <input
                ref={inputRef}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
        </>
    );
}

export default Inc;