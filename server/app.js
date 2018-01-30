import express from 'express';
import bodyParser from 'body-parser';
import todoController from './controller/todoController';

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

//Se templating engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//call controller function
todoController(app);


//liste to port
app.listen(3000, ()=>{console.log('Application started on port 3000');});