const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createMeal = async (req, res) => {
  const { userId, name, calories, time } = req.body;
  try {
    const newMeal = await prisma.meal.create({
      data: { userId, name, calories, time }
    });
    res.json(newMeal);
  } catch (error) {
    res.status(500).json({ message: 'Could not create meal', error });
  }
};

exports.updateMeal = async (req, res) => {
  const { id, name, calories, time } = req.body;
  try {
    const updatedMeal = await prisma.meal.update({
      where: { id },
      data: { name, calories, time }
    });
    res.json(updatedMeal);
  } catch (error) {
    res.status(500).json({ message: 'Could not update meal', error });
  }
};

exports.deleteMeal = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.meal.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Meal deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Could not delete meal', error });
  }
};
