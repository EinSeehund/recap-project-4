import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({ onSubmit }) {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newColor = Object.fromEntries(formData);
        onSubmit(newColor);
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="role">Role</label>
            <input
                type="text"
                name="role"
                id="role"
                defaultValue={"some color"}
            />

            <label htmlFor="hex">Hex</label>
            <ColorInput id="hex" value="#663399" ariaLabel="Pick hex color" />

            <label htmlFor="contrastText">Contrast Text</label>
            <ColorInput
                id="contrastText"
                value="#ffffff"
                ariaLabel="Pick contrast color"
            />

            <button type="submit">ADD COLOR</button>
        </form>
    );
}
