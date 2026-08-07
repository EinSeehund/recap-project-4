import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";

function App() {
    const [colors, setColors] = useState(initialColors);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newColor = Object.fromEntries(formData);
        setColors([
            {
                id: uid(),
                ...newColor,
            },
            ...colors,
        ]);
    }

    return (
        <>
            <h1>Theme Creator</h1>
            <ColorForm onSubmit={handleSubmit} />
            {colors.map((color) => (
                <Color
                    key={color.id}
                    color={color.hex}
                    role={color.role}
                    contrastText={color.contrastText}
                />
            ))}
        </>
    );
}

export default App;
