import express, { Request, Response } from "express";
import { getAppHealth } from "../services/health.service";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  const appHealth = getAppHealth();
  res.status(200).json(appHealth);
});

export default router;
