const jayson = require('jayson');

const server = jayson.server({
  add: (args, callback) => {
    const result = args.reduce((acc, val) => acc + val, 0);
    callback(null, result);
  },
});

//server.tcp().listen(3000, () => {
server.http().listen(3000, () => {
  console.log('Server is running on port 3000');
});
