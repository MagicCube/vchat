import http from "http";

import app from "./lib/http";
import io from "./lib/ws";

const server = http.createServer(app);
io.attach(server);
server.listen(process.env.PORT || 8080);
