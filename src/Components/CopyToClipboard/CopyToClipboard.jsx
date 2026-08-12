import { useState, useEffect } from "react";
import './CopyToClipboard.css'

export default function CopyToClipboard({ color }) {
    const [showCopied, setShowCopied] = useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(color);
            setShowCopied(true);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const copiedTimer = setTimeout(() => {
            setShowCopied(false);
        }, 3000);

        return () => {
            clearTimeout(copiedTimer);
        };
    }, [showCopied]);

    return (
        <button onClick={handleCopy}>
            {showCopied ? "Successfully copied!" : "Copy"}
        </button>
    );
}
