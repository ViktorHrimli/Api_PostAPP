import { joinPaths } from "../helpers/paths/join-paths.helpers";

class Controller {
  #apiPath;

  #routers = [];

  get getRouters() {
    return this.#routers;
  }
  constructor({ apiPath }) {
    this.#apiPath = apiPath;
  }

  addRouter = ({ url, ...options }) => {
    return this.#routers.push({
      url: joinPaths([this.#apiPath, url]),
      ...options,
    });
  };
}

export { Controller };
