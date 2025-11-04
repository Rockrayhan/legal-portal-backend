"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const legalData_1 = require("../data/legalData");
const router = express_1.default.Router();
// POST /generate
router.post("/generate", (req, res) => {
    const { query } = req.body;
    if (!query)
        return res.status(400).json({ error: "Query is required" });
    const words = query.toLowerCase().split(" ");
    let bestMatch = legalData_1.legalDocs[0];
    let bestScore = 0;
    for (const doc of legalData_1.legalDocs) {
        const score = words.filter((w) => doc.content.toLowerCase().includes(w)).length;
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
exports.default = router;
