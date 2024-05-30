import React, { useState } from 'react';
import {uploadImage} from '../services/api';

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file!');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const token = localStorage.getItem('token'); // Get token from local storage
      const response = await uploadImage(formData); // Pass token to uploadImage function
      console.log('Upload successful:', response.data);
      // Handle success: display a message or update UI
    } catch (error) {
      console.error('Upload failed:', error.response.data);
      // Handle error: display an error message or handle differently
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadForm;
