const Poster = require('../models/posters');

exports.getPosters = (req, res) => {
	Poster.find({})
		.then((posters) => {
			return res.status(200).send(posters.reverse());
		})
		.catch((err) => {
			console.log(err);
			return res.status(500).send(err);
		});
};

exports.postPosters = (req, res) => {
	if (!req.body.image || !req.body.alt || !req.body.report) {
		return res.status(403).json({message: 'Required fields missing'});
	}
	const newPoster = new Poster({
		image: req.body.image,
		alt: req.body.alt,
		report: req.body.report,
	});

	Poster.create(newPoster)
		.then(() => {
			return res.status(201).json({message: 'New Poster Created!'});
		})
		.catch((err) => {
			console.log(err);
			return res.status(500).json({message: 'Internal server error!'});
		});
};

exports.updatePoster = (req, res) => {
	const id = req.headers['poster_id'];
	if (!id) {
		return res.status(403).json({message: 'Poster ID missing'});
	}

	Poster.findByIdAndUpdate(id, {$set: {image: req.body.image, alt: req.body.alt, report: req.body.report}})
		.then(() => {
			return res.status(200).json({message: 'Poster Updated'});
		})
		.catch((err) => {
			console.log(err);
			return res.status(500).json({message: 'Internal server error!'});
		});
};

exports.deletePoster = (req, res) => {
	const id = req.headers['poster_id'];
	if (!id) {
		return res.status(403).json({message: 'Poster ID missing'});
	}

	Poster.findByIdAndDelete(id)
		.then((result) => {
			if (!result) {
				return res.status(404).json({message: 'Poster not found'});
			}
			return res.status(200).json({message: 'Deleted!'});
		})
		.catch((err) => {
			console.log(err);
			return res.status(500).json({message: 'Internal server error!'});
		});
};
