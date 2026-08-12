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
    const isEditing = Boolean(colorId);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newColor = Object.fromEntries(formData);
        if (isEditing) {
            onEditColor(colorId, newColor);
            closeFormOnEdit();
        } else {
            onAddColor(newColor);
            event.target.reset();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label
                    htmlFor={colorId ? `role-${colorId}` : "role"}
                    style={{ isEditing } && { color: colorContrast }}
                >
                    Role
                </label>
                <input
                    className="role-input"
                    type="text"
                    name="role"
                    id={isEditing ? `role-${colorId}` : "role"}
                    defaultValue={isEditing ? colorRole : "rebecca purple"}
                />
            </div>

            <div>
                <label
                    htmlFor={isEditing ? `hex-${colorId}` : "hex"}
                    style={{ isEditing } && { color: colorContrast }}
                >
                    Hex
                </label>
                <ColorInput
                    id={isEditing ? `hex-${colorId}` : "hex"}
                    name="hex"
                    value={isEditing ? colorHex : "#663399"}
                    ariaLabel="Pick hex color"
                />
            </div>

            <div>
                <label
                    htmlFor={
                        isEditing ? `contrastText-${colorId}` : "contrastText"
                    }
                    style={{ isEditing } && { color: colorContrast }}
                >
                    Contrast
                </label>
                <ColorInput
                    id={isEditing ? `contrastText-${colorId}` : "contrastText"}
                    name="contrastText"
                    value={isEditing ? colorContrast : "#ffffff"}
                    ariaLabel="Pick contrast color"
                />
            </div>

            <button type="submit">
                {isEditing ? "UPDATE COLOR" : "ADD COLOR"}
            </button>
        </form>
    );
}
