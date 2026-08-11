import { useState } from "react";

export default function ThemeForm({
    themes,
    onChangeTheme,
    onAddTheme,
    onDeleteTheme,
    onEditTheme,
    currentThemeId,
    defaultThemeId,
}) {
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [textInput, setTextInput] = useState("");

    function addNewTheme() {
        if (textInput !== "") {
            onAddTheme(textInput);
            setIsAdding(false);
            setTextInput("");
        } else {
            alert("Please enter a theme name!");
        }
    }
    function deleteTheme() {
        onDeleteTheme(currentThemeId);
        setIsDeleting(false);
    }
    function editTheme() {
        if (textInput !== "") {
            onEditTheme(currentThemeId, textInput);
            setTextInput("");
        } else {
            alert("Please enter a theme name!");
        }
        setIsEditing(false);
    }

    return (
        <>
            {/* DROPDOWN */}
            {!isAdding && !isEditing && (
                <>
                    <label htmlFor="themeSelect">Choose Theme:</label>
                    <select
                        value={currentThemeId}
                        onChange={(event) => {
                            onChangeTheme(event.target.value);
                        }}
                        id="themeSelect"
                    >
                        {themes.map((theme) => (
                            <option key={theme.id} value={theme.id}>
                                {theme.name}
                            </option>
                        ))}
                    </select>
                </>
            )}

            {/* TEXT INPUT */}
            {(isEditing || isAdding) && (
                <>
                    <label htmlFor="themeName">Theme Name:</label>
                    <input
                        type="text"
                        id="themeName"
                        value={textInput}
                        onChange={(event) => setTextInput(event.target.value)}
                    />
                </>
            )}

            {/* ADD */}
            {!isDeleting && !isEditing && (
                <button
                    onClick={() =>
                        isAdding ? addNewTheme() : setIsAdding(true)
                    }
                >
                    Add
                </button>
            )}
            {isAdding && (
                <button
                    onClick={() => {
                        setIsAdding(false);
                        setTextInput("");
                    }}
                >
                    Cancel
                </button>
            )}

            {/* EDIT */}
            {!isDeleting && !isEditing && !isAdding && (
                <button
                    onClick={() => {
                        setIsEditing(true);
                        setTextInput(
                            themes.find((theme) => theme.id === currentThemeId)
                                .name,
                        );
                    }}
                    disabled={currentThemeId === defaultThemeId}
                >
                    Edit
                </button>
            )}
            {isEditing && (
                <>
                    <button onClick={editTheme}>Update</button>
                    <button
                        onClick={() => {
                            setIsEditing(false);
                            setTextInput("");
                        }}
                    >
                        Cancel
                    </button>
                </>
            )}

            {/* DELETE */}
            {!isDeleting && !isEditing && !isAdding && (
                <button
                    onClick={() => setIsDeleting(true)}
                    disabled={currentThemeId === defaultThemeId}
                >
                    Delete
                </button>
            )}
            {isDeleting && (
                <>
                    <button onClick={deleteTheme}>Yes, Delete!</button>
                    <button onClick={() => setIsDeleting(false)}>Cancel</button>
                </>
            )}
        </>
    );
}
