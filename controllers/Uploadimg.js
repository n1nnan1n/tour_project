const Tour = require('../models/tour');

const uploadimage = async (req, res) => {
  try {
    const tourId = req.params.tourId;
    const tour = await Tour.findById(tourId);

    if (!tour) {
      return res.status(404).send('Tour not found');
    }

    const newImages = req.files.map((file) => ({
      data: file.buffer.toString('base64'),
      contentType: file.mimetype,
    }));
    
    if (tour.tour_image && tour.tour_image.length > 0) {
      // If tour_image array exists, concatenate newImages
      tour.tour_image = tour.tour_image.concat(newImages);
    } else {
      // If tour_image array doesn't exist, set it to newImages
      tour.tour_image = newImages;
    }
    
    await tour.save();
    res.status(201).send('Images uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
module.exports = { uploadimage };
