import { useRef, useEffect } from 'react';

// const SpriteCanvas = (props) => {
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const context = canvas.getContext('2d');
//         //Our first draw
//         context.fillStyle = '#000000';
//         context.fillRect(0, 0, context.canvas.width, context.canvas.height);
//     }, []);

//     return <canvas ref={canvasRef} {...props} />;
// };

// export default SpriteCanvas;

const SpriteCanvas = (props) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.id = 'game';
        canvas.width = 32;
        canvas.height = 32;
        const context = canvas.getContext('2d');
        const image = new Image();
        image.onload = () => {
            context.drawImage(image, 0, 0);
        };
        image.src = props.imageURL;
    }, [props.imageURL]);

    return <canvas ref={canvasRef} />;
};

export default SpriteCanvas;
