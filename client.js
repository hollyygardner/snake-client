const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Sucessfully connected to game server")
    conn.write("Name: HEG")
    /* conn.write('Move: up');
    setTimeout(() => {
      conn.write("Move: up")
    }, 50) */
  });

  conn.on("data", (data) => {
    console.log(data);
  });
  conn.on("end", () => {
    console.log("Connection terminated.")
  });

  return conn;
};

module.exports = { connect };