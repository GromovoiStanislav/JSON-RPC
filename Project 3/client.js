const axios = require('axios');

const apiUrl = 'http://localhost:3000/jsonrpc';

const jsonRpcRequest = async (method, params) => {
  try {
    const response = await axios.post(apiUrl, {
      jsonrpc: '2.0',
      method,
      params,
      id: 1, // Уникальный идентификатор запроса
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
};

// Пример использования
jsonRpcRequest('add', [2, 3, 5]);
