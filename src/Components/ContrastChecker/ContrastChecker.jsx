import { useEffect, useState } from "react";

export default function ContrastChecker({ color1, color2 }) {
    const [contrastEvaluation, setContrastEvaluation] = useState("pending...");
    const [bgColor, setBgColor] = useState("gray");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "https://aremycolorsaccessible.com/api/are-they",
                    {
                        mode: "cors",
                        method: "POST",
                        body: JSON.stringify({
                            colors: [color1, color2],
                        }),
                    },
                );
                const data = await response.json();
                setContrastEvaluation(data.overall);
                switch (data.overall) {
                    case "Yup":
                        setBgColor("lightgreen");
                        break;
                    case "Kinda":
                        setBgColor("yellow");
                        break;
                    case "Nope":
                        setBgColor("#ff3d3d");
                        break;
                    default:
                        setBgColor("lightgray");
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [color1, color2]);

    return (
        <p style={{ backgroundColor: bgColor }}>
            Overall Contrast Score: {contrastEvaluation}
        </p>
    );
}
