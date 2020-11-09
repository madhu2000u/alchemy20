const notific_coll = require('../models/notifics');

exports.getNotif = (req, res) => {
	notific_coll.find({}).then((result) => {
		res.status(200);
		//console.log(result)
		const list = [];
		for (let i = result.length; i > 0; i--) {
			const element = result[i - 1];
			//console.log('element - ', element)
			list.push(element);
		}
		// console.log('list - ', list)
		res.send(list);
	});
};

exports.postNotif = (req, res) => {
	const body = req.body;
	if (req.headers['content-type'] != 'application/json') {
		res.status(400).json({message: 'content-type header missing'});
		console.log('content-type param missing- ', req.headers['content-type']);
	} else {
		if (!body.notif_heading || !body.notif_desc || !body.notif_posted_on) {
			res.status(600);
			res.json({message: 'One or more request body parameters not found'});
		} else {
			notific_coll
				.create(req.body)
				.then((result) => {
					res.status(201);
					res.send({message: 'Notification created'});
				})
				.catch((err) => {
					res.status(500);
					res.send(err);
				});
		}
	}
};

exports.updateNotif = (req, res) => {
	if (req.headers['content-type'] != 'application/json') {
		res.status(400).json({message: 'content-type header missing'});
		console.log('content-type param missing- ', req.headers['content-type']);
	} else if (!req.headers['notif_id']) {
		res.status(600).json({message: 'notif_id parameter missing in header'});
	} //event id is the _id of the events document, when clienc does GET for events, the _id is also returned.
	else if (Object.keys(req.body).length === 0) {
		res.status(400).json({message: 'One or more body attributes missing or nothing provided to update'});
	} else {
		notific_coll
			.updateOne({_id: req.headers['notif_id']}, req.body)
			.then((notif_update_result) => {
				console.log('Inside notific route PUT .then - ', notif_update_result);
				if (notif_update_result != null) {
					res.status(200).json({message: 'Notification updated'});
				} else {
					res.status(500).json({message: 'notif with id not available'});
				}
			})
			.catch((notif_update_err) => {
				console.log('Notifs PUT .catch error - ', notif_update_err);
				res.status(404).json({message: "Notification with given id doesn't exist or Internal server error"});
			});
	}
};

exports.deleteNotif = (req, res) => {
	if (req.headers['notif_id']) {
		console.log('delete id - ', req.headers['notif_id']);
		notific_coll
			.deleteOne({_id: req.headers['notif_id']})
			.then((result) => {
				console.log('delete - ', result);
				if (result.n == 0) {
					res.status(600);
					res.json({message: 'No notification exists with this id to delete'});
				} else {
					res.status(200);
					res.json({message: 'Notification deleted'});
				}
			})
			.catch((err) => {
				console.log('delete error - ', err);
				res.status(500);
				res.send('Internal server error');
			});
	} else {
		res.status(400).json({message: 'notif_id missing in header'});
	}
};
