-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema inspecciones_barva
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema inspecciones_barva
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `inspecciones_barva` DEFAULT CHARACTER SET ujis ;
USE `inspecciones_barva` ;

-- -----------------------------------------------------
-- Table `inspecciones_barva`.`actividad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inspecciones_barva`.`actividad` (
  `PK_Codigo` INT(11) NOT NULL,
  `Descripcion` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`PK_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = ujis;


-- -----------------------------------------------------
-- Table `inspecciones_barva`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inspecciones_barva`.`rol` (
  `FK_Codigo` INT(11) NOT NULL,
  `Descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`FK_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = ujis;


-- -----------------------------------------------------
-- Table `inspecciones_barva`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inspecciones_barva`.`usuario` (
  `PK_ID` VARCHAR(45) NOT NULL,
  `Tipo` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`PK_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = ujis;


-- -----------------------------------------------------
-- Table `inspecciones_barva`.`administrativo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inspecciones_barva`.`administrativo` (
  `PK_ID` VARCHAR(45) NOT NULL,
  `Nombre` VARCHAR(45) NULL DEFAULT NULL,
  `Apellido1` VARCHAR(45) NULL DEFAULT NULL,
  `Apellido2` VARCHAR(45) NULL DEFAULT NULL,
  `FK_Rol` INT(11) NOT NULL,
  `Telefono` INT(11) NULL DEFAULT NULL,
  `Correo` VARCHAR(45) NULL DEFAULT NULL,
  `Clave` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`PK_ID`),
  INDEX `fk_Administrativo_Usuario1_idx` (`PK_ID` ASC) VISIBLE,
  INDEX `fk_Administrativo_Rol1_idx` (`FK_Rol` ASC) VISIBLE,
  CONSTRAINT `fk_Administrativo_Rol1`
    FOREIGN KEY (`FK_Rol`)
    REFERENCES `inspecciones_barva`.`rol` (`FK_Codigo`),
  CONSTRAINT `fk_Administrativo_Usuario1`
    FOREIGN KEY (`PK_ID`)
    REFERENCES `inspecciones_barva`.`usuario` (`PK_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = ujis;


-- -----------------------------------------------------
-- Table `inspecciones_barva`.`comercial`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inspecciones_barva`.`comercial` (
  `FK_Actividad` INT(11) NOT NULL,
  `Nombre_Local` VARCHAR(45) NULL DEFAULT NULL,
  `Patente` TINYINT(4) NULL DEFAULT NULL,
  INDEX `fk_Comercial_Actividad2_idx` (`FK_Actividad` ASC) VISIBLE,
  CONSTRAINT `fk_Comercial_Actividad2`
    FOREIGN KEY (`FK_Actividad`)
    REFERENCES `inspecciones_barva`.`actividad` (`PK_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = ujis;


-- -----------------------------------------------------
-- Table `inspecciones_barva`.`contribuyente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inspecciones_barva`.`contribuyente` (
  `PK_ID` VARCHAR(45) NOT NULL,
  `Nombre` VARCHAR(45) NULL DEFAULT NULL,
  `Telefono` INT(11) NULL DEFAULT NULL,
  `Numero_Finca` VARCHAR(45) NULL DEFAULT NULL,
  `Direccion` VARCHAR(45) NULL DEFAULT NULL,
  `Fax` VARCHAR(45) NULL DEFAULT NULL,
  `Correo` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`PK_ID`),
  INDEX `fk_Contribuyente_Usuario1_idx` (`PK_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Contribuyente_Usuario1`
    FOREIGN KEY (`PK_ID`)
    REFERENCES `inspecciones_barva`.`usuario` (`PK_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = ujis;


-- -----------------------------------------------------
-- Table `inspecciones_barva`.`expectaculo_publico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inspecciones_barva`.`expectaculo_publico` (
  `FK_Actividad` INT(11) NOT NULL,
  `Patente` TINYINT(4) NOT NULL,
  `Días` VARCHAR(45) NULL DEFAULT NULL,
  `Horario` VARCHAR(45) NULL DEFAULT NULL,
  `Cumple_Regulacion_Horaria` TINYINT(4) NULL DEFAULT NULL,
  INDEX `fk_Comercial_Actividad1_idx` (`FK_Actividad` ASC) VISIBLE,
  CONSTRAINT `fk_Comercial_Actividad1`
    FOREIGN KEY (`FK_Actividad`)
    REFERENCES `inspecciones_barva`.`actividad` (`PK_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = ujis;


-- -----------------------------------------------------
-- Table `inspecciones_barva`.`solicitud_patente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inspecciones_barva`.`solicitud_patente` (
  `PK_Codigo` INT(11) NOT NULL AUTO_INCREMENT,
  `FK_ID_Contribuyente` VARCHAR(45) NOT NULL,
  `Nombre_Representante_Legal_Contribuyente` VARCHAR(45) NULL DEFAULT NULL,
  `Cedula_Representante_Legal_Contribuyente` VARCHAR(45) NULL DEFAULT NULL,
  `Nombre_Propetario` VARCHAR(45) NULL DEFAULT NULL,
  `Cedula_Propetario` VARCHAR(45) NULL DEFAULT NULL,
  `Nombre_Representante_Legal_Propietario` VARCHAR(45) NULL DEFAULT NULL,
  `Direccion_Propietario` VARCHAR(45) NULL DEFAULT NULL,
  `Nombre_Comercial_Negocio` VARCHAR(45) NULL DEFAULT NULL,
  `Actividad` VARCHAR(45) NULL DEFAULT NULL,
  `Nombre_Persona_Autorizada` VARCHAR(45) NULL DEFAULT NULL,
  `ID_Persona_Autorizada` VARCHAR(45) NULL DEFAULT NULL,
  `Declaracion_Jurada` VARCHAR(45) NULL DEFAULT NULL,
  `Fecha` DATETIME(3) NULL DEFAULT NULL,
  PRIMARY KEY (`PK_Codigo`),
  INDEX `fk_Solicitud_Patente_Contribuyente1_idx` (`FK_ID_Contribuyente` ASC) VISIBLE,
  CONSTRAINT `fk_Solicitud_Patente_Contribuyente1`
    FOREIGN KEY (`FK_ID_Contribuyente`)
    REFERENCES `inspecciones_barva`.`contribuyente` (`PK_ID`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = ujis;


-- -----------------------------------------------------
-- Table `inspecciones_barva`.`inspeccion_patente_nueva`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inspecciones_barva`.`inspeccion_patente_nueva` (
  `PK_Codigo_Inspeccion` INT(11) NOT NULL AUTO_INCREMENT,
  `FK_Inspector_Administrativo` VARCHAR(45) NOT NULL,
  `FK_Solicitud_Patente` INT(11) NOT NULL,
  `Descripcion` VARCHAR(45) NULL DEFAULT NULL,
  `Fecha` DATETIME(3) NULL DEFAULT NULL,
  `Local` VARCHAR(45) NULL DEFAULT NULL,
  `Direccion` VARCHAR(45) NULL DEFAULT NULL,
  `Requisito_Local_Acorde_Actividadl` TINYINT(4) NULL DEFAULT NULL,
  `Planta_Fisica` TINYINT(4) NULL DEFAULT NULL,
  `Senalizacion` TINYINT(4) NULL DEFAULT NULL,
  `Luces_Emergencias` TINYINT(4) NULL DEFAULT NULL,
  `Extintor` TINYINT(4) NULL DEFAULT NULL,
  `Salida_Emergencia` TINYINT(4) NULL DEFAULT NULL,
  PRIMARY KEY (`PK_Codigo_Inspeccion`),
  INDEX `fk_Inspeccion_Patente_Administrativo1_idx` (`FK_Inspector_Administrativo` ASC) VISIBLE,
  INDEX `fk_Inspeccion_Patente_Nueva_Solicitud_Patente1_idx` (`FK_Solicitud_Patente` ASC) VISIBLE,
  CONSTRAINT `fk_Inspeccion_Patente_Administrativo1`
    FOREIGN KEY (`FK_Inspector_Administrativo`)
    REFERENCES `inspecciones_barva`.`administrativo` (`PK_ID`),
  CONSTRAINT `fk_Inspeccion_Patente_Nueva_Solicitud_Patente1`
    FOREIGN KEY (`FK_Solicitud_Patente`)
    REFERENCES `inspecciones_barva`.`solicitud_patente` (`PK_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = ujis;


-- -----------------------------------------------------
-- Table `inspecciones_barva`.`testigo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inspecciones_barva`.`testigo` (
  `PK_ID` INT(11) NOT NULL,
  `Nombre` VARCHAR(45) NULL DEFAULT NULL,
  `Apellido1` VARCHAR(45) NULL DEFAULT NULL,
  `Apellido2` VARCHAR(45) NULL DEFAULT NULL,
  `Telefono` VARCHAR(45) NULL DEFAULT NULL,
  `Correo` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`PK_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = ujis;


-- -----------------------------------------------------
-- Table `inspecciones_barva`.`inspeccion_ocular`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inspecciones_barva`.`inspeccion_ocular` (
  `PK_Codigo_Inspeccion` INT(11) NOT NULL AUTO_INCREMENT,
  `FK_Inspeccion_Patente_Nueva` INT(11) NOT NULL,
  `Fecha` DATETIME NOT NULL,
  `Diligencia` VARCHAR(45) NULL DEFAULT NULL,
  `Ordenada` VARCHAR(45) NULL DEFAULT NULL,
  `Resultado` VARCHAR(45) NULL DEFAULT NULL,
  `FK_Testigo1` INT(11) NOT NULL,
  `FK_Testigo2` INT(11) NOT NULL,
  PRIMARY KEY (`PK_Codigo_Inspeccion`),
  INDEX `fk_Inspeccion_Ocular_Inspeccion_Patente_Nueva1_idx` (`FK_Inspeccion_Patente_Nueva` ASC) VISIBLE,
  INDEX `fk_Inspeccion_Ocular_Testigo1_idx` (`FK_Testigo1` ASC) VISIBLE,
  INDEX `fk_Inspeccion_Ocular_Testigo2_idx` (`FK_Testigo2` ASC) VISIBLE,
  CONSTRAINT `fk_Inspeccion_Ocular_Inspeccion_Patente_Nueva1`
    FOREIGN KEY (`FK_Inspeccion_Patente_Nueva`)
    REFERENCES `inspecciones_barva`.`inspeccion_patente_nueva` (`PK_Codigo_Inspeccion`),
  CONSTRAINT `fk_Inspeccion_Ocular_Testigo1`
    FOREIGN KEY (`FK_Testigo1`)
    REFERENCES `inspecciones_barva`.`testigo` (`PK_ID`),
  CONSTRAINT `fk_Inspeccion_Ocular_Testigo2`
    FOREIGN KEY (`FK_Testigo2`)
    REFERENCES `inspecciones_barva`.`testigo` (`PK_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = ujis;


-- -----------------------------------------------------
-- Table `inspecciones_barva`.`notificacion_inspeccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inspecciones_barva`.`notificacion_inspeccion` (
  `PK_Codigo` INT(11) NOT NULL AUTO_INCREMENT,
  `FK_Inspeccion_Ocular` INT(11) NOT NULL,
  `Resultado` VARCHAR(45) NULL DEFAULT NULL,
  `FK_Actividad` INT(11) NOT NULL,
  `Fecha` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`PK_Codigo`),
  INDEX `fk_Notificacion_Inspeccion_Inspeccion_Ocular1_idx` (`FK_Inspeccion_Ocular` ASC) VISIBLE,
  INDEX `fk_Notificacion_Inspeccion_Actividad1_idx` (`FK_Actividad` ASC) VISIBLE,
  CONSTRAINT `fk_Notificacion_Inspeccion_Actividad1`
    FOREIGN KEY (`FK_Actividad`)
    REFERENCES `inspecciones_barva`.`actividad` (`PK_Codigo`),
  CONSTRAINT `fk_Notificacion_Inspeccion_Inspeccion_Ocular1`
    FOREIGN KEY (`FK_Inspeccion_Ocular`)
    REFERENCES `inspecciones_barva`.`inspeccion_ocular` (`PK_Codigo_Inspeccion`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = ujis;


-- -----------------------------------------------------
-- Table `inspecciones_barva`.`patente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inspecciones_barva`.`patente` (
  `FK_Codigo` INT(11) NOT NULL AUTO_INCREMENT,
  `FK_Contribuyente` VARCHAR(45) NOT NULL,
  `FK_Actividad` INT(11) NOT NULL,
  `Descripcion` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`FK_Codigo`),
  INDEX `fk_Patente_Contribuyente1_idx` (`FK_Contribuyente` ASC) VISIBLE,
  INDEX `fk_Patente_Actividad1_idx` (`FK_Actividad` ASC) VISIBLE,
  CONSTRAINT `fk_Patente_Actividad1`
    FOREIGN KEY (`FK_Actividad`)
    REFERENCES `inspecciones_barva`.`actividad` (`PK_Codigo`),
  CONSTRAINT `fk_Patente_Contribuyente1`
    FOREIGN KEY (`FK_Contribuyente`)
    REFERENCES `inspecciones_barva`.`contribuyente` (`PK_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = ujis;


-- -----------------------------------------------------
-- Table `inspecciones_barva`.`venta_licor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `inspecciones_barva`.`venta_licor` (
  `FK_Actividad` INT(11) NOT NULL,
  `Nombre_Local` VARCHAR(45) NULL DEFAULT NULL,
  `Patente` VARCHAR(45) NULL DEFAULT NULL,
  `Numero_Patente_Licor` VARCHAR(45) NULL DEFAULT NULL,
  `Patente_Licor` VARCHAR(45) NULL DEFAULT NULL,
  INDEX `fk_Comercial_Actividad2_idx` (`FK_Actividad` ASC) VISIBLE,
  CONSTRAINT `fk_Comercial_Actividad20`
    FOREIGN KEY (`FK_Actividad`)
    REFERENCES `inspecciones_barva`.`actividad` (`PK_Codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = ujis;

-- Insert rol
INSERT INTO `inspecciones_barva`.`rol` (`FK_Codigo`, `Descripcion`) VALUES ('1','Tecnologia de Información');
INSERT INTO `inspecciones_barva`.`rol` (`FK_Codigo`, `Descripcion`) VALUES ('2', 'Secretariado');
INSERT INTO `inspecciones_barva`.`rol` (`FK_Codigo`, `Descripcion`) VALUES ('3', 'Jefe de Patentes');
INSERT INTO `inspecciones_barva`.`rol` (`FK_Codigo`, `Descripcion`) VALUES ('4', 'Inspector');

-- Insert administrativo
INSERT INTO `inspecciones_barva`.`administrativo` (`PK_ID`, `Nombre`, `Apellido1`, `Apellido2`, `FK_Rol`, `Telefono`, `Correo`, `Clave`) VALUES ('304760577', 'Bryan Jesús', 'Sánchez', 'Brenes', '1', '71464730', 'bryan.jsb.1801@gmail.com', '123456');
INSERT INTO `inspecciones_barva`.`administrativo` (`PK_ID`, `Nombre`, `Apellido1`, `Apellido2`, `FK_Rol`, `Telefono`, `Correo`, `Clave`) VALUES ('111111111', 'Tannya Melisa', 'Hibbert', 'Morales', '1', '85379913', 'tannyahibbert2103@gmail.com', '123456');
INSERT INTO `inspecciones_barva`.`administrativo` (`PK_ID`, `Nombre`, `Apellido1`, `Apellido2`, `FK_Rol`, `Telefono`, `Correo`, `Clave`) VALUES ('222222222', 'Carlos Andrés', 'Naranjo', 'Bonilla', '1', '88888888', 'cnaranjo517@gmail.com', '123456');
INSERT INTO `inspecciones_barva`.`administrativo` (`PK_ID`, `Nombre`, `Apellido1`, `Apellido2`, `FK_Rol`, `Telefono`, `Correo`, `Clave`) VALUES ('444444444', 'Luis Fernando', 'Villegas', 'Campos', '1', '83044339', 'luchoavak@gmail.com', '123456');

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;