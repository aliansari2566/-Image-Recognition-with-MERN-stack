const express = require('express');
const { uploadImage, getImages, getImageById } = require('../controllers/imageController');
const upload = require('../middlewares/uploadMiddleware');
const protect = require('../middlewares/authMiddleware'); // Corrected import
const router = express.Router();

router.post('/upload', protect, upload.single('image'), uploadImage);
router.get('/', getImages);
router.get('/:id', getImageById);

module.exports = router;
