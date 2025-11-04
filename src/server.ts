import express from "express";
import cors from "cors";
import legalRoute from "./app/routes/legal.route";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://legal-client.vercel.app"
    ],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running ✅ — use POST /generate to test.");
});

app.use("/", legalRoute);

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on ${PORT}`)
);
