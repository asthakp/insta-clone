import express from "express";
import {
  createPost,
  getPost,
  getPersonalPosts,
} from "../controllers/post.controller";
import { upload } from "../middleware/multer.middleware";

const router = express.Router();

router.post("/", upload.single("image"), createPost);
router.get("/", getPost);
router.get("/myposts", getPersonalPosts);

export default router;
