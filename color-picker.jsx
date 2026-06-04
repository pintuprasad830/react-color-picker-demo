import { useState } from "react";

export function ColorPicker() {

    const [color, setColor] = useState("white");

    return (
        <div className="container-fluid p-4">
            <h2>Color Picker Demo</h2>

            <input
                type="color"
                onChange={(e) => setColor(e.target.value)}
            />

            <div
                className="mt-3 border"
                style={{
                    width: "300px",
                    height: "200px",
                    backgroundColor: color
                }}
            >
            </div>

            <h4 className="mt-2">Selected Color: {color}</h4>
        </div>
    );
}