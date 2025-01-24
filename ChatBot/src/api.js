import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getSignUrl = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching signed URL:", error.response || error.message);
    return error.response?.data || { message: error.message };
  }
};

export const uploadFile = async (url, file) => {
  try {
    const response = await axios.put(url, file);
    return response.data; 
  } catch (error) {
    console.error("Error uploading file:", error.response || error.message);
    return error.response?.data || { message: error.message };
  }
};
