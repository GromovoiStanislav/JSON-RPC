const JSONRPCClient = require('json-rpc-2.0').JSONRPCClient;

const url = 'http://localhost:8080';

const client = new JSONRPCClient((jsonRPCRequest) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(jsonRPCRequest),
  }).then((response) => {
    if (response.status === 200) {
      // Use client.receive when you received a JSON-RPC response.
      return response
        .json()
        .then((jsonRPCResponse) => client.receive(jsonRPCResponse));
    } else if (jsonRPCRequest.id !== undefined) {
      return Promise.reject(new Error(response.statusText));
    }
  })
);

// Use client.request to make a JSON-RPC request call.
// The function returns a promise of the result.
const method = 'MathService.Add';
const params = { A: 3, B: 4 };

client
  .request(method, params)
  .then((result) => console.log('Result:', result))
  .catch((error) => console.error('Error calling remote method:', error));
