// src/components/ImageRecognition.js
import React from 'react';

const ImageRecognition = ({ imageUrl, predictions }) => {
  return (
    <div>
      <img src={imageUrl} alt="Uploaded" />
      <ul>
        {predictions.map((prediction, index) => (
          <li key={index}>
            {prediction.className}: {prediction.probability.toFixed(4)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageRecognition;
