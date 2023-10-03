const express = require('express');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./swaggerOptions');

const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const mealRoutes = require('./routes/mealRoutes');
// const { PrismaClient } = require('@prisma/client');

const swaggerDocs = swaggerJsDoc(swaggerOptions);
const app = express();
// const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/meals', mealRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
