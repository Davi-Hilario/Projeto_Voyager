create database Bd_Voyager;
use Bd_Voyager;

create table Usuario
(
	idUsuario int primary key auto_increment,
    nomeUsuario varchar(90),
    dataNasc date,
    emailUsuario varchar(90) unique,
    senhaUsuario varchar(20) unique
);