import { PostController } from "./post.controller";
import { ApiPath } from "../../../../libs/enums/api-path.enum";

const postController = new PostController({
  apiPath: ApiPath.POSTS,
  postService: {},
});

export { postController };
