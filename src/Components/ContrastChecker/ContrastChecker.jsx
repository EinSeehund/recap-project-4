import { useEffect, useState } from "react";
import "./ContrastChecker.css";

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
                
                switch (data.overall) {
                    case "Yup":
                        setBgColor("green");
                        setContrastEvaluation("✔");
                        break;
                    case "Kinda":
                        setBgColor("orange");
                        setContrastEvaluation("~");
                        break;
                    case "Nope":
                        setBgColor("red");
                        setContrastEvaluation("✘");
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
        <div className="contrast-checker">
            <p style={{ color: color2 }}>Overall Contrast Score: </p>
            <span style={{ backgroundColor: bgColor }}>
                {contrastEvaluation}
            </span>
        </div>
    );
}
