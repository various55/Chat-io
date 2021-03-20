CREATE DATABASE WebChat
CREATE table [Server](
	Id BIGINT primary key identity(1,1),
	ObjectGuid UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),
	IdUserCreate BIGINT NOT NULL,
	[Name] nvarchar(100) NOT NULL,
	ServerCode VARCHAR(20) NOT NULL,
	isDelete BIT NOT NULL,
)
create table [User](
	Id BIGINT PRIMARY KEY identity(1,1),
	ObjectGuid  UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),
	Email NVARCHAR(250) NOT NULL,
	[Username] VARCHAR(250) NOT NULL,
	PasswordHash VARBINARY(MAX) NOT NULL,
	PasswordSalt VARBINARY(MAX) NOT NULL,
	[Name] NVARCHAR(250) NOT NULL,
	Sex BIT NOT NULL,
	BirthDate DATETIME NOT NULL,
	IsDelete BIT NOT NULL DEFAULT 0,
	IsActive BIT NOT NULL DEFAULT 1,
	CreateDate DATETIME NOT NULL,
	LastUpdate DATETIME NOT NULL
)

CREATE TABLE [Admin](
	IDUserDelegacyed BIGINT NOT NULL,
	IdUserDelegacy BIGINT NOT NULL,
	IdPosition BIGINT NOT NULL,
	IsDelete BIT NOT NULL DEFAULT 0,
	IsActive BIT NOT NULL DEFAULT 1,
	DelegacyDate DATETIME NOT NULL,
	LastUpdate DATETIME NOT NULL
)

CREATE TABLE Position(
	Id BIGINT PRIMARY KEY identity(1,1),
	[Name] NVARCHAR(250) NOT NULL,
	IsDelete BIT NOT NULL DEFAULT 0,
	IsActive BIT NOT NULL DEFAULT 1,
	CreateDate DATETIME NOT NULL,
)

CREATE TABLE Decentralization(
	IDPosition BIGINT NOT NULL,
	IDPermission BIGINT NOT NULL,
	IsDelete BIT NOT NULL DEFAULT 0,
	IsActive BIT NOT NULL DEFAULT 1,
	CreateDate DATETIME NOT NULL,
	LastUpdate DATETIME NOT NULL
)

CREATE TABLE Permission(
	Id BIGINT PRIMARY KEY identity(1,1),
	[Name] NVARCHAR(250) NOT NULL,
	IsDelete BIT NOT NULL DEFAULT 0,
	IsActive BIT NOT NULL DEFAULT 1,
	CreateDate DATETIME NOT NULL,
	LastUpdate DATETIME NOT NULL
)

CREATE TABLE BandList(
	IdServer BIGINT NOT NULL,
	IdUser BIGINT NOT NULL,
	CreateDate DATETIME NOT NULL,
	IdAdmintrastor BIGINT NOT NULL,
	IsDelete BIT NOT NULL DEFAULT 0,
	LastUpdate DATETIME NOT NULL
)

create table UserRegisterHistory(
	Id BIGINT PRIMARY KEY identity(1,1),
	ObjectGuid  UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),
	Email NVARCHAR(250) NOT NULL,
	[Username] VARCHAR(250) NOT NULL,
	PasswordHash VARBINARY(MAX) NOT NULL,
	PasswordSalt VARBINARY(MAX) NOT NULL,
	[Name] NVARCHAR(250) NOT NULL,
)
create table Chanel(
	Id BIGINT primary key identity(1,1),
	IdServer INT NOT NULL,
	[Name] nvarchar(40)	NOT NULL,
	IsDelete BIT NOT NULL DEFAULT 0,
	IsActive BIT NOT NULL DEFAULT 1,
	Create_Date DateTime NOT NULL,
	LastUpdate DateTime NOT NULL
)

CREATE TABLE FileUpload(
	ID BIGINT PRIMARY KEY identity(1,1),
	FileAttachGUID UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),
    UserIDCreate INT NOT NULL,
    [FileName] NVARCHAR(250) NOT NULL,
    FileExttension VARCHAR(50) NOT NULL,
	IsDelete BIT NOT NULL DEFAULT 0,
	IsActive BIT NOT NULL DEFAULT 1,
	CreateDate DateTime NOT NULL,
	LastUpdate DateTime NOT NULL,
	IDMessage BIGINT NOT NULL ,
)

CREATE TABLE [Message](
	ID BIGINT PRIMARY KEY identity(1,1),
	ObjectGUID UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),
	UserIDCreate INT NOT NULL,
	IDChanel BIGINT NOT NULL,
	[MessageType] BIGINT NOT NULL,
	MessageContent TEXT NOT NULL,
	IsDelete BIT NOT NULL DEFAULT 0,
	CreateDate DateTime NOT NULL,
	LastUpdate DateTime NOT NULL
)


CREATE TABLE [PrivateMessage](
	ID BIGINT PRIMARY KEY identity(1,1),
	ObjectGUID UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),
	UserIDCreate BIGINT NOT NULL,
	IDUserReceive BIGINT NOT NULL,
	[MessageType] BIGINT NOT NULL,
	MessageContent TEXT NOT NULL,
	IsDelete BIT NOT NULL DEFAULT 0,
	CreateDate DateTime NOT NULL,
)

CREATE TABLE Friendship(
	IDUser1 BIGINT NOT NULL,
	IDUser2 BIGINT NOT NULL,
	IsDelete BIT NOT NULL DEFAULT 0,
	CreateDate DateTime NOT NULL
)

CREATE TABLE FriendshipRegisterHistory(
	IDUserSend BIGINT NOT NULL,
	IDUserReceive BIGINT NOT NULL,
	IsDelete BIT NOT NULL DEFAULT 0,
	CreateDate DateTime NOT NULL
)

CREATE TABLE LogStoreNameHistory(
	ID BIGINT NOT NULL PRIMARY KEY  IDENTITY,
	CreateDate datetime not null,
	[IP] varchar(40) not null,
	UserID int NOT NULL,
	ObjectGUID uniqueidentifier NULL,
	FunID int NULL,
	LogContent nvarchar(2000) NOT NULL,
	UserName varchar(30) NULL)

CREATE TABLE LogActivity(
	ID BIGINT NOT NULL PRIMARY KEY  IDENTITY,
	CreateDate datetime not null,
	[IP] varchar(40) not null,
	UserID int NOT NULL,
	ObjectGUID uniqueidentifier NULL,
	LogContent nvarchar(2000) NOT NULL)

CREATE TABLE LogError(
	ID BIGINT NOT NULL PRIMARY KEY  IDENTITY,
	CreateDate datetime not null,
	LogContent nvarchar(4000) NOT NULL,
	StatusId tinyint NULL,
	ProcessContent nvarchar(max) NULL,
	TypeLog tinyint NOT NULL)
CREATE TABLE MENBERS(
	ID BIGINT NOT NULL PRIMARY KEY  IDENTITY,
	IDChanel BIGINT NOT NULL,
	IdAdmintrastor BIGINT NOT NULL,
	IdUser BIGINT NOT NULL,
)