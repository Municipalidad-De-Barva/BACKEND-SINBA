import Dao from "./Dao";

export default class DaoRole extends Dao {
  constructor() {
    super();
  }

  listar_Role(callback) {
    var sql = "SELECT * FROM rol";

    this.connection.query(sql, function (err, results) {
      if (err) {
        throw err;
      }
      console.log(results);
      return callback(results);
    });
  }
}
