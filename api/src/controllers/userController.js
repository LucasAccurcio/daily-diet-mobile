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
		return res.json({ status: 400, message: 'Username already exists' });
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	try {
		const newUser = await prisma.user.create({
			data: { username, passwordHash: hashedPassword, email },
		});
		return res.json({ status: 201, newUser });
	} catch (error) {
		return res.json({ status: 500, message: 'Could not create user', error });
	}
};

exports.editUser = async (req, res) => {
	const { id } = req.params;
	const { username, email, password, newPassword } = req.body;d
	// Verificar se o usuário já existe
	const existingUser = await prisma.user.findUnique({
		where: { id: parseInt(id) },
	});
	const comparePassword = bcrypt.compare(password, existingUser.passwordHash);
	if (comparePassword) {
		const hashedPassword = await bcrypt.hash(newPassword, 10);
		const updatedUser = await prisma.user.update({
			where: { id: parseInt(id) },
			data: { username, email, passwordHash: hashedPassword },
		});
		return res.json(updatedUser);
	} else {
		return res.json({ status: 401, message: 'Invalid password' });
	}
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
		return res.json({ status: 404, message: 'User not found' });
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
		return res.json({ status: 200, message: 'Login successful', token });
	} else {
		return res.json({ status: 401, message: 'Invalid password' });
	}
};

exports.getUserById = async (req, res) => {
	const { id } = req.params;
	const user = await prisma.user.findUnique({
		where: { id: parseInt(id) },
	});
	res.json(user);
};
