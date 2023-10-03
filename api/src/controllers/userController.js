const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
	const { username, password, email } = req.body;

	// Verificar se o usuário já existe
	const existingUser = await prisma.user.findUnique({
		where: { username },
	});

	if (existingUser) {
		return res.status(400).json({ message: 'Username already exists' });
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	try {
		const newUser = await prisma.user.create({
			data: { username, passwordHash: hashedPassword, email },
		});
		res.json(newUser);
	} catch (error) {
		res.status(500).json({ message: 'Could not create user', error });
	}
};

exports.editUser = async (req, res) => {
	const { id } = req.params;
	const { username, email } = req.body;
	const updatedUser = await prisma.user.update({
		where: { id: parseInt(id) },
		data: { username, email },
	});
	res.json(updatedUser);
};

exports.deleteUser = async (req, res) => {
	const { id } = req.params;
	const deletedUser = await prisma.user.delete({
		where: { id: parseInt(id) },
	});
	res.json(deletedUser);
};

exports.loginUser = async (req, res) => {
	const { username, password } = req.body;
	const user = await prisma.user.findUnique({
		where: { username },
	});

	if (!user) {
		return res.status(404).json({ message: 'User not found' });
	}

	const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

	if (isPasswordValid) {
		const token = jwt.sign(
			{ id: user.id, username: user.username },
			process.env.JWT_SECRET,
			{
				expiresIn: '1h',
			},
		);
		return res.json({ message: 'Login successful', token });
	} else {
		return res.status(401).json({ message: 'Invalid password' });
	}
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(user);
}