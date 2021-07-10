import React from 'react';
import PropTypes from 'prop-types';
import {MAX_COUNT_IMAGES} from '../../../const';

function Gallery({images, type}) {
  const galleryImages = images.slice(0, MAX_COUNT_IMAGES);
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {galleryImages.map((image) => (
          <div key={image} className="property__image-wrapper">
            <img className="property__image" src={image} alt={type}/>
          </div>
        ))}
      </div>
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

export default Gallery;
