const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Daily Diet API',
			version: '1.0.0',
			description: 'API for managing daily meals and user accounts',
		},
		components: {
			securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT',
				},
			},
		},
		security: [{ bearerAuth: [] }],
	},
	apis: ['./src/routes/*.js'], // path to the API docs
};

module.exports = options;
