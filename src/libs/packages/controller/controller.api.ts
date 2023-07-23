import { Router, RouterOptions } from "express";
import { apiMethod, apiPath } from "../../enums/enums";

class Controller {
  #router: RouterOptions | any = Router();
  #arr: any = [];

  get routers() {
    return this.#arr;
  }

  addRouter = ({ method = apiMethod.GET, path = apiPath.ROOT }, cntrl: any) => {
    this.#arr.push(this.#router[method](path, cntrl));
  };
}

export { Controller };
