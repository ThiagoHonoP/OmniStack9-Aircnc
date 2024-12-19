import { Request, Response } from "express";
import User from "../models/User";

export class SessionController {
  static async store(req: Request, res: Response): Promise<any> {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
}
