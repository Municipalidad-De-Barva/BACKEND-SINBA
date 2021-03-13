-- MySQL dump 10.13  Distrib 8.0.23, for Linux (x86_64)
--
-- Host: mysql-server-sinba.mysql.database.azure.com    Database: inspecciones_barva
-- ------------------------------------------------------
-- Server version	5.6.47.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actividad`
--

DROP TABLE IF EXISTS `actividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actividad` (
  `PK_Codigo` int(11) NOT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`PK_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=ujis;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actividad`
--

LOCK TABLES `actividad` WRITE;
/*!40000 ALTER TABLE `actividad` DISABLE KEYS */;
/*!40000 ALTER TABLE `actividad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `administrativo`
--

DROP TABLE IF EXISTS `administrativo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrativo` (
  `PK_ID` varchar(45) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `FK_Rol` int(11) NOT NULL,
  `Correo` varchar(45) DEFAULT NULL,
  `Clave` varchar(100) DEFAULT NULL,
  `Tipo_Identificacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`PK_ID`),
  KEY `fk_Administrativo_Usuario1_idx` (`PK_ID`),
  KEY `fk_Administrativo_Rol1_idx` (`FK_Rol`),
  KEY `fk_Tipo_Identificacion` (`Tipo_Identificacion`),
  CONSTRAINT `fk_Administrativo_Rol1` FOREIGN KEY (`FK_Rol`) REFERENCES `rol` (`FK_Codigo`),
  CONSTRAINT `fk_Administrativo_Usuario1` FOREIGN KEY (`PK_ID`) REFERENCES `usuario` (`PK_ID`),
  CONSTRAINT `fk_Tipo_Identificacion` FOREIGN KEY (`Tipo_Identificacion`) REFERENCES `tipo identificacion` (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=ujis;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrativo`
--

LOCK TABLES `administrativo` WRITE;
/*!40000 ALTER TABLE `administrativo` DISABLE KEYS */;
INSERT INTO `administrativo` VALUES ('111111111','Tannya Melisa Hibbert Morales',2,'tannyahibbert2103@gmail.com','Xy!2020',1),('222222222','Carlos Andrés Naranjo Bonilla',2,'cnaranjo517@gmail.com','Xy!2020',1),('304760577','Bryan Jesús Sánchez Brenes',2,'bryan.jsb.1801@gmail.com','Xy!2020',1),('401730306','Yorleny Diaz Zarate',1,'yorleny.diaz@munibarva.go.cr','Xy!2020',1),('444444444','Luis Fernando Villegas Campos',2,'luchoavak@gmail.com','Xy!2020',1);
/*!40000 ALTER TABLE `administrativo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comercial`
--

DROP TABLE IF EXISTS `comercial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comercial` (
  `FK_Actividad` int(11) NOT NULL,
  `Nombre_Local` varchar(45) DEFAULT NULL,
  `Patente` tinyint(4) DEFAULT NULL,
  KEY `fk_Comercial_Actividad2_idx` (`FK_Actividad`),
  CONSTRAINT `fk_Comercial_Actividad2` FOREIGN KEY (`FK_Actividad`) REFERENCES `actividad` (`PK_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=ujis;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comercial`
--

LOCK TABLES `comercial` WRITE;
/*!40000 ALTER TABLE `comercial` DISABLE KEYS */;
/*!40000 ALTER TABLE `comercial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contribuyente`
--

DROP TABLE IF EXISTS `contribuyente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contribuyente` (
  `PK_ID` varchar(45) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Telefono` int(11) DEFAULT NULL,
  `Numero_Finca` varchar(45) DEFAULT NULL,
  `Direccion` varchar(100) DEFAULT NULL,
  `Fax` varchar(45) DEFAULT NULL,
  `Correo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`PK_ID`),
  KEY `fk_Contribuyente_Usuario1_idx` (`PK_ID`),
  CONSTRAINT `fk_Contribuyente_Usuario1` FOREIGN KEY (`PK_ID`) REFERENCES `usuario` (`PK_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=ujis;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contribuyente`
--

LOCK TABLES `contribuyente` WRITE;
/*!40000 ALTER TABLE `contribuyente` DISABLE KEYS */;
INSERT INTO `contribuyente` VALUES ('108230500','Sonia Rojas Lobo',85034605,NULL,'Costado Norte del Edificio de Servicios Publicos',NULL,'SonnyRojas72@gmail.com'),('304760577','bryan sanchez brenes',71464739,NULL,'cartago costa rica','71464739','bryan.jsb.1801@gmail.com');
/*!40000 ALTER TABLE `contribuyente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expectaculo_publico`
--

DROP TABLE IF EXISTS `expectaculo_publico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expectaculo_publico` (
  `FK_Actividad` int(11) NOT NULL,
  `Patente` tinyint(4) NOT NULL,
  `Días` varchar(45) DEFAULT NULL,
  `Horario` varchar(45) DEFAULT NULL,
  `Cumple_Regulacion_Horaria` tinyint(4) DEFAULT NULL,
  KEY `fk_Comercial_Actividad1_idx` (`FK_Actividad`),
  CONSTRAINT `fk_Comercial_Actividad1` FOREIGN KEY (`FK_Actividad`) REFERENCES `actividad` (`PK_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=ujis;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expectaculo_publico`
--

LOCK TABLES `expectaculo_publico` WRITE;
/*!40000 ALTER TABLE `expectaculo_publico` DISABLE KEYS */;
/*!40000 ALTER TABLE `expectaculo_publico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inspeccion_ocular`
--

DROP TABLE IF EXISTS `inspeccion_ocular`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inspeccion_ocular` (
  `PK_Codigo_Inspeccion` int(11) NOT NULL AUTO_INCREMENT,
  `FK_Inspeccion_Patente_Nueva` int(11) NOT NULL,
  `Fecha` datetime NOT NULL,
  `Diligencia` varchar(45) DEFAULT NULL,
  `Ordenada` varchar(45) DEFAULT NULL,
  `Resultado` varchar(45) DEFAULT NULL,
  `FK_Testigo1` int(11) NOT NULL,
  `FK_Testigo2` int(11) NOT NULL,
  PRIMARY KEY (`PK_Codigo_Inspeccion`),
  KEY `fk_Inspeccion_Ocular_Inspeccion_Patente_Nueva1_idx` (`FK_Inspeccion_Patente_Nueva`),
  KEY `fk_Inspeccion_Ocular_Testigo1_idx` (`FK_Testigo1`),
  KEY `fk_Inspeccion_Ocular_Testigo2_idx` (`FK_Testigo2`),
  CONSTRAINT `fk_Inspeccion_Ocular_Inspeccion_Patente_Nueva1` FOREIGN KEY (`FK_Inspeccion_Patente_Nueva`) REFERENCES `inspeccion_patente_nueva` (`PK_Codigo_Inspeccion`),
  CONSTRAINT `fk_Inspeccion_Ocular_Testigo1` FOREIGN KEY (`FK_Testigo1`) REFERENCES `testigo` (`PK_ID`),
  CONSTRAINT `fk_Inspeccion_Ocular_Testigo2` FOREIGN KEY (`FK_Testigo2`) REFERENCES `testigo` (`PK_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=ujis;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inspeccion_ocular`
--

LOCK TABLES `inspeccion_ocular` WRITE;
/*!40000 ALTER TABLE `inspeccion_ocular` DISABLE KEYS */;
/*!40000 ALTER TABLE `inspeccion_ocular` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inspeccion_patente_nueva`
--

DROP TABLE IF EXISTS `inspeccion_patente_nueva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inspeccion_patente_nueva` (
  `PK_Codigo_Inspeccion` int(11) NOT NULL AUTO_INCREMENT,
  `FK_Inspector_Administrativo` varchar(45) NOT NULL,
  `FK_Solicitud_Patente` int(11) NOT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  `Fecha` datetime(3) DEFAULT NULL,
  `Local` varchar(45) DEFAULT NULL,
  `Direccion` varchar(45) DEFAULT NULL,
  `Requisito_Local_Acorde_Actividadl` tinyint(4) DEFAULT NULL,
  `Planta_Fisica` tinyint(4) DEFAULT NULL,
  `Senalizacion` tinyint(4) DEFAULT NULL,
  `Luces_Emergencias` tinyint(4) DEFAULT NULL,
  `Extintor` tinyint(4) DEFAULT NULL,
  `Salida_Emergencia` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`PK_Codigo_Inspeccion`),
  KEY `fk_Inspeccion_Patente_Administrativo1_idx` (`FK_Inspector_Administrativo`),
  KEY `fk_Inspeccion_Patente_Nueva_Solicitud_Patente1_idx` (`FK_Solicitud_Patente`),
  CONSTRAINT `fk_Inspeccion_Patente_Administrativo1` FOREIGN KEY (`FK_Inspector_Administrativo`) REFERENCES `administrativo` (`PK_ID`),
  CONSTRAINT `fk_Inspeccion_Patente_Nueva_Solicitud_Patente1` FOREIGN KEY (`FK_Solicitud_Patente`) REFERENCES `solicitud_patente` (`PK_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=ujis;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inspeccion_patente_nueva`
--

LOCK TABLES `inspeccion_patente_nueva` WRITE;
/*!40000 ALTER TABLE `inspeccion_patente_nueva` DISABLE KEYS */;
/*!40000 ALTER TABLE `inspeccion_patente_nueva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notificacion_inspeccion`
--

DROP TABLE IF EXISTS `notificacion_inspeccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notificacion_inspeccion` (
  `PK_Codigo` int(11) NOT NULL AUTO_INCREMENT,
  `FK_Inspeccion_Ocular` int(11) NOT NULL,
  `Resultado` varchar(45) DEFAULT NULL,
  `FK_Actividad` int(11) NOT NULL,
  `Fecha` datetime DEFAULT NULL,
  PRIMARY KEY (`PK_Codigo`),
  KEY `fk_Notificacion_Inspeccion_Inspeccion_Ocular1_idx` (`FK_Inspeccion_Ocular`),
  KEY `fk_Notificacion_Inspeccion_Actividad1_idx` (`FK_Actividad`),
  CONSTRAINT `fk_Notificacion_Inspeccion_Actividad1` FOREIGN KEY (`FK_Actividad`) REFERENCES `actividad` (`PK_Codigo`),
  CONSTRAINT `fk_Notificacion_Inspeccion_Inspeccion_Ocular1` FOREIGN KEY (`FK_Inspeccion_Ocular`) REFERENCES `inspeccion_ocular` (`PK_Codigo_Inspeccion`)
) ENGINE=InnoDB DEFAULT CHARSET=ujis;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificacion_inspeccion`
--

LOCK TABLES `notificacion_inspeccion` WRITE;
/*!40000 ALTER TABLE `notificacion_inspeccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `notificacion_inspeccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patente`
--

DROP TABLE IF EXISTS `patente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patente` (
  `FK_Codigo` int(11) NOT NULL AUTO_INCREMENT,
  `FK_Contribuyente` varchar(45) NOT NULL,
  `FK_Actividad` int(11) NOT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`FK_Codigo`),
  KEY `fk_Patente_Contribuyente1_idx` (`FK_Contribuyente`),
  KEY `fk_Patente_Actividad1_idx` (`FK_Actividad`),
  CONSTRAINT `fk_Patente_Actividad1` FOREIGN KEY (`FK_Actividad`) REFERENCES `actividad` (`PK_Codigo`),
  CONSTRAINT `fk_Patente_Contribuyente1` FOREIGN KEY (`FK_Contribuyente`) REFERENCES `contribuyente` (`PK_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=ujis;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patente`
--

LOCK TABLES `patente` WRITE;
/*!40000 ALTER TABLE `patente` DISABLE KEYS */;
/*!40000 ALTER TABLE `patente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `FK_Codigo` int(11) NOT NULL,
  `Descripcion` varchar(45) NOT NULL,
  PRIMARY KEY (`FK_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=ujis;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'Jefe/a de Patentes'),(2,'Tecnologías de información'),(3,'Inspector/a\''),(4,'Secretariado/a'),(5,'Contribuyente');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solicitud_patente`
--

DROP TABLE IF EXISTS `solicitud_patente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solicitud_patente` (
  `PK_Codigo` int(11) NOT NULL AUTO_INCREMENT,
  `FK_ID_Contribuyente` varchar(45) NOT NULL,
  `Nombre_Representante_Legal_Contribuyente` varchar(45) DEFAULT NULL,
  `Cedula_Representante_Legal_Contribuyente` varchar(45) DEFAULT NULL,
  `Nombre_Propetario` varchar(45) DEFAULT NULL,
  `Cedula_Propetario` varchar(45) DEFAULT NULL,
  `Nombre_Representante_Legal_Propietario` varchar(45) DEFAULT NULL,
  `Direccion_Propietario` varchar(100) DEFAULT NULL,
  `Nombre_Comercial_Negocio` varchar(45) DEFAULT NULL,
  `Actividad` varchar(45) DEFAULT NULL,
  `Nombre_Persona_Autorizada` varchar(45) DEFAULT NULL,
  `ID_Persona_Autorizada` varchar(45) DEFAULT NULL,
  `Declaracion_Jurada` varchar(45) DEFAULT NULL,
  `Fecha` datetime(3) DEFAULT NULL,
  `Requisitos_Articulo9_Muni_Barva` varchar(45) DEFAULT NULL,
  `Inscrito_CSS_Se_Encuentra_al_dia` varchar(45) DEFAULT NULL,
  `Inscrito_FODESAF` varchar(45) DEFAULT NULL,
  `Exoneracion_y_Poliza_Riesgo_de_trabajo_del_INS` varchar(45) DEFAULT NULL,
  `Timbre_Fiscal` varchar(45) DEFAULT NULL,
  `Formulario_Solicitud_Patente_Firmada` varchar(45) DEFAULT NULL,
  `Declaracion_Jurada_Firmada` varchar(45) DEFAULT NULL,
  `Al_Dia_Impuestos_Municipales` varchar(45) DEFAULT NULL,
  `Contrato_Arrendamiento` varchar(45) DEFAULT NULL,
  `Estado` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`PK_Codigo`),
  KEY `fk_Solicitud_Patente_Contribuyente1_idx` (`FK_ID_Contribuyente`),
  CONSTRAINT `fk_Solicitud_Patente_Contribuyente1` FOREIGN KEY (`FK_ID_Contribuyente`) REFERENCES `contribuyente` (`PK_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=ujis;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitud_patente`
--

LOCK TABLES `solicitud_patente` WRITE;
/*!40000 ALTER TABLE `solicitud_patente` DISABLE KEYS */;
INSERT INTO `solicitud_patente` VALUES (12,'108230500',NULL,NULL,'Maria Julia Gutierrez Cespedes','401110716',NULL,'Costado Norte del del Edificio de servicios Publicos','Frutas J Y S','Venta Frutas Y verduras',NULL,NULL,'1',NULL,'1','1','1','1','1','0','1','1','0','Terminado'),(13,'304760577','bryan sanchez brenes','304760577','bryan sanchez brenes','304760577','bryan sanchez brenes','cartago costa rica','bryan','tech','','','1','2021-03-12 20:52:14.000','1','1','1','1','1','0','1','1','0','Terminado');
/*!40000 ALTER TABLE `solicitud_patente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testigo`
--

DROP TABLE IF EXISTS `testigo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testigo` (
  `PK_ID` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Apellido1` varchar(45) DEFAULT NULL,
  `Apellido2` varchar(45) DEFAULT NULL,
  `Telefono` varchar(45) DEFAULT NULL,
  `Correo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`PK_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=ujis;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testigo`
--

LOCK TABLES `testigo` WRITE;
/*!40000 ALTER TABLE `testigo` DISABLE KEYS */;
/*!40000 ALTER TABLE `testigo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo identificacion`
--

DROP TABLE IF EXISTS `tipo identificacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo identificacion` (
  `Codigo` int(11) NOT NULL,
  `Descripcion` varchar(45) NOT NULL,
  PRIMARY KEY (`Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=ujis;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo identificacion`
--

LOCK TABLES `tipo identificacion` WRITE;
/*!40000 ALTER TABLE `tipo identificacion` DISABLE KEYS */;
INSERT INTO `tipo identificacion` VALUES (1,'Cédula Nacional'),(2,'Cédula Residente'),(3,'Pasaporte'),(4,'DIMEX');
/*!40000 ALTER TABLE `tipo identificacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `PK_ID` varchar(45) NOT NULL,
  `Tipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`PK_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=ujis;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('108230500','Contribuyente'),('111111111','Administrativo'),('123456789','Administrador'),('222222222','Administrativo'),('222333444','Administrador'),('304760577','Administrativo'),('401730306','Administrativo'),('444444444','Administrativo'),('987654321','Administrador');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta_licor`
--

DROP TABLE IF EXISTS `venta_licor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venta_licor` (
  `FK_Actividad` int(11) NOT NULL,
  `Nombre_Local` varchar(45) DEFAULT NULL,
  `Patente` varchar(45) DEFAULT NULL,
  `Numero_Patente_Licor` varchar(45) DEFAULT NULL,
  `Patente_Licor` varchar(45) DEFAULT NULL,
  KEY `fk_Comercial_Actividad2_idx` (`FK_Actividad`),
  CONSTRAINT `fk_Comercial_Actividad20` FOREIGN KEY (`FK_Actividad`) REFERENCES `actividad` (`PK_Codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=ujis;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta_licor`
--

LOCK TABLES `venta_licor` WRITE;
/*!40000 ALTER TABLE `venta_licor` DISABLE KEYS */;
/*!40000 ALTER TABLE `venta_licor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-12 21:13:50
