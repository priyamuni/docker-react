const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello 5G ericcson welcome to the world');
});

app.listen(8080, () => {
	console.log('Listening on port 8080');
});
