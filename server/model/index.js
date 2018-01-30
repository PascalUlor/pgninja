import Sequelize from 'sequelize';

// connection to db
const sequelize = new Sequelize('tododb', 'ninja', 'ulor', {
  host: 'localhost', 
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// model definition
let Todo = sequelize.define('todo', {
  item: {
    type: Sequelize.STRING,
    // allowNull: false
  }
});

// sync and create tables
// sequelize.sync();

// Test connection
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });

Todo.sequelize = sequelize;
Todo.Sequelize = Sequelize;

export default Todo;
