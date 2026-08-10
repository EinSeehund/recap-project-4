import { useState } from "react";
import "./Color.css";

export default function Color({
    id,
    color,
    role,
    contrastText,
    onDeleteColor,
}) {
    const contrastStyle = { color: contrastText };
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <article className="color-card" style={{ backgroundColor: color }}>
            <h2 className="color-card-highlight">{color}</h2>
            <p style={contrastStyle}>
                <b>{role}</b>
            </p>
            <p style={contrastStyle}>{`contrast: ${contrastText}`}</p>
            {!showConfirm && (
                <button
                    onClick={() => {
                        setShowConfirm(true);
                    }}
                >
                    Delete
                </button>
            )}
            {showConfirm && (
                <>
                    <p className="color-card-highlight">Really delete?</p>
                    <button
                        onClick={() => {
                            setShowConfirm(false);
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            onDeleteColor(id);
                        }}
                    >
                        Delete
                    </button>
                </>
            )}
        </article>
    );
}
