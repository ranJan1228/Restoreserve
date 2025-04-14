import Reservation from '../models/reservationModel.js';

export const createReservation = async (req, res) => {
  const { name, email, phone, date, time, partySize } = req.body;
  try {
    const newReservation = await Reservation.create({ name, email, phone, date, time, partySize });
    res.status(201).json(newReservation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getReservations = async (req, res) => {
  const reservations = await Reservation.find();
  res.json(reservations);
};

export const getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) return res.status(404).json({ message: 'Reservation not found' });
    res.json(reservation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateReservation = async (req, res) => {
  try {
    const updated = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    res.json({ message: 'Reservation deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
