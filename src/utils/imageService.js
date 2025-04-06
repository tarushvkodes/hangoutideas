/**
 * Utility for fetching location images from free online sources
 */

// Default fallback images by category
const DEFAULT_IMAGES = {
  restaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
  park: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
  museum: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04',
  shopping: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a',
  cafe: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247',
  default: 'https://images.unsplash.com/photo-1506774058-0fb2bb0f4d25',
  library: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Library.jpg', // Example: Wikipedia
  stadium: 'https://theburn.com/wp-content/uploads/2021/09/stadium.jpg', // Example: The Burn
  theater: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Theater.jpg', // Example: Wikipedia
  zoo: 'https://news-site.com/images/zoo.jpg', // Example: News site
  aquarium: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Aquarium.jpg', // Example: Wikipedia,
  brambleton_library: 'https://www.loudoun.gov/ImageRepository/Document?documentID=147624' // Brambleton Library
};

/**
 * Get an image URL for a location
 * @param {string} name - Location name
 * @param {string} type - Location type/category
 * @param {string} address - Location address (optional)
 * @returns {string} - URL to an image representing the location
 */
export const getLocationImageUrl = (name, type, address = '') => {
  // Option 1: Use Unsplash source with search terms
  const searchTerm = encodeURIComponent(`${name} ${type}`);
  return `https://source.unsplash.com/featured/?${searchTerm}`;
  
  // Option 2: If you want to use a more reliable approach with an API key:
  // return fetchImageFromAPI(name, type);
};

/**
 * Get a fallback image URL based on location type
 * @param {string} type - Location type/category
 * @returns {string} - URL to a default image for the category
 */
export const getFallbackImageUrl = (type) => {
  const normalizedType = type?.toLowerCase() || 'default';
  return DEFAULT_IMAGES[normalizedType] || DEFAULT_IMAGES.default;
};
