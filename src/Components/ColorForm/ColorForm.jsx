import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
    onAddColor,
    colorId,
    colorHex,
    colorRole,
    colorContrast,
    onEditColor,
    closeFormOnEdit,
}) {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newColor = Object.fromEntries(formData);
        if (colorId) {
            onEditColor(colorId, newColor);
            closeFormOnEdit();
        } else {
            onAddColor(newColor);
            event.target.reset();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="role" style={colorId && { color: colorContrast }}>
                Role
            </label>
            <input
                type="text"
                name="role"
                id="role"
                defaultValue={colorId ? colorRole : "some color"}
            />

            <label htmlFor="hex" style={colorId && { color: colorContrast }}>
                Hex
            </label>
            <ColorInput
                id="hex"
                value={colorId ? colorHex : "#663399"}
                ariaLabel="Pick hex color"
            />

            <label
                htmlFor="contrastText"
                style={colorId && { color: colorContrast }}
            >
                Contrast Text
            </label>
            <ColorInput
                id="contrastText"
                value={colorId ? colorContrast : "#ffffff"}
                ariaLabel="Pick contrast color"
            />

            <button type="submit">
                {colorId ? "UPDATE COLOR" : "ADD COLOR"}
            </button>
        </form>
    );
}
