const sql = require("../config/db");

const findAll = () => {
  return new Promise((resolve, reject) => {
    sql.query("SELECT * FROM entrenador", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const createTrainer = (body) => {
  const { nombre, id_pokemon } = body;
  // String Template
  let query = `insert into entrenador (nombre, id_pokemon) values ( '${nombre}' , ${id_pokemon} );`;
  return new Promise((resolve, reject) => {
    sql.query(query, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const findById = (params) => {
  const {id} = params;
  return new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM entrenador WHERE codigo = ${id} `, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};



module.exports = { findAll, createTrainer, findById};
