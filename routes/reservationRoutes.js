import express from 'express';
import {
  createReservation,
  getReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
} from '../controllers/reservationController.js';

const router = express.Router();

router.route('/')
  .get(getReservations)
  .post(createReservation);

router.route('/:id')
  .get(getReservationById)
  .put(updateReservation)
  .delete(deleteReservation);

export default router;
