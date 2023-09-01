const rpc = require('json-rpc2');

// Создаем JSON-RPC клиента для подключения к серверу на порту 3000
const client = rpc.Client.$create(3000, 'localhost');
console.log('Connected to server');
console.log('[x] To exit type "exit" or press CTRL+C');
console.log('Type a message...');

// Отправляем JSON-RPC запросы на сервер
process.stdin.on('data', (chunk) => {
  const str = chunk.toString().trim();
  if (str === 'exit') {
    process.exit(0);
  }

  client.call('message', { message: str });
});
