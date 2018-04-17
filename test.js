const Knex = require('knex');


const knex = connect();

function connect () {
  // [START connect]
  const config = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
    
  };

  if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
    config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
  }

  // Connect to the database
  const knex = Knex({
    client: 'mysql',
    connection: config
  });
  // [END connect]

  return knex;
}


  knex('gmail').insert({user:"Jess", age:24}).then(function() {
    knex('gmail').select().then(function(projectNames){
        //do something here
        console.log(projectNames);
    });
  })
  