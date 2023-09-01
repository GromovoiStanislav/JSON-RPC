const rpc = require('json-rpc2');

// Создаем JSON-RPC клиента для подключения к серверу на порту 3000
const client = rpc.Client.$create(3000, 'localhost', 'myuser', 'secret123');

// Отправляем JSON-RPC запросы на сервер

// Запрос для сложения
client.call('add', { a: 5, b: 3 }, (err, result) => {
  if (err) throw err;
  console.log('Результат сложения:', result);
});

// Запрос для вычитания
client.call('subtract', { a: 10, b: 4 }, (err, result) => {
  if (err) throw err;
  console.log('Результат вычитания:', result);
});

// Запрос для error
client.call('error', { a: 10, b: 4 }, (err, result) => {
  if (err) {
    console.log(err);
    /*
    {
        code: -32603,
        message: '{\n  "code": -32000,\n  "message": "Division by zero",\n  "data": null\n}'
    }
    */
    console.log(JSON.parse(err.message)); //{ code: -32000, message: 'Division by zero', data: null }
    return;
  }
  console.log('Результат вычитания:', result);
});

// передача  опций
client.call('opt', { a: 10, b: 4 }, (err, result) => {
  if (err) throw err;
  console.log('Результат вычитания:', result);
});
