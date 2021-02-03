const express = require('express');
const router = express.Router();
const utils = require('../functions/authUtils');
const sponsorsController = require('../controllers/SponsorsController');

router.get('/sponsors', utils.validateGetapi, sponsorsController.getSponsors);
router.post('/sponsors', utils.validatePostapi, sponsorsController.postSponsors);
router.put('/sponsors', utils.validatePostapi, sponsorsController.updateSponsor);
router.delete('/sponsors', utils.validatePostapi, sponsorsController.deleteSponsor);

module.exports = router;
