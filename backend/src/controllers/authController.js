const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const asyncHandler = require('../utils/asyncHandler');

const generateToken = (userId) =>
  jwt.sign({ userId }, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '1d' });

const register = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  const existing = await User.findOne({ where: { email } });
  if (existing) {
    res.status(400);
    throw new Error('Email already in use');
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ fullName, email, password: hashed });

  res.status(201).json({
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    token: generateToken(user.id),
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    res.status(401);
    throw new Error('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(401);
    throw new Error('Invalid credentials');
  }

  res.json({
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    token: generateToken(user.id),
  });
});

const me = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = {
  register,
  login,
  me,
};
