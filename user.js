const mysql = require("mysql");
const Promice = require("bluebird");
Promice.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "Project1",
};

// function checkConnection() {
//   const Connection = mysql.createConnection(dbinfo);
//   Connection.connect();

//   console.log("connected to DB!!");
//   Connection.end();
// }

// checkConnection();

const selectMessage = async () => {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();

  let sql = `SELECT * FROM Messages`;
  const list = await Connection.queryAsync(sql);
  console.log(list);

  await Connection.endAsync();
  return list;
};

selectMessage();

const addMessage = async (message) => {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();

  let sql = `INSERT INTO Messages (chat) values (?)`;

  Connection.queryAsync(sql, [message.chat]);

  console.log("Record Added!!");

  await Connection.endAsync();
};

module.exports = { selectMessage, addMessage };
