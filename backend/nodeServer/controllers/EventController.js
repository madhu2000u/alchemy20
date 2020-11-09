const events = require('../models/events');

exports.getEvent = (req, res) => {
	events
		.find()
		.then((events_result) => {
			res.status(200).json(events_result);
		})
		.catch((events_err) => {
			res.status(500).json(events_err);
		});
};

exports.postEvent = (req, res) => {
	const body = req.body;
	if (
		!body.event_type ||
		!body.event_name ||
		!body.event_description ||
		!body.event_img ||
		!body.event_date ||
		!body.event_cost ||
		!body.event_contacts
	) {
		res.status(400).json({message: 'One or more parameters null'});
	} else {
		events
			.create(body)
			.then((event_result) => {
				res.sendStatus(201);
			})
			.then((event_err) => {
				res.status(500).json(event_err);
			});
	}
};

exports.updateEvent = (req, res) => {
	if (req.headers['content-type'] != 'application/json') {
		res.status(400).json({message: 'content-type header missing'});
		console.log('content-type param missing- ', req.headers['content-type']);
	} else if (!req.headers['event_id']) {
		res.status(400).json({message: 'event id parameter missing'});
	} //event id is the _id of the events document, when clienc does GET for events, the _id is also returned.
	else if (Object.keys(req.body).length === 0) {
		// here we can user cuz it is only updating whatever attribute you give
		res.status(400).json({message: 'One or more body attributes missing'});
	} else {
		events
			.updateOne({_id: req.headers['event_id']}, req.body)
			.then((event_update_result) => {
				console.log('Inside events PUT .then - ', event_update_result);
				if (event_update_result != null) {
					res.status(200).json({message: 'Event updated'});
				}
			})
			.catch((event_update_err) => {
				console.log('Events PUT .catch error - ', event_update_err);
				res.status(404).json({message: "Event with given id doesn't exist or Internal server error"});
			});
	}
};

exports.deleteEvent = (req, res) => {
	if (req.headers['content-type'] != 'application/json') {
		res.status(400).json({message: 'content-type header missing'});
		console.log('content-type param missing- ', req.headers['content-type']);
	} else if (!req.headers['event_id']) {
		res.status(400).json({message: 'event id parameter missing'});
	} else {
		events
			.deleteOne({_id: req.headers['event_id']})
			.then((event_delete_result) => {
				console.log('Event delete result - ', event_delete_result);
				res.status(200).json({message: 'Event deleted'});
			})
			.catch((event_delete_err) => {
				console.log('Event delete error -  ', event_delete_err);
				res.status(500).json(event_delete_err);
			});
	}
};
