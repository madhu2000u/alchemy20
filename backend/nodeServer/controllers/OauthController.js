const User = require('../models/users');

exports.oauth = (profile) => {
	//if user exists then send to sign in. if not send to sign up.

	return new Promise((resolve, reject) => {
        
        User.exists({google_id: profile.google_id}).then((user) => {
            console.log("user found - ", user)
            if(!user) {
                oauth_signup(profile).then((result) => {
                    console.log("oauth signup result", result)
                    resolve(result)
                }).catch((err) =>{reject(err)})
            }else{oauth_signin(profile).then((result) =>{
                console.log("oauth sign in result", result)
                resolve(result)
            }).catch((err) =>{reject(err)})}
        }).catch((err)=>{console.log("Internal server error in OauthController.js - ", err)})

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
		User.create(profile)
			.then((user) => {
                //console.log('user created - ', result)
				resolve(user);

				//Send result._id for JWT signing   //I prefered using the _id created automatically by mongoose. suggest if you have any better ways
				//receive the JWT token
				//resolve promise with the {profile_pic, name, JWT token} object   //these 3 will be given to the client.
			})
			.catch((err) => {
				reject(err); // TODO handle the error appropriately
			});
	});
}

function oauth_signin(profile) {
    //console.log('oauth sign - ', profile);
    
    return new Promise((resolve, reject) => {
        User.findOne({google_id: profile.google_id})
        .then((user) => {
           // console.log('user logged in - ', user);
            resolve(user);

            //Send user._id for JWT sighning function
            //receive the JWT token from the function
            //resolve promise with the {profile_pic, name, JWT token} object
        })
        .catch((err) => {
            //No error should occur as checks done in the oauth function, but other types of errors maybe possible
            //Handle errors appropriately
            console.log(err);
            reject(err);
        });

    })
    
}
