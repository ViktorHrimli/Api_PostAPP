import { NextFunction, Request, Response } from "express";

const { Post } = require("../../../db/models");

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, location, url } = req.body;

    const newPost = await Post.create({
      title,
      location,
      url,
    });

    res.status(201).json(newPost);
  } catch (error) {}
};

export { createPost };
