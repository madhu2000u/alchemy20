const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({path: __dirname + '/.env'});
const passport = require('passport');
const passportCofig = require('./config/passport_config');

// const key=require('./models/api_keys')
const app = express();
const default_port = 4700;

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

//Routes
app.use('/api', require('./routes/authRoutes'));
app.use('/api', require('./routes/eventRoutes'));
app.use('/api', require('./routes/galleryRoutes'));
app.use('/api', require('./routes/notifRoutes'));
app.use('/api', require('./routes/alcidRoutes'));
app.use('/api', require('./routes/registerEventRoutes'));
app.use('/api', require('./routes/oauth'));
app.use('/api', require('./routes/dashboardRoute'))
app.use('/api', require('./routes/userDetailsRoutes'))

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
