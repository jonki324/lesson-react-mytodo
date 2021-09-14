const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults({ noCors: false });

server.use(middlewares);
server.use(
  '/api/todos',
  jsonServer.router({
    '': require('./api/todos'),
  })
);

server.listen(4000, () => {
  console.log('JSON Server is running');
});
