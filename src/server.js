import http from "node:http"
import { jsonHandler } from "./middlewares/jsonHandler.js";

async function listerner(req, res) {
  await jsonHandler(req, res);
  console.log(request.body);
}

http.createServer(listerner).listen(3333);