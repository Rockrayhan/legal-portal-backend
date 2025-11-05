import express, { Request, Response } from "express";
import { legalDocs } from "../data/legalData";

const router = express.Router();

function getSimilarity(a: string, b: string) {
  let same = 0;
  const minLength = Math.min(a.length, b.length);
  for (let i = 0; i < minLength; i++) {
    if (a[i] === b[i]) same++;
  }
  return same / Math.max(a.length, b.length);
}

function getMatchScore(query: string, text: string) {
  const queryWords = query.toLowerCase().split(" ");
  const textWords = text.toLowerCase().split(/\s+/); 

  let score = 0;

  for (const qWord of queryWords) {
    for (const tWord of textWords) {
      if (tWord.includes(qWord)) {
        score += 1; 
        break;
      } else if (getSimilarity(qWord, tWord) > 0.6) {
        score += 0.5; 
        break;
      }
    }
  }

  return score;
}

router.post("/generate", (req: Request, res: Response) => {
  const { query } = req.body;

  if (!query || !query.trim()) {
    return res.status(400).json({ error: "Please enter a search term." });
  }

  const searchTerm = query.trim().toLowerCase();

  let bestMatch = null;
  let bestScore = 0;

  for (const doc of legalDocs) {
    const combinedText = `${doc.title} ${doc.content}`;
    const score = getMatchScore(searchTerm, combinedText);

    if (score > bestScore) {
      bestScore = score;
      bestMatch = doc;
    }
  }

  if (!bestMatch || bestScore < 0.3) {
    return res.status(404).json({
      error:
        "No relevant document found. Please check your spelling or try another term.",
    });
  }

  res.json({
    document: bestMatch.title,
    summary: bestMatch.summary,
  });
});

export default router;
