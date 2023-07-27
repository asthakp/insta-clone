import express from "express";
import userRouter from "../routes/user.routes";
import postRouter from "../routes/posts.route";

const router = express.Router();

router.use("/users", userRouter);
router.use("/posts", postRouter);

export default router;
