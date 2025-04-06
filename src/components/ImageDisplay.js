import React from 'react';
import './ImageDisplay.css';

const ImageDisplay = ({ src, alt, caption }) => {
  return (
    <div className="image-container">
      <img 
        src={`/images/${src}`} 
        alt={alt || 'Site image'} 
        className="display-image"
      />
      {caption && <p className="image-caption">{caption}</p>}
    </div>
  );
};

export default ImageDisplay;
