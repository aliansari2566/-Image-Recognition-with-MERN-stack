// const express = require('express');
// const { uploadImage, getImages, getImageById } = require('../controllers/imageController');
// const upload = require('../middlewares/uploadMiddleware');
// const protect = require('../middlewares/authMiddleware'); // Corrected import
// const router = express.Router();

// router.post('/upload', protect, upload.single('image'), uploadImage);
// router.get('/', getImages);
// router.get('/:id', getImageById);

// module.exports = router;



// const express = require('express');
// const router = express.Router();
// const { uploadImage, getImages, getImageById } = require('../controllers/imageController');

// router.post('/upload', uploadImage); // Remove protect middleware

// router.get('/', getImages);
// router.get('/:id', getImageById);

// module.exports = router;

const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload'); // Import the multer middleware
const { uploadImage, getImages, getImageById } = require('../controllers/imageController');

router.post('/upload', upload.single('image'), uploadImage); // Use multer middleware for file upload

router.get('/', getImages);
router.get('/:id', getImageById);

module.exports = router;
