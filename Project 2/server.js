const rpc = require('json-rpc2');

// Создаем JSON-RPC сервер
const server = rpc.Server.$create();



server.expose('add', (params, opt, callback) => {
  const result = params.a + params.b;
  callback(null, result);
});

server.expose('subtract', (params, opt, callback) => {
  const result = params.a - params.b;
  callback(null, result);
});



// Слушаем на порту 3000
server.listen(3000, 'localhost');
console.log('JSON-RPC сервер запущен на порту 3000');
