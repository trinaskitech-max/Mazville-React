// Placeholder image generator for development
export const getPlaceholderImage = (width = 800, height = 600, text = 'Placeholder') => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ede9e4"/>
      <text
        x="50%"
        y="50%"
        font-family="Arial, sans-serif"
        font-size="24"
        fill="#192743"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        ${text}
      </text>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

// Pre-defined placeholder images for the site
export const placeholders = {
  'historic-lobby.jpg': getPlaceholderImage(800, 600, 'Historic Lobby'),
  'restaurant.jpg': getPlaceholderImage(800, 600, 'Restaurant'),
  'wedding.jpg': getPlaceholderImage(800, 600, 'Wedding Venue'),
  'parlor.jpg': getPlaceholderImage(800, 600, 'The Parlor'),
  'ballroom.jpg': getPlaceholderImage(800, 600, 'Grand Ballroom'),
  'gardens.jpg': getPlaceholderImage(800, 600, 'The Gardens'),
  'courtyard.jpg': getPlaceholderImage(800, 600, 'The Courtyard'),
  'veranda.jpg': getPlaceholderImage(800, 600, 'The Veranda'),
  'dining.jpg': getPlaceholderImage(800, 600, 'Dining Room'),
};
