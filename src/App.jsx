import { initialColors } from "./lib/colors";
import { useState } from "react";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import ThemeForm from "./Components/ThemeForm/ThemeForm";

function App() {
    const DEFAULT_THEME_ID = "1";

    const [themes, setThemes] = useLocalStorageState("themes", {
        defaultValue: [
            {
                id: DEFAULT_THEME_ID,
                name: "Default Theme",
                colors: initialColors,
            },
        ],
    });
    const [currentThemeId, setCurrentThemeId] = useState("1");

    const currentTheme = themes.find((theme) => theme.id === currentThemeId);

    function handleAddColor(newColorData) {
        setThemes(
            themes.map((theme) =>
                theme.id === currentThemeId
                    ? {
                          ...theme,
                          colors: [
                              { id: uid(), ...newColorData },
                              ...theme.colors,
                          ],
                      }
                    : theme,
            ),
        );
    }

    function handleDeleteColor(colorId) {
        setThemes(
            themes.map((theme) =>
                theme.id === currentThemeId
                    ? {
                          ...theme,
                          colors: theme.colors.filter(
                              (color) => color.id !== colorId,
                          ),
                      }
                    : theme,
            ),
        );
    }

    function handleEditColor(colorId, newColor) {
        setThemes(
            themes.map((theme) =>
                theme.id === currentThemeId
                    ? {
                          ...theme,
                          colors: theme.colors.map((color) =>
                              color.id === colorId
                                  ? { id: colorId, ...newColor }
                                  : color,
                          ),
                      }
                    : theme,
            ),
        );
    }

    function handleChangeTheme(themeId) {
        setCurrentThemeId(themeId);
    }

    function handleAddTheme(themeName) {
        const newId = uid();
        setThemes([...themes, { id: newId, name: themeName, colors: [] }]);
        setCurrentThemeId(newId);
    }

    function handleDeleteTheme(themeId) {
        setThemes(themes.filter((theme) => theme.id !== themeId));
        setCurrentThemeId("1");
    }

    function handleEditTheme(themeId, newName) {
        setThemes(
            themes.map((theme) =>
                theme.id === themeId ? { ...theme, name: newName } : theme,
            ),
        );
    }

    return (
        <>
            <h1>Theme Creator</h1>
            <ThemeForm
                themes={themes}
                onChangeTheme={handleChangeTheme}
                onAddTheme={handleAddTheme}
                onDeleteTheme={handleDeleteTheme}
                onEditTheme={handleEditTheme}
                currentThemeId={currentThemeId}
            />
            <ColorForm onAddColor={handleAddColor} />
            {currentTheme.colors.map((color) => (
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
            {currentTheme.colors.length === 0 && (
                <p>No colors... Start by adding one!</p>
            )}
        </>
    );
}

export default App;
