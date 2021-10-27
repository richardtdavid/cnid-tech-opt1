import express, { Request, Response } from "express";
import { getTopHeadlines } from "../services/articles.service";

const router = express.Router();

router.post("/api/headlines", async (req: Request, res: Response) => {
  const body = req?.body;

  if (body === undefined) {
    res.status(400);
  } else {
    const topHeadlines = await getTopHeadlines(body);
    res.status(200).json(topHeadlines);
  }
});

export default router;
