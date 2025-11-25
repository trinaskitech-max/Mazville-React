const TextMedia = ({ title, content, imageSrc, imageAlt, imageOnRight = false }) => {
  return (
    <section className="component component--text-media py-fluid-lg transition-all duration-700 ease-out">
      <div className={`max-w-7xl mx-auto px-fluid-sm sm:grid ${
        imageOnRight 
          ? 'sm:grid-cols-[minmax(0,_6fr)_minmax(0,_5fr)]' 
          : 'sm:grid-cols-[minmax(0,_5fr)_minmax(0,_6fr)]'
      } gap-fluid-sm items-center`}>
        
        {/* Image */}
        <div className={`relative ${imageOnRight ? 'sm:order-2' : ''}`}>
          <figure className="relative overflow-hidden group">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </figure>
        </div>

        {/* Content */}
        <div className={`space-y-6 ${imageOnRight ? 'sm:order-1' : ''}`}>
          <h2 className="text-fluid-lg font-headings transition-all duration-500 hover:text-blue">{title}</h2>
          <div className="wysiwyg space-y-4 transition-opacity duration-500">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextMedia;
