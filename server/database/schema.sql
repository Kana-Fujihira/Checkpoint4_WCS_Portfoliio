create table user (
  id int unsigned primary key auto_increment not null,
  name varchar (55) not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);
