// let mongoose = require('mongoose');


// Connect to DBA using mongo db
// mongoose.connect('mongodb://test:test@ds013475.mlab.com:13475/todo');

// Create Schema
// let todoSchema = new mongoose.Schema({
// item: String
// });

// let Todo = mongoose.model('Todo', todoSchema);
import express from 'express';

import Todo from '../model';

export default (app) => {
  app.get('/todo', (req, res) => {
    Todo.findAll().then((todos) => {
      res.render('todo', { todos: todos });
    });
  });


  app.post('/todo', (req, res) => {
    // get data from view and add to pg
      Todo.sync({force: false}).then( () => {
        Todo.create({item: req.body.item}).then((data) => {
          // console.log(data);
          res.json(data);
        })
      })
  });

  app.delete('/todo/:todoItem', (req, res) => {
    // delete reuested item from pg DB
    Todo.destroy({where: { item: req.params.todoItem.replace(/\-/g, ' ') } }).then(data => {
      res.json(data);
    });
  });
};
