import { Request, Response } from "express";
import Spot from "../models/Spot";

export class DashboardController {
  static async index(req: Request, res: Response): Promise<any> {
    const { user_id } = req.headers;

    const spots = await Spot.find({ user: user_id });

    return res.json(spots);
  }
}
