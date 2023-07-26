const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
//const cookieSession = require('cookie-session');
//const cookieParser = require('cookie-parser');
dotenv.config({path: __dirname + '/.env'});
const passport = require('passport');
const passportCofig = require('./config/passport_config');
const https = require('https');
var expressWinston = require('express-winston');
var winston = require('winston');

// const key=require('./models/api_keys')
const app = express();
const default_port = 4700;

app.use(cors());
app.use(express.json());
//app.use(cookieParser())
// app.use(cookieSession({
// 	name: "secret name bro",
// 	keys: ["secret", "secret2" ]
// }))
app.use(passport.initialize());
//app.use(passport.session());
app.use(
	expressWinston.logger({
		transports: [
			new winston.transports.File({
				filename: './logs/combined.log',
				level: 'info',
			}),
		],
		format: winston.format.combine(winston.format.colorize(), winston.format.json()),
	})
);

const selfPing = () =>{
	try {
		const options = {
			hostname: `${process.env.hostname}`, // Replace with the correct hostname or IP for your server
			port: process.env.PORT, // Replace with the correct port for your server
			path: '/api/check', // Replace with the correct path for your API route
			method: 'GET',
		  };
		  const req = https.request(options, (res) => {
			res.on('data', (data) => {
			  // Optionally, you can process the response data here
			  console.log('Response:', data.toString());
			});
		  });
	  
		  req.on('error', (error) => {
			console.error('Error pinging backend:', error);
		  });
	  
		  req.end();
		} catch (error) {
		  console.error('Error pinging backend:', error);
		}
}

setInterval(selfPing, process.env.PING_INTERVAL);

//Routes
app.use('/api', require('./routes/authRoutes'));
app.use('/api', require('./routes/eventRoutes'));
//app.use('/api', require('./routes/galleryRoutes')); Blocked for now as we have planned not to use this route to improve site load performance (lighthouse stats) since very less frequently the images are updated.
app.use('/api', require('./routes/notifRoutes'));
app.use('/api', require('./routes/sponsorsRoute'));
app.use('/api', require('./routes/alcidRoutes'));
app.use('/api', require('./routes/registerEventRoutes'));
app.use('/api', require('./routes/oauth'));
app.use('/api', require('./routes/userDetailsRoutes'));
app.use('/api', require('./routes/dashboardRoutes'));
app.use('/api', require('./routes/posterRoutes'));

app.use(
	expressWinston.errorLogger({
		transports: [
			new winston.transports.File({
				filename: './logs/errors.log',
				level: 'error',
			}),
		],
		format: winston.format.combine(winston.format.colorize(), winston.format.json()),
	})
);

mongoose
	.connect(process.env.db_url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => {
		console.log('Connected to alchemy db');
	})
	.catch((err) => {
		console.log('Error connection to db - ', err);
	});

app.listen(process.env.PORT || default_port, () => {
	console.log('Server listening...');
});
