CREATE DATABASE  IF NOT EXISTS `chat_io` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `chat_io`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: chat_io
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `bandlist`
--

DROP TABLE IF EXISTS `bandlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bandlist` (
  `IdGroupChat` bigint(20) NOT NULL,
  `IdUser` bigint(20) NOT NULL,
  `CreateDate` datetime NOT NULL,
  `IdAdmintrastor` bigint(20) NOT NULL,
  `IsDelete` bit(1) NOT NULL DEFAULT b'0',
  `LastUpdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bandlist`
--

LOCK TABLES `bandlist` WRITE;
/*!40000 ALTER TABLE `bandlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `bandlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delegacy`
--

DROP TABLE IF EXISTS `delegacy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delegacy` (
  `IDPosition` bigint(20) NOT NULL,
  `IDPermision` bigint(20) NOT NULL,
  `IsDelete` bit(1) NOT NULL DEFAULT b'0',
  `IsActive` bit(1) NOT NULL DEFAULT b'1',
  `LastUpdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delegacy`
--

LOCK TABLES `delegacy` WRITE;
/*!40000 ALTER TABLE `delegacy` DISABLE KEYS */;
/*!40000 ALTER TABLE `delegacy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fileupload`
--

DROP TABLE IF EXISTS `fileupload`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fileupload` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `IDMessage` bigint(20) NOT NULL,
  `UserIDCreate` int(11) NOT NULL,
  `FileName` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `FileExttension` varchar(50) COLLATE utf8_bin NOT NULL,
  `IsDelete` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fileupload`
--

LOCK TABLES `fileupload` WRITE;
/*!40000 ALTER TABLE `fileupload` DISABLE KEYS */;
/*!40000 ALTER TABLE `fileupload` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `friendship`
--

DROP TABLE IF EXISTS `friendship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `friendship` (
  `IDUser1` bigint(20) NOT NULL,
  `IDUser2` bigint(20) NOT NULL,
  `IsDelete` bit(1) NOT NULL DEFAULT b'0',
  `CreateDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `friendship`
--

LOCK TABLES `friendship` WRITE;
/*!40000 ALTER TABLE `friendship` DISABLE KEYS */;
/*!40000 ALTER TABLE `friendship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `friendshipregisterhistory`
--

DROP TABLE IF EXISTS `friendshipregisterhistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `friendshipregisterhistory` (
  `IDUserSend` bigint(20) NOT NULL,
  `IDUserReceive` bigint(20) NOT NULL,
  `IsDelete` bit(1) NOT NULL DEFAULT b'0',
  `CreateDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `friendshipregisterhistory`
--

LOCK TABLES `friendshipregisterhistory` WRITE;
/*!40000 ALTER TABLE `friendshipregisterhistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `friendshipregisterhistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groupchat`
--

DROP TABLE IF EXISTS `groupchat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groupchat` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `IdUserCreate` bigint(20) NOT NULL,
  `Name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `isDelete` bit(1) NOT NULL DEFAULT b'0',
  `IsActive` bit(1) NOT NULL DEFAULT b'1',
  `LastUpdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groupchat`
--

LOCK TABLES `groupchat` WRITE;
/*!40000 ALTER TABLE `groupchat` DISABLE KEYS */;
INSERT INTO `groupchat` VALUES (1,1,'React Tutorial',_binary '\0',_binary '','2021-03-30 11:05:14'),(2,2,'Redux tutorial',_binary '\0',_binary '','2021-03-30 11:05:22'),(3,2,'Best',_binary '\0',_binary '','2021-04-12 01:50:56'),(35,2,'',_binary '\0',_binary '','2021-04-12 03:52:29'),(36,2,'Dragon',_binary '\0',_binary '','2021-04-12 03:53:32');
/*!40000 ALTER TABLE `groupchat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keyword`
--

DROP TABLE IF EXISTS `keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `keyword` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `IDGroupChat` bigint(20) DEFAULT NULL,
  `IDMod` bigint(20) DEFAULT NULL,
  `KeyWord` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ReplacedWord` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `CreateDate` datetime NOT NULL,
  `IsDelete` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyword`
--

LOCK TABLES `keyword` WRITE;
/*!40000 ALTER TABLE `keyword` DISABLE KEYS */;
/*!40000 ALTER TABLE `keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `IdUser` bigint(20) NOT NULL,
  `IDGroup` bigint(20) NOT NULL,
  `NickName` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'username',
  `IdModAdd` bigint(20) NOT NULL,
  `JoinDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `IsDelete` bit(1) NOT NULL DEFAULT b'0',
  `IsActive` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (2,1,'dev.Vanh',1,'2021-03-30 11:10:14',_binary '\0',_binary ''),(1,1,'dev.Yen',1,'2021-03-30 11:10:51',_binary '\0',_binary ''),(1,2,'dev.Yen',2,'2021-03-30 12:04:13',_binary '\0',_binary ''),(2,35,'Nguyễn Thị Yên',2,'2021-04-12 03:52:29',_binary '\0',_binary ''),(2,36,'Nguyễn Thị Yên',2,'2021-04-12 03:53:32',_binary '\0',_binary ''),(1,36,'Nguyễn Thị Yên',2,'2021-04-12 03:53:32',_binary '\0',_binary ''),(4,36,'Nguyễn Thị Yên',2,'2021-04-12 03:53:32',_binary '\0',_binary ''),(5,36,'Nguyễn Thị Yên',2,'2021-04-12 03:53:32',_binary '\0',_binary ''),(6,36,'Nguyễn Thị Yên',2,'2021-04-12 03:53:32',_binary '\0',_binary '');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserIDCreate` int(11) NOT NULL,
  `IDChanel` bigint(20) NOT NULL,
  `MessageType` bigint(20) NOT NULL DEFAULT '1',
  `MessageContent` text COLLATE utf8_bin NOT NULL,
  `IsDelete` bit(1) NOT NULL DEFAULT b'0',
  `CreateDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `LastUpdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `IsPrivateChat` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (1,1,1,1,'Alo',_binary '\0','2021-04-06 17:57:50','2021-04-06 17:57:50',_binary '\0'),(2,1,1,1,'Anh Bình Gold đấy phải k ạ',_binary '\0','2021-04-06 17:57:50','2021-04-06 17:57:50',_binary '\0'),(3,2,1,1,'Anh đây ',_binary '\0','2021-04-06 17:57:50','2021-04-06 17:57:50',_binary '\0'),(4,1,1,1,'Em là em anh Mạnh đây, dạo này anh có khoẻ không ạ?',_binary '\0','2021-04-06 17:57:50','2021-04-06 17:57:50',_binary '\0'),(5,2,1,1,'Vẫn thế',_binary '\0','2021-04-06 17:57:50','2021-04-06 17:57:50',_binary '\0'),(6,1,1,1,'À dạ vầng em có tý việc quan trọng định nhờ anh giúp',_binary '\0','2021-04-06 17:57:50','2021-04-06 17:57:50',_binary '\0'),(7,2,1,1,'Nói luôn',_binary '\0','2021-04-06 17:57:50','2021-04-06 17:57:50',_binary '\0'),(71,2,35,1,'alo',_binary '\0','2021-04-12 03:52:57','2021-04-12 03:52:57',_binary '\0'),(72,4,36,1,'alo',_binary '\0','2021-04-12 03:53:54','2021-04-12 03:53:54',_binary '\0');
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mod`
--

DROP TABLE IF EXISTS `mod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mod` (
  `IDUserDelegacyed` bigint(20) NOT NULL,
  `IdMemberDelegacy` bigint(20) NOT NULL,
  `IdPosition` bigint(20) NOT NULL,
  `IsDelete` bit(1) NOT NULL DEFAULT b'0',
  `IsActive` bit(1) NOT NULL DEFAULT b'1',
  `DelegacyDate` datetime NOT NULL,
  `LastUpdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mod`
--

LOCK TABLES `mod` WRITE;
/*!40000 ALTER TABLE `mod` DISABLE KEYS */;
/*!40000 ALTER TABLE `mod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permision`
--

DROP TABLE IF EXISTS `permision`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permision` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `NamePermision` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ActionName` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ActionCode` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permision`
--

LOCK TABLES `permision` WRITE;
/*!40000 ALTER TABLE `permision` DISABLE KEYS */;
/*!40000 ALTER TABLE `permision` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `position`
--

DROP TABLE IF EXISTS `position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `position` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Name` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `IsDelete` bit(1) NOT NULL DEFAULT b'0',
  `IsActive` bit(1) NOT NULL DEFAULT b'1',
  `CreateDate` datetime NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `position`
--

LOCK TABLES `position` WRITE;
/*!40000 ALTER TABLE `position` DISABLE KEYS */;
/*!40000 ALTER TABLE `position` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Email` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Username` varchar(250) COLLATE utf8_bin NOT NULL,
  `Password` varchar(250) COLLATE utf8_bin NOT NULL,
  `Name` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Sex` bit(1) NOT NULL DEFAULT b'1',
  `BirthDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `IsDelete` bit(1) NOT NULL DEFAULT b'0',
  `IsActive` bit(1) NOT NULL DEFAULT b'1',
  `CreateDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `LastUpdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'truongvietanh221@gmail.com','vanh55','123123','Trương Việt Anh',_binary '','2021-03-28 22:12:05',_binary '\0',_binary '','2021-03-28 22:12:05','2021-03-28 22:12:05'),(2,'admin@gmail.com','admin','admin','Nguyễn Thị Yên',_binary '','2021-03-28 22:12:44',_binary '\0',_binary '','2021-03-28 22:12:44','2021-03-28 22:12:44'),(4,'user1@gmail.com','User1','123123','Nuyễn Minh Khánh',_binary '','2021-04-12 03:32:12',_binary '\0',_binary '','2021-04-12 03:32:12','2021-04-12 03:32:12'),(5,'user2@gmail.com','User2','123123','Trần Bá Tuấn Anh',_binary '','2021-04-12 03:32:30',_binary '\0',_binary '','2021-04-12 03:32:30','2021-04-12 03:32:30'),(6,'user3@gmail.com','User3','123123','Nguyễn Đình Sơn',_binary '','2021-04-12 03:32:46',_binary '\0',_binary '','2021-04-12 03:32:46','2021-04-12 03:32:46');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'chat_io'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-12  3:56:18
