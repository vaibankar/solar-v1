import { v4 as uuid } from 'uuid';
import { panels } from '../data/panels.js';
import { users } from '../data/users.js';
import { requests } from '../data/requests.js';

export const listPanels = (_req, res) => res.json(panels);

export const createPanel = (req, res) => {
  const { name, capacity, location } = req.body;
  if (![name, capacity, location].every(Boolean)) {
    return res.status(400).json({ message: 'Name, capacity and location are required.' });
  }
  const panel = { id: uuid(), name, capacity: Number(capacity), location };
  panels.push(panel);
  res.status(201).json(panel);
};

export const listUsers = (_req, res) =>
  res.json(users.map((user) => ({ id: user.id, name: user.name, role: user.role })));

export const listRequests = (_req, res) => res.json(requests);

