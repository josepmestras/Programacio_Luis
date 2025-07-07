// server.mjs
import { createServer } from "node:http";
import { Http2ServerRequest, Http2ServerResponse } from "node:http2";

if (process.argv.length < 3) {
  console.error("Falta número de puerto");
  process.exit(1);
}
let puerto = parseInt(process.argv[2], 10);

function procesarClientes(req, res) {
  res.end("Procesando clientes...\n");
}

/**
 *
 * @param {Http2ServerRequest} req
 * @param {Http2ServerResponse} res
 */
function executeRequest(req, res) {
  if (req.url.startsWith("/clientes")) {
    return procesarClientes(req, res);
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Url: " + req.url);
  res.write("\n\nRequest headers:\n");
  for (let k of Object.keys(req.headers))
    res.write(`    ${k}: ${req.headers[k]}\n\n`);
  res.write(JSON.stringify(req.headers, null, 2));
  res.end("\nThank you\n");
}

const server = createServer(executeRequest);

// const server = createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World!\n");
// });

// starts a simple http server locally on port 3000
server.listen(puerto, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:" + puerto);
});

// run with `node server.mjs [port]`
