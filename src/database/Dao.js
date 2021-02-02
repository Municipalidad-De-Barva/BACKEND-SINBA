import dbConnection from "../config/dbConnection";

export default class Dao {
  constructor() {
    this.connection = dbConnection();
  }
}
