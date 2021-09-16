const express = require('express');
const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults({ noCors: false });
const todoRouter = jsonServer.router({ '': require('./api/todos') });
const userRouter = jsonServer.router({ '': require('./api/users') });

server.use(middlewares);

server.use(express.json());

server.route('/api/todos').delete((req, res, next) => {
  const newDB = todoRouter.db
    .get('')
    .toJSON()
    .filter((t) => !t.isCompleted);
  todoRouter.db.set('', newDB).write();
  res.status(200);
  res.locals.data = {};
  next();
});

server.route('/api/todos').put((req, res, next) => {
  const isCompleted = req.body.todoList[0].isCompleted;
  const newDB = todoRouter.db
    .get('')
    .toJSON()
    .map((t) => ({ ...t, isCompleted }));
  todoRouter.db.set('', newDB).write();
  res.status(200);
  res.locals.data = {};
  next();
});

server.use('/api/todos', todoRouter);

server.use('/api/users', userRouter);

server.route('/api/login').post((req, res, next) => {
  const loginId = req.body.loginId;
  const password = req.body.password;
  const user = userRouter.db
    .get('')
    .toJSON()
    .filter((u) => u.loginId === loginId && u.password === password);
  if (user.length === 1) {
    res.status(200).json(user[0]);
  } else {
    res.status(401).json({});
  }
});

server.listen(4000, () => {
  console.log('JSON Server is running');
});
