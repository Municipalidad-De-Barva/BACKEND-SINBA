// objeto de usuario tendra la informacion del usuario que esta en seccion
import bcrypt from "bcryptjs";
export default class User {
  constructor(id, password) {
    this.id = id;
    this.email = "";
    this.password = password;
    this.firtName = "";
    this.lastName = "";
  }

  comparePassword(password1, password2) {
    return password1 == password2;
  }
}
