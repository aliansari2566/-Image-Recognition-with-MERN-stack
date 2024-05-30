const Image = require('../models/Image');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');

exports.uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'image_recognition',
    });

    fs.unlinkSync(req.file.path);

    const image = new Image({
      url: result.secure_url,
    });

    await image.save();
    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getImageById = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
