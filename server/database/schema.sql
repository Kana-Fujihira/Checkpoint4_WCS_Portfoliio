create table user (
  id int unsigned primary key auto_increment not null,
  name varchar (55) not null,
  email varchar(255) not null unique,
  hashed_password varchar(255) not null
);

create table contact (
  id int unsigned primary key auto_increment not null,
  name varchar (55) not null,
  email varchar(255) not null,
  phonenumber VARCHAR(55) not null,
  companyname VARCHAR(55) not null,
  message TEXT(1000) not null
);

create table project (
  id int unsigned primary key auto_increment not null,
  teamname varchar (55) not null,
  projectname varchar(55) not null,
  skill VARCHAR(255) not null,
  projectlink VARCHAR(255) not null
);

