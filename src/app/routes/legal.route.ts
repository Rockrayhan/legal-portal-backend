import express, { Request, Response } from "express";
import { legalDocs } from "../data/legalData";


const router = express.Router();

// POST /generate
router.post("/generate", (req: Request, res: Response) => {
  const { query } = req.body;
  if (!query) return res.status(400).json({ error: "Query is required" });

  const words = query.toLowerCase().split(" ");

  let bestMatch = legalDocs[0];
  let bestScore = 0;

  for (const doc of legalDocs) {
    const score = words.filter((w: string) =>
      doc.content.toLowerCase().includes(w)
    ).length;
    if (score > bestScore) {
      bestScore = score;
      bestMatch = doc;
    }
  }

  res.json({
    document: bestMatch.title,
    summary: bestMatch.summary,
  });
});

export default router;
