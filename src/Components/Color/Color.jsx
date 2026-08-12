import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
import ContrastChecker from "../ContrastChecker/ContrastChecker";

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
            <div className="color-control">
                <div className="color-infos">
                    <p style={contrastStyle} className="color-role">
                        <b>{role}</b>
                    </p>
                    <p style={contrastStyle}>{`contrast: ${contrastText}`}</p>
                    <ContrastChecker color1={color} color2={contrastText} />
                </div>
                <div>
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
                            <p style={contrastStyle}>
                                Really delete?
                            </p>
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
                </div>
            </div>
            <div className="code-n-copy">
                <h2 className="color-card-highlight">{color}</h2>
                <CopyToClipboard color={color} />
            </div>
        </article>
    );
}
