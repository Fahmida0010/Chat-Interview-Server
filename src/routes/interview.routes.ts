import { Router } from "express";
const router = Router();

let rooms: any[] = [];

router.post("/create", (req, res) => {
  const room = {
    id: Date.now().toString(),
    interviewer: req.body.interviewer,
    candidate: null,
    status: "pending",
  };

  rooms.push(room);
  res.json(room);
});

router.post("/join", (req, res) => {
  const { roomId, candidate } = req.body;

  const room = rooms.find(r => r.id === roomId);
  if (!room) return res.status(404).send("Room not found");

  room.candidate = candidate;
  room.status = "active";

  res.json(room);
});

export default router;