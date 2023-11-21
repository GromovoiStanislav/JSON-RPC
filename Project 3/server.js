const express = require('express');

const app = express();

app.use(express.json());

app.post('/jsonrpc', (req, res) => {
  const { method, params, id } = req.body;

  // Обработка запроса
  if (method === 'add') {
    const result = params.reduce((acc, val) => acc + val, 0);
    res.json({ jsonrpc: '2.0', result, id });
  } else {
    res.json({
      jsonrpc: '2.0',
      error: { code: -32601, message: 'Method not found' },
      id,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
