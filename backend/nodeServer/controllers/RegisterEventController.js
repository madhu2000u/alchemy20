/* 
this controller is meant for handling pushing of registered events into the registeredevent collection.

the following operations may suffice :
- get all users registered events
- post a registered event
- remove a registered event

*/
const RegisteredEvent = require('../models/registered_students');
const Event = require('../models/events');

//get all the registered events of a user
exports.getRegisteredEvents = (req, res) => {
	//expecting client to send the and user_id as a header
	const _id = req.user.id;
	if (!_id) {
		res.status(400).json({message: 'Required fields missing'});
	} else {
		RegisteredEvent.findOne({user_id: _id})
			.populate('events')
			.exec((err, events) => {
				if (err) {
					console.log(err);
					res.status(500).json({message: 'Internal server error'});
				} else {
					res.status(200).json({message: 'Success', registeredEvents: events});
				}
			});
	}
};

exports.pushRegisteredEvents = (req, res) => {
	//expecting client to send the string event id and user_id as a header
	const event_id = req.body.headers['event_id'];
	const _id = req.user.id;

	Event.exists({_id: event_id})
		.then((result) => {
			if (result) {
				if (!_id) {
					res.status(400).json({message: '* User ID not provided'});
				} else {
					RegisteredEvent.findOne({user_id: _id}, (err, result) => {
						if (err) {
							res.status(500).json({message: 'Internal server error'});
						} else {
							if (result.events.includes(event_id)) {
								res.status(409).json({message: 'Already registered for the Event'});
							} else {
								RegisteredEvent.updateOne({user_id: _id}, {$push: {events: event_id}}, (err, raw) => {
									if (err) {
										console.log(err);
										res.status(500).json({message: 'Internal server error'});
									} else {
										res.status(200).json({message: 'Sucessfully registered for the Event !'});
									}
								});
							}
						}
					});
				}
			} else {
				res.status(400).json({message: 'Event not present'});
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(422).json({message: 'Invalid or null Id provided'});
		});
};

exports.removeRegisteredEvent = (req, res) => {
	const event_id = req.headers['event_id'];
	const _id = req.user.id;
	if (!_id || !event_id) {
		res.status(400).json({message: 'Required fields missing'});
	} else {
		RegisteredEvent.findOne({user_id: _id}, (err, result) => {
			if (err) {
				res.status(500).json({message: 'Internal server error'});
			} else {
				if (!result.events.includes(event_id)) {
					res.status(400).json({message: 'Event not present in your registered list'});
				} else {
					RegisteredEvent.updateOne({user_id: _id}, {$pull: {events: event_id}}, (err, raw) => {
						if (err) {
							console.log(err);
							res.status(500).json({message: 'Internal server error'});
						} else {
							res.status(200).json({message: 'Cancelled your registration for the Event'});
						}
					});
				}
			}
		});
	}
};
