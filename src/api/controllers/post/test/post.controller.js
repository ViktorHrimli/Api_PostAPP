import {
  Controller,
  ControllerHooks,
} from "../../../../libs/controller/controller";
import { HttpMethod } from "../../../../libs/packages/http/http";

import { PostsApiPath } from "../libs/enums/post-api-path.enum";

class PostController extends Controller {
  #postService;

  constructor({ apiPath, postService }) {
    super({ apiPath });
    this.#postService = postService;

    this.addRouter({
      method: HttpMethod.GET,
      url: PostsApiPath.ROOT,
      [ControllerHooks.HANDLER]: this.getPosts,
    });
  }

  getPosts = (req, res, next) => {
    req.status(200).json({ msg: "Hello" });
  };
}

export { PostController };
