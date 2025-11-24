import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { users } from '../data/users.js';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

export const login = (req, res) => {
  const { email, password, role } = req.body;
  const user = users.find((u) => u.email === email && (!role || u.role === role));
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const valid = bcrypt.compareSync(password, user.password);
  if (!valid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, { expiresIn: '8h' });
  res.json({ token, user: { id: user.id, name: user.name, role: user.role } });
};

export const profile = (req, res) => {
  res.json({ user: req.user });
};

