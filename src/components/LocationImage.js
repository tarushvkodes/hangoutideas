import React, { useState } from 'react';
import { getLocationImageUrl, getFallbackImageUrl } from '../utils/imageService';
import './LocationImage.css';

const LocationImage = ({ location, size = 'medium' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const { name, type, address } = location;
  
  // Get primary image URL
  const imageUrl = getLocationImageUrl(name, type, address);
  
  // Get fallback image in case the primary one fails
  const fallbackUrl = getFallbackImageUrl(type);
  
  const handleImageError = () => {
    setHasError(true);
    setIsLoading(false);
  };
  
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  
  return (
    <div className={`location-image-container size-${size}`}>
      {isLoading && <div className="image-loading-indicator">Loading...</div>}
      
      <img 
        src={hasError ? fallbackUrl : imageUrl}
        alt={`${name} - ${type}`}
        className="location-image"
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
      
      <div className="image-attribution">
        Photo via Unsplash
      </div>
    </div>
  );
};

export default LocationImage;
