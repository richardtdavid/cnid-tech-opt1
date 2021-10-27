import express, { Request, Response } from "express";
import { getAllArticles } from "../services/articles.service";

const router = express.Router();

router.post("/api/everything", async (req: Request, res: Response) => {
  const body = req?.body;

  if (body === undefined) {
    res.status(400);
  } else {
    const articles = await getAllArticles(body);
    res.status(200).json(articles);
  }
});

export default router;
