import { useEffect, useRef } from "react";

function LiveBackground(props){
    
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        const id = document.getElementById("live-background");

        canvas.width = window.getComputedStyle(id).width;
        canvas.height = window.getComputedStyle(id).height;

        context.fillStyle = "#ff0000";
        context.fillRect(0, 0, 1, 1);
    });

    return (
        <canvas id="live-background" ref={canvasRef} {...props}>
        </canvas>
    )
}

export default LiveBackground;