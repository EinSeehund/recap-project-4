import { useState } from "react";

export default function ColorInput({ id, value, ariaLabel }) {
    const [colorValue, setColorValue] = useState(value);

    return (
        <>
            <input
                type="text"
                name={id}
                id={id}
                value={colorValue}
                onChange={(event) => {
                    setColorValue(event.target.value);
                }}
            />
            <input
                type="color"
                aria-label={ariaLabel}
                value={colorValue}
                onChange={(event) => {
                    setColorValue(event.target.value);
                }}
            />
        </>
    );
}
