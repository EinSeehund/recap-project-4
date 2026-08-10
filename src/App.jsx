import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

function App() {
    const [colors, setColors] = useLocalStorageState("colors", {
        defaultValue: initialColors,
    });

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

    function handleEditColor(colorId, newColor) {
        setColors(
            colors.map((color) =>
                color.id === colorId ? { id: colorId, ...newColor } : color,
            ),
        );
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
                    onEditColor={handleEditColor}
                />
            ))}
            {colors.length === 0 && <p>No colors... Start by adding one!</p>}
        </>
    );
}

export default App;
