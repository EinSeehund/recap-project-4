import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";

function App() {
    const [colors, setColors] = useState(initialColors);

    function handleAddColor(newColorData) {
        setColors([
            {
                id: uid(),
                ...newColorData,
            },
            ...colors,
        ]);
    }

    function handleDeleteColor(colorId) {
        setColors(colors.filter((color) => color.id !== colorId));
    }

    return (
        <>
            <h1>Theme Creator</h1>
            <ColorForm onAddColor={handleAddColor} />
            {colors.map((color) => (
                <Color
                    key={color.id}
                    id={color.id}
                    color={color.hex}
                    role={color.role}
                    contrastText={color.contrastText}
                    onDeleteColor={handleDeleteColor}
                />
            ))}
            {colors.length === 0 && <p>No colors... Start by adding one!</p>}
        </>
    );
}

export default App;
