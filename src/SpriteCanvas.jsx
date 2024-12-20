import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

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
        image.alt = 'picture of ' + props.title;
    }, [props.imageURL, props.title]);

    return <canvas ref={canvasRef} />;
};

SpriteCanvas.propTypes = {
    imageURL: PropTypes.string,
    title: PropTypes.string,
};

export default SpriteCanvas;
