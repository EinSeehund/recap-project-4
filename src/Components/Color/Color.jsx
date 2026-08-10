import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";

export default function Color({
    id,
    color,
    role,
    contrastText,
    onDeleteColor,
    onEditColor,
}) {
    const [showConfirm, setShowConfirm] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const contrastStyle = { color: contrastText };

    return (
        <article className="color-card" style={{ backgroundColor: color }}>
            <h2 className="color-card-highlight">{color}</h2>
            <p style={contrastStyle}>
                <b>{role}</b>
            </p>
            <p style={contrastStyle}>{`contrast: ${contrastText}`}</p>
            {!showConfirm && !showEdit && (
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
            {!showEdit && !showConfirm && (
                <button
                    onClick={() => {
                        setShowEdit(true);
                    }}
                >
                    Edit
                </button>
            )}
            {showEdit && (
                <>
                    <ColorForm
                        colorId={id}
                        colorHex={color}
                        colorRole={role}
                        colorContrast={contrastText}
                        onEditColor={onEditColor}
                        closeFormOnEdit={() => {
                            setShowEdit(false);
                        }}
                    />
                    <button
                        onClick={() => {
                            setShowEdit(false);
                        }}
                    >
                        Cancel
                    </button>
                </>
            )}
        </article>
    );
}
