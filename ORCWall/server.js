const express = require('express');
const path = require('path');

const port = 3000;

// Init App
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', (req, res) => {
	res.render('index', {
		description: 'This is your feed'
	});
});

// Add Route
app.get('/profile', (req, res) => {
	res.render('profile', {
		description: 'This is your profile page'
	});
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});