import { NextFunction, Request, Response } from "express";

import { Post } from "../../../db/models";

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, location, url, comment, likes } = req.body;

    const newPost = await Post.create({
      title,
      location,
      url,
      comment,
      likes,
    });

    res.status(201).json(newPost);
  } catch (error) {}
};

export { createPost };
