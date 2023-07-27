import { Request, Response } from "express";
import Post from "../model/post.model";
import cloudinary from "../config/cloudinary.config";

export const createPost = async (req: any, res: Response) => {
  try {
    const { title, body } = req.body;
    if (!title || !body) {
      return res.status(401).json({
        status: false,
        error: "please enter all fields",
      });
    } else {
      let result;
      if (
        req.file.mimetype === "image/jpeg" ||
        req.file.mimetype === "image/jpg" ||
        req.file.mimetype === "image/png"
      ) {
        result = await cloudinary.v2.uploader.upload(req.file.path);
      } else {
        result = await cloudinary.v2.uploader.upload(req.file.path, {
          resource_type: "video",
          folder: "videos",
        });
      }

      const newPost = new Post({
        title,
        body,
        image: result.secure_url,
        postedBy: req.user._id,
      });

      await newPost.save();
      res.status(201).json({
        status: true,
        message: "Post created successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (req: any, res: Response) => {
  try {
    const posts = await Post.find({}).populate("postedBy", "_id name");
    res.status(200).json({
      status: true,
      data: posts,
      message: "post fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error,
    });
  }
};

export const getPersonalPosts = async (req: any, res: Response) => {
  try {
    const userPosts = await Post.find({ postedBy: req.user._id }).populate(
      "postedBy",
      "_id name"
    );
    res.status(200).json({
      status: true,
      data: userPosts,
      message: "post fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error,
    });
  }
};
