const jayson = require('jayson');

// Создаем клиента JSON-RPC
const client = jayson.client.http({
  port: 3000,
  // path: '/jsonrpc',
});

// Вызов метода "add" на сервере
client.request('add', [2, 3, 5], (err, response) => {
  if (err) throw err;
  console.log('Response:', response.result);
});
