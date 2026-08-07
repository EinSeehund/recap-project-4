import "./ColorForm.css";
import { useState } from "react";

export default function ColorForm({ onSubmit }) {
    const [hex, setHex] = useState("#663399");
    const [contrast, setContrast] = useState("#ffffff");

    function handleChangeHex(event) {
        setHex(event.target.value);
    }

    function handleChangeContrast(event) {
        setContrast(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="role">Role</label>
            <input
                type="text"
                name="role"
                id="role"
                defaultValue={"some color"}
            />

            <label htmlFor="hex">Hex</label>
            <input
                type="text"
                name="hex"
                id="hex"
                value={hex}
                onChange={handleChangeHex}
            />
            <input type="color" value={hex} onChange={handleChangeHex} />

            <label htmlFor="contrastText">Contrast Text</label>
            <input
                type="text"
                name="contrastText"
                id="contrastText"
                value={contrast}
                onChange={handleChangeContrast}
            />
            <input
                type="color"
                value={contrast}
                onChange={handleChangeContrast}
            />

            <button type="submit">ADD COLOR</button>
        </form>
    );
}
