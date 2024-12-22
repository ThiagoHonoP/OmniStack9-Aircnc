import { Request, Response } from "express";
import Booking from "../models/Booking";

export class BookingController {
  static async store(req: Request, res: Response): Promise<any> {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date: date,
    });

    await (await booking.populate("spot")).populate("user");

    return res.json(booking);
  }
}
