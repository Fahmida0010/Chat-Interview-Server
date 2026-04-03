import { Router } from "express";
const router = Router();

let messages: any[] = [];

router.get("/:roomId", (req, res) => {
  const roomMessages = messages.filter(
    m => m.roomId === req.params.roomId
  );
  res.json(roomMessages);
});

router.post("/send", (req, res) => {
  const message = {
    ...req.body,
    createdAt: new Date(),
  };

  messages.push(message);
  res.json(message);
});

export default router;