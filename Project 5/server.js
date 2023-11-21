const express = require('express');
const { JSONRPCServer } = require('json-rpc-2.0');

const server = new JSONRPCServer();

// Add your methods here
server.addMethod('MathService.Add', ({ A, B }) => A + B);

const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  const jsonRPCRequest = req.body;
  // server.receive takes a JSON-RPC request and returns a promise of a JSON-RPC response.
  // It can also receive an array of requests, in which case it may return an array of responses.
  // Alternatively, you can use server.receiveJSON, which takes JSON string as is (in this case req.body).
  server.receive(jsonRPCRequest).then((jsonRPCResponse) => {
    if (jsonRPCResponse) {
      res.json(jsonRPCResponse);
    } else {
      // If response is absent, it was a JSON-RPC notification method.
      // Respond with no content status (204).
      res.sendStatus(204);
    }
  });
});

const port = 8080;

app.listen(port, () => {
  console.log(`JSON-RPC Server listening on port ${port}`);
});
