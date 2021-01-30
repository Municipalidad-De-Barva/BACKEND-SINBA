// objeto de usuario tendra la informacion del usuario que esta en seccion
import bcrypt from "bcryptjs";
class User {
  constructor(id, password) {
    this.id = id;
    this.email = "";
    this.password = password;
    this.firtName = "";
    this.lastName = "";
  }
}
