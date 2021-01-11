const user_token = require('../models/user_tokens');
const users = require('../models/users');

exports.dashboard = (req, res) => {
	/* To return:
        {
            user_name,
            profile_pic (if any)
            alcid,
            [registered events and workshops id]
        }*/

	const user = {
		name: null,
		profile_pic: 'default',
		alcid: null,
		events_id: null,
	};

	console.log('res.locals.user - ', res.locals.user); //locals used for passing paramers between middlerwares
	res.json(res.locals.user);
};
