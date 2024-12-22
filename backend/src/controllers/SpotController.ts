import { Request, Response } from "express";
import User from "../models/User";
import Spot from "../models/Spot";

export class SpotController {
  static async index(req: Request, res: Response): Promise<any> {
    const { tech } = req.query;

    const spots = await Spot.find({ techs: tech });

    return res.json(spots);
  }

  static async store(req: Request, res: Response): Promise<any> {
    const { filename }: any = req.file;

    const { company, techs, price } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: "User does not exists" });
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(",").map((tech: string) => tech.trim()),
      price,
    });
    return res.json(spot);
  }
}
