const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// const key=require('./models/api_keys')
const app = express();
const default_port = 4700;

dotenv.config();

app.use(express.json());

//Routes
app.use('/api', require('./routes/authRoutes'));
app.use('/api', require('./routes/eventRoutes'));
app.use('/api', require('./routes/galleryRoutes'));
app.use('/api', require('./routes/notifRoutes'));
app.use('/api', require('./routes/alcidRoutes'));

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
