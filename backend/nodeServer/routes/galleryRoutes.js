const express = require('express');
const router = express.Router();
const utils = require('../functions/authUtils');
const galleryController = require('../controllers/GalleryController');

router.get('/gallery', utils.validateGetapi, galleryController.getImages);
router.post('/gallery', utils.validatePostapi, galleryController.postImages);
router.put('/gallery', utils.validatePostapi, galleryController.updateImages);
router.delete('/gallery', utils.validatePostapi, galleryController.deleteImages);

module.exports = router;
