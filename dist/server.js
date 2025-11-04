"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const legal_route_1 = __importDefault(require("./app/routes/legal.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173",
        "https://legal-client.vercel.app"
    ],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));
// Routes
app.get("/", (req, res) => {
    res.send("Backend is running ✅ — use POST /generate to test.");
});
app.use("/", legal_route_1.default);
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
