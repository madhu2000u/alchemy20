const User = require('../models/users');
const UserToken = require('../models/user_tokens')
const utils = require('../functions/authUtils');
const RegisteredEvent = require('../models/registered_students');

exports.oauth =  (profile) =>{
	//if user exists then send to sign in. if not send to sign up.
	
	return new Promise((resolve, reject) => {
		User.exists({google_id: profile.google_id})
			.then((user) => {
				console.log('user found - ', user);
				if (!user) {
					 oauth_signup(profile)
						.then((result) => {
							console.log('oauth signup result', result);
							resolve(result);
						})
						.catch((err) => {
							reject(err);
						});
				} else {
					oauth_signin(profile)
						.then((result) => {
							console.log('oauth sign in result', result);
							resolve(result);
						})
						.catch((err) => {
							reject(err);
						});
				}
			})
			.catch((err) => {
				console.log('Internal server error in OauthController.js - ', err);
			});

		// if (User.exists({google_id: profile.google_id})) {
		//     console.log("user exists? ", User.exists({google_id: profile.google_id}))
		// 	oauth_signin(profile)
		// 		.then((result) => {
		// 			resolve(result);
		// 		})
		// 		.catch((err) => reject(err));
		// } else {
		// 	oauth_signup(profile)
		// 		.then((result) => {
		// 			resolve(result);
		// 		})
		// 		.catch((err) => reject(err));
		// }
	});
};

function oauth_signup(profile) {
	//console.log('oauth_signup controller - ', profile);

	return new Promise((resolve, reject) => {
		User.countDocuments({})
			.exec()
			.then((val) => {
				let alc_id = 'ALC';
				const len = val;
				alc_id = utils.gen_alc_id(len);
				let fin_res = {...profile, alc_id: alc_id};

				User.create(fin_res)
					.then((user) => {
						RegisteredEvent.create({user_id: user._id, events: []})
							.then((res) => {
								console.log(res);
								const newTokens = new UserToken({
									user_id: user._id,
									refreshToken:'',
								});
								UserToken.create(newTokens).then((result) =>{					
									console.log("OauthController signup user token - ",result)
									tokens(user).then((result) =>{
										resolve(result)
									}).catch((err)=>{rejecter(err)})
								}).catch((err) =>{console.log("OauthController signup user token error: ",err)})
								
							})
							.catch((err) => console.log(err));
						//console.log('user created - ', result)
						

						
						
					})
					.catch((err) => {
						reject(err); // TODO handle the error appropriately
					});
			});
	});
}

function oauth_signin(profile) {
	//console.log('oauth sign - ', profile);

	return new Promise((resolve, reject) => {
		User.findOne({google_id: profile.google_id})
			.then((user) => {
				// console.log('user logged in - ', user);
				resolve(tokens(user));
			})
			.catch((err) => {
				//No error should occur as checks done in the oauth function, but other types of errors maybe possible
				//Handle errors appropriately
				console.log(err);
				reject(err);
			});
	});
}

function tokens(user) {
	const payload={id:user._id}
	const auth_token = utils.genAccessToken(payload)
	const refreshToken = utils.genRefreshToken(payload);

	return new Promise((resolve, reject) => {
		UserToken.findOne({user_id: user._id}, (err, user_tokens_result) => {
		if(err){
			console.log("OauthController tokens function error - ", err);
			reject("Oauth Controller tokens function - ", err);
		}else{
			if (refreshToken) {
				UserToken.updateOne(
					{user_id: user_tokens_result.user_id},
					{$set: {refreshToken: refreshToken}},
					(err, res) => {
						console.log(res);
					}
				);

				resolve({
					auth_token: auth_token,
					refreshToken:refreshToken,
					// name: user.name,
					// profile_pic: user.profile_pic //will be retrieved from /dashboard
				})
				
			}

		}
	})
})




	
}
