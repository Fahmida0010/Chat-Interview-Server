import express from "express";
import cors from "cors";
import interviewRoutes from "./routes/interview.routes.js";
import messageRoutes from "./routes/message.routes.js";


const app = express();

app.use("/api/interview", interviewRoutes);
app.use("/api/message", messageRoutes);
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chat Interview API Running");
});

export default app;