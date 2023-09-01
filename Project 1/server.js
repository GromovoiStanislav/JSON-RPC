const rpc = require('json-rpc2');

// Создаем JSON-RPC сервер
const server = rpc.Server.$create();

server.enableAuth('myuser', 'secret123');

server.expose('add', (params, opt, callback) => {
  const result = params.a + params.b;
  callback(null, result);
});

server.expose('subtract', (params, opt, callback) => {
  const result = params.a - params.b;
  callback(null, result);
});

server.expose('error', (params, opt, callback) => {
  const error = {
    code: -32000,
    message: 'Division by zero',
    data: null, // Может содержать дополнительные данные об ошибке
  };
  callback(JSON.stringify(error, null, 2));
});

server.expose('opt', (params, opt, callback) => {
  console.log(opt);
  callback(null, 'OK');
});

// Слушаем на порту 3000
server.listen(3000, 'localhost');
console.log('JSON-RPC сервер запущен на порту 3000');
