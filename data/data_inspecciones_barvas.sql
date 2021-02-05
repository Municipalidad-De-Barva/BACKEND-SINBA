
-- Tabla rol
INSERT INTO `inspecciones_barva`.`rol` (`FK_Codigo`, `Descripcion`) VALUES ('1','Tecnologías de Información');
INSERT INTO `inspecciones_barva`.`rol` (`FK_Codigo`, `Descripcion`) VALUES ('2', 'Secretariado');
INSERT INTO `inspecciones_barva`.`rol` (`FK_Codigo`, `Descripcion`) VALUES ('3', 'Jefe/a de Patentes');
INSERT INTO `inspecciones_barva`.`rol` (`FK_Codigo`, `Descripcion`) VALUES ('4', 'Inspector/a');
INSERT INTO `inspecciones_barva`.`rol` (`FK_Codigo`, `Descripcion`) VALUES ('5', 'Contribuyente');

-- Tabla administrativo
INSERT INTO `inspecciones_barva`.`administrativo` (`PK_ID`, `Nombre`, `Apellido1`, `Apellido2`, `FK_Rol`, `Telefono`, `Correo`, `Clave`) VALUES ('304760577', 'Bryan Jesús', 'Sánchez', 'Brenes', '1', '71464730', 'bryan.jsb.1801@gmail.com', '123456');
INSERT INTO `inspecciones_barva`.`administrativo` (`PK_ID`, `Nombre`, `Apellido1`, `Apellido2`, `FK_Rol`, `Telefono`, `Correo`, `Clave`) VALUES ('111111111', 'Tannya Melisa', 'Hibbert', 'Morales', '1', '85379913', 'tannyahibbert2103@gmail.com', '123456');
INSERT INTO `inspecciones_barva`.`administrativo` (`PK_ID`, `Nombre`, `Apellido1`, `Apellido2`, `FK_Rol`, `Telefono`, `Correo`, `Clave`) VALUES ('222222222', 'Carlos Andrés', 'Naranjo', 'Bonilla', '1', '88888888', 'cnaranjo517@gmail.com', '123456');
INSERT INTO `inspecciones_barva`.`administrativo` (`PK_ID`, `Nombre`, `Apellido1`, `Apellido2`, `FK_Rol`, `Telefono`, `Correo`, `Clave`) VALUES ('444444444', 'Luis Fernando', 'Villegas', 'Campos', '1', '83044339', 'luchoavak@gmail.com', '123456');

-- Tabla Contribuyente