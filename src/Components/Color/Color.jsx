import "./Color.css";

export default function Color({ color, role, contrastText }) {
    return (
        <article className="color-card" style={{ backgroundColor: color }}>
            <h2 className="color-card-headline">{color}</h2>
            <p style={{ color: contrastText }}>
                <b>{role}</b>
            </p>
            <p style={{ color: contrastText }}>{`contrast: ${contrastText}`}</p>
        </article>
    );
}
