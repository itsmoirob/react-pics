import React from 'react';

const ImageList = props => {
  const images = props.images.map(({ id, urls: { regular }, description }) => (
    <img key={id} src={regular} alt={description}></img>
  ))

  return (
    <div>
      {images}
    </div>
  );
}

export default ImageList;