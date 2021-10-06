import * as express from "express";
import * as http from "http";
import * as jwtConfig from "../config/middleware/jwtAuth";
import * as Swagger from "./Swagger";

import { ProfileRouter, UserRouter, AuthRouter } from "../api";

/**
 * @export
 * @param {express.Application} app
 */
export function init(app: express.Application): void {
  const router: express.Router = express.Router();

  /**
   * @description
   *  Forwards any requests to the /v1/users URI to our UserRouter
   *  Also, check if user authenticated
   * @constructs
   */
  //app.use('/v1/users', jwtConfig.isAuthenticated, UserRouter);

  app.use("/v1/profiles", ProfileRouter);

  /**
   * @description Forwards any requests to the /auth URI to our AuthRouter
   * @constructs
   */
  //app.use('/auth', AuthRouter);

  Swagger.init(app);

  /**
   * @description No results returned mean the object is not found
   * @constructs
   */
  app.use((req, res, next) => {
    res.status(404).send(http.STATUS_CODES[404]);
  });

  /**
   * @constructs all routes
   */
  app.use(router);
}
