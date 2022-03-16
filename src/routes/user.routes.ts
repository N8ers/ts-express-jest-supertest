import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response): void => {
  let users = ["Goon", "Tsuki", "Joe"];
  res.status(200).send(users);
});

export { router };
