import express from "express";
import cors from "cors";
import legalRoute from "./app/routes/legal.route";


const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running ✅ — use POST /generate to test.");
});


app.use("/", legalRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
