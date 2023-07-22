import { NextFunction, Request, Response } from "express";
import { Controller } from "../../../libs/packages/controller/controller.api";

import { PostsApiPath, apiMethod } from "./libs/enums/enums";

const { Post } = require("../../../db/models");

class PostController extends Controller {
  constructor() {
    super();

    this.addRouter(
      { method: apiMethod.GET, path: PostsApiPath.POSTS },
      this.createPost
    );
  }

  createPost = async (req: Request, res: Response, next: NextFunction) => {
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
}

export { PostController };
