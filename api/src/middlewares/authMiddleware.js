const jwt = require('jsonwebtoken');

exports.authenticateJWT = (req, res, next) => {
	let token = req.header('Authorization');
	if (token && token.startsWith('Bearer ')) {
		// Remove 'Bearer ' from token string
		token = token.slice(7, token.length).trimLeft();
	}

	if (!token) return res.status(401).send('Access Denied');

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) {
			return res.sendStatus(403);
		}
		req.user = user;
		next();
	});
};
