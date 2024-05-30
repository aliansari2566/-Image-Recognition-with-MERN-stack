import React, { useState } from 'react';
import UploadForm from '../../components/UploadForm';
import ImageDisplay from '../../components/ImageDisplay';
import { uploadImage } from '../../services/api'; // Import the named export

const Home = () => {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = async (formData) => {
    try {
      const response = await uploadImage(formData); // Call the named export directly
      setImageUrl(response.data.imageUrl);
      // Handle success: display a message or update UI
    } catch (error) {
      console.error('Upload failed:', error.response.data);
      // Handle error: display an error message or handle differently
    }
  };

  return (
    <div>
      <h1>Image Upload and Recognition</h1>
      <UploadForm onImageUpload={handleImageUpload} />
      {imageUrl && <ImageDisplay imageUrl={imageUrl} />}
    </div>
  );
};

export default Home;
