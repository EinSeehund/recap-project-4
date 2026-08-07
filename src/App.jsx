import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
    const [colors, setColors] = useState(initialColors);

    return (
        <>
            <h1>Theme Creator</h1>
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
