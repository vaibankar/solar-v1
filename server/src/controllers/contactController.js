import validator from 'validator';
import { saveEnquiry, sendAutoEmail } from '../services/contactService.js';

export const submitContact = (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;
    if (![name, email, phone, message].every(Boolean)) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email.' });
    }
    const enquiry = saveEnquiry({ name, email, phone, message });
    sendAutoEmail({ email, name });
    res.status(201).json({ message: 'Enquiry recorded', enquiry });
  } catch (error) {
    next(error);
  }
};

