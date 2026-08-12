import { useState } from "react";
import "./ColorInput.css";

export default function ColorInput({ id, name, value, ariaLabel }) {
    const [colorValue, setColorValue] = useState(value);

    return (
        <div className="color-inputs">
            <input
                className="hex-input text-input"
                type="text"
                name={name}
                id={id}
                value={colorValue}
                onChange={(event) => {
                    setColorValue(event.target.value);
                }}
            />
            <input
                className="color-input"
                type="color"
                aria-label={ariaLabel}
                value={colorValue}
                onChange={(event) => {
                    setColorValue(event.target.value);
                }}
            />
        </div>
    );
}
