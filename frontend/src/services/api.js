import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: BASE_URL,
});

const uploadImage = async (formData, token) => {
  try {
    const response = await api.post('/images/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getImages = async () => {
  try {
    const response = await api.get('/images');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getImageById = async (id) => {
  try {
    const response = await api.get(`/images/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { uploadImage, getImages, getImageById };
