import * as http from "http";
import * as serverHandlers from "./config/server/serverHandlers";
import app from "./config/server/server";
import MongoDB from "./config/connection/database";
import Logger from "./config/lib/logger";

const main = async () => {
  // MONGO DB

  await MongoDB.connectDB();

  const Server: http.Server = http.createServer(app);

  /**
   * Binds and listens for connections on the specified host
   */
  Server.listen(app.get("port"), () =>
    Logger.info(`💻 Conectado a: http://localhost:${app.get("port")}`)
  );

  /**
   * Server Events
   */
/*   Server.on("error", (error: Error) =>
    serverHandlers.onError(error, server.get("port"))
  );
  Server.on("listening", serverHandlers.onListening.bind(Server)); */
};

main();
