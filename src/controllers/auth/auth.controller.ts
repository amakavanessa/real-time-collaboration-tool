import { validationResult } from "express-validator";
import catchAsync from "../../middlewares/catch-async";
import { Request, Response } from "express";

class AuthController {
  public login = catchAsync(async (req: Request, res: Response) => {
    const err = validationResult(req);
    if (!err.isEmpty) {
      return res.status(400).json(err);
    }

    const { email, password } = req.body;
  });
}
