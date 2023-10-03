const express = require('express');
const router = express.Router();
const mealController = require('../controllers/mealController');
const { authenticateJWT } = require('../middlewares/authMiddleware');

/**
 * @swagger
 * /api/meals/create:
 *   post:
 *     summary: Create a new meal
 *     tags: [Meals]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               name:
 *                 type: string
 *               calories:
 *                 type: integer
 *               time:
 *                 type: string
 *     responses:
 *       200:
 *         description: The created meal
 *       500:
 *         description: Could not create meal
 */
router.post('/create', authenticateJWT, mealController.createMeal);

/**
 * @swagger
 * /api/meals/update:
 *   put:
 *     summary: Update an existing meal
 *     tags: [Meals]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *               calories:
 *                 type: integer
 *               time:
 *                 type: string
 *     responses:
 *       200:
 *         description: The updated meal
 *       500:
 *         description: Could not update meal
 */
router.put('/update', authenticateJWT, mealController.updateMeal);

/**
 * @swagger
 * /api/meals/delete/{id}:
 *   delete:
 *     summary: Delete a meal by ID
 *     tags: [Meals]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Meal deleted
 *       500:
 *         description: Could not delete meal
 */
router.delete('/delete/:id', authenticateJWT, mealController.deleteMeal);

module.exports = router;
