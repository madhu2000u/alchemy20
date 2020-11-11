const gallery = require('../models/gallery');

exports.getImages = (req, res) => {
	if (req.headers['is_sliding']) {
		gallery
			.find({is_sliding: true})
			.then((gallery_result) => {
				res.status(200).json(gallery_result);
			})
			.catch((gallary_error) => {
				res.status(500).json({message: 'Internal server error', gallary_error});
			});
	} else {
		gallery
			.find()
			.then((gallery_result) => {
				res.status(200).json(gallery_result);
			})
			.catch((gallery_error) => {
				res.status(500).json({message: 'Internal server error', gallery_error});
			});
	}
};

exports.postImages = (req, res) => {
	if (req.headers['content-type'] != 'application/json') {
		res.status(400).json({message: 'content-type header missing'});
		console.log('content-type param missing- ', req.headers['content-type']);
	} else if (!req.body.image_url || !req.body.image_desc) {
		res.status(400).json({message: 'One or more body attributes missing'});
	} else if (!req.headers['is_sliding'] || req.headers['is_sliding'] == false) {
		const newGallery = new gallery({
			image_url: req.body.image_url,
			image_desc: req.body.image_desc,
			is_sliding: false,
		});

		gallery
			.create(newGallery)
			.then((gallery_result) => {
				res.status(200).json({message: 'Image added successfully'});
			})
			.catch((gallery_error) => {
				res.status(500).json({message: 'Internal server error', gallery_error});
			});
	} else {
		const newGallery = new gallery({
			image_url: req.body.image_url,
			image_desc: req.body.image_desc,
			is_sliding: true,
		});

		gallery
			.create(newGallery)
			.then((gallery_result) => {
				res.status(200).json({message: 'Image added successfully as sliding homepage'});
			})
			.catch((gallery_error) => {
				res.status(500).json({message: 'Internal server error', gallery_error});
			});
	}
};

exports.updateImages = (req, res) => {
	if (req.headers['content-type'] != 'application/json') {
		res.status(400).json({message: 'content-type header missing'});
		console.log('content-type param missing- ', req.headers['content-type']);
	} else if (Object.keys(req.body).length === 0) {
		res.status(400).json({message: 'One or more body attributes missing'});
	} else if (!req.headers['image_id']) {
		res.status(400).json({message: 'Image ID missing'});
	} else {
		gallery
			.updateOne({_id: req.headers['image_id']}, req.body)
			.then((gallery_result) => {
				res.status(200).json({message: 'Updated'});
				console.log('Gallery PUT .then - ', gallery_result);
			})
			.catch((gallery_error) => {
				res.status(500).json({message: 'Internal server error', gallery_error});
			});
	}
};

exports.deleteImages = (req, res) => {
	if (!req.headers['image_id']) {
		res.status(400).json({message: 'Image ID missing in header'});
	} else {
		gallery
			.deleteOne({_id: req.headers['image_id']})
			.then((gallery_result) => {
				res.status(200).json({message: 'Deleted'});
			})
			.catch((gallery_error) => {
				res.status(500).json({message: 'Internal server error', gallery_error});
			});
	}
};
