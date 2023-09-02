const axios = require('axios');
const { randomUUID } = require('node:crypto');

// Отправляем HTTP-запросы на JSON-RPC сервер

{
  const jsonRpcRequest = {
    jsonrpc: '2.0',
    method: 'add',
    params: { a: 5, b: 3 }, // Параметры передаются как объект, так как в методе 'add' ожидается один объект.
    id: randomUUID(),
  };

  axios
    .post('http://localhost:3000', jsonRpcRequest)
    .then((response) => {
      // Обработка ответа
      const jsonRpcResponse = response.data;
      if (jsonRpcResponse.error) {
        console.error('Ошибка JSON-RPC:', jsonRpcResponse.error);
      } else {
        console.log('Результат сложения:', jsonRpcResponse.result); //Результат сложения: 8
        console.log(jsonRpcResponse); // { jsonrpc: '2.0', result: 8, id: 'be0eb214-0224-41eb-aaff-3009e5947a68' }
      }
    })
    .catch((error) => {
      console.error('Ошибка при отправке запроса:', error);
    });
}

{
  const jsonRpcRequest = {
    jsonrpc: '2.0',
    method: 'subtract',
    params: { a: 5, b: 3 }, // Параметры передаются как объект, так как в методе 'add' ожидается один объект.
    id: randomUUID(),
  };

  axios
    .post('http://localhost:3000', jsonRpcRequest)
    .then((response) => {
      // Обработка ответа
      const jsonRpcResponse = response.data;
      if (jsonRpcResponse.error) {
        console.error('Ошибка JSON-RPC:', jsonRpcResponse.error);
      } else {
        console.log('Результат вычитания:', jsonRpcResponse.result); //Результат вычитания: 2
        console.log(jsonRpcResponse); // { jsonrpc: '2.0', result: 2, id: '1252535b-f237-4993-8d18-78b54f8df0ee' }
      }
    })
    .catch((error) => {
      console.error('Ошибка при отправке запроса:', error);
    });
}
