import React, { useState } from 'react';
import axios from 'axios';

function ImageUploader() {
    const [selectedImages, setSelectedImages] = useState(null);

    const handleImageChange = (e) => {
      setSelectedImages(e.target.files);
    };
  
    const handleUpload = async () => {
      try {
        const tourId = "655a2fae9b4c465647c4609a";
        const formData = new FormData();
        for (const image of selectedImages) {
          formData.append('images', image);
        }
        await axios.put(`http://localhost:3001/upload/${tourId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Images uploaded successfully!');
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };
    return (
      <div>
        <input type="file" onChange={handleImageChange} multiple />
        <button onClick={handleUpload}>Upload Images</button>
      </div>
    );
  };
export default ImageUploader;
