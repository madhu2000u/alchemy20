const Event = require('../models/events');
const RegisteredEvent = require('../models/registered_students');
const User = require('../models/users');

exports.dashboard = (req, res) => {
	const _id = req.user.id;
	Event.find({})
		.then((result) => {
			let workshop = result.map((element) => (element.event_type === 'workshop' ? element : null));
			let event = result.map((element) => (element.event_type === 'event' ? element : null));

			workshop = workshop.filter((element) => {
				return element !== null;
			});
			event = event.filter((element) => {
				return element !== null;
			});

			RegisteredEvent.findOne({user_id: _id}).exec((err, reg_event) => {
				if (err) {
					console.log(err);
					res.status(500).json({message: 'Internal server error'});
				} else {
					workshop.forEach((element) => {
						element.active = reg_event.events.includes(element._id);
					});
					event.forEach((element) => {
						element.active = reg_event.events.includes(element._id);
					});
					let filtered_event = event.map((element) =>
						Object.assign({}, element._doc, {active: reg_event.events.includes(element._id)})
					);
					let filtered_workshop = workshop.map((element) =>
						Object.assign({}, element._doc, {active: reg_event.events.includes(element._id)})
					);

					console.log(JSON.stringify(filtered_workshop))

					User.findOne({_id: _id}).then((result) => {
						if (err) {
							console.log(err);
						} else {
							res.status(200).json({
								message: 'Success!',
								data: {
									workshop: filtered_workshop,
									event: filtered_event,
									alcId: result.alc_id,
									name: result.name,
									profile_pic: result.profile_pic,
									mobile: result.mobile,
								},
							});
						}
					});
					//
				}
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({message: 'Internal server error'});
		});
};
