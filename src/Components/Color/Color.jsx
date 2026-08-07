import "./Color.css";

export default function Color({ color, role, contrastText }) {
    const contrastStyle = { color: contrastText };

    return (
        <article className="color-card" style={{ backgroundColor: color }}>
            <h2 className="color-card-headline">{color}</h2>
            <p style={contrastStyle}>
                <b>{role}</b>
            </p>
            <p style={contrastStyle}>{`contrast: ${contrastText}`}</p>
        </article>
    );
}
