const express = require('express');
const router = express.Router();
const utils = require('../functions/authUtils');
const PosterController = require('../controllers/PosterCollection');

router.get('/posters', utils.validateGetapi, PosterController.getPosters);
router.post('/posters', utils.validatePostapi, PosterController.postPosters);
router.delete('/posters', utils.validatePostapi, PosterController.deletePoster);
router.put('/posters', utils.validatePostapi, PosterController.updatePoster);

module.exports = router;
