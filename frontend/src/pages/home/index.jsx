// src/App.js
import React, { useState } from 'react';
import UploadForm from '../../components/UploadForm';
import ImageRecognition from '../../components/ImageRecognition';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

const Home = () => {
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const handleImageUpload = async (file) => {
    // Load the MobileNet model
    const model = await mobilenet.load();
    setImage(URL.createObjectURL(file));

    // Make predictions
    const imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(file);

    const predictions = await model.classify(imageElement);
    setPredictions(predictions);
  };

  return (
    <div>
      <h1>Image Recognition App</h1>
      <UploadForm onImageUpload={handleImageUpload} />
      {image && <ImageRecognition imageUrl={image} predictions={predictions} />}
    </div>
  );
};

export default Home;
