import React from 'react';
import PropTypes from 'prop-types';
import Cloudinary from './Cloudinary';

const Author = ({ author }) => {
  let description = [];
  let fullName;
  let picture;

  if (author === 'Clémence') {
    description = 'Je suis Product Designer chez Pelostudio, avec un enthousiasme certain pour les Design Systems. Vivant à Amsterdam, je parle régulièrement de UI et UX ici, mais aussi lifestyle et voyage sur adeux-cestmieux.com';
    fullName = 'Clémence Taillez';
    picture = 'https://res.cloudinary.com/studio-basilic-tropical/image/upload/v1591199520/studio-basilic-tropical/picture-clemence_2x_cf5hft.png';
  } else if (author === 'Alexis') {
    description = "Basé à Amsterdam, développeur mais pas geek, j'apprécie l'art sartorial, pratique la musculation et me passionne pour Porsche.";
    fullName = 'Alexis Oney';
    picture = 'https://res.cloudinary.com/studio-basilic-tropical/image/upload/v1591199520/studio-basilic-tropical/picture-alexis_2x_f7oiul.png';
  } else {
    return null;
  }


  return (
    <div className="blog-post__author">
      <Cloudinary
        src={picture}
        alt={author}
        wrapperClassName="blog-post__author-image-wrapper"
        className="blog-post__author-image"
        srcset={['128', '256', '512']}
        sizes="128px"
      />
      <div>
        <p className="blog-post__author-name">{`Par ${fullName}`}</p>
        <p className="blog-post__author-description">{description}</p>
      </div>
    </div>
  );
};

Author.defaultProps = {
  author: '',
};

Author.propTypes = {
  author: PropTypes.string,
};

export default Author;
