const rpc = require('json-rpc2');

// Создаем JSON-RPC сервер
const server = rpc.Server.$create();

server.expose('message', (params, opt, callback) => {
  console.log(params);
  callback(null, null);
});

// Слушаем на порту 3000
server.listen(3000, 'localhost');
console.log('JSON-RPC сервер запущен на порту 3000');
console.log('[x] To exit press CTRL+C');
console.log('Waiting for messages...');
