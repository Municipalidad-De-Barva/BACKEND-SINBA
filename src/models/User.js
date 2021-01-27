// objeto de usuario tendra la informacion del usuario que esta en seccion
const bcrypt = require("bcryptjs");

function User(id, email, password, firtName, lastName) {
  this.id = id;
  this.email = email;
  this.password = password;
  this.firtName = firtName;
  this.lastName = lastName;
}
