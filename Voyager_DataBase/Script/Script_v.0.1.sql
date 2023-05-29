create database Bd_Voyager;
use Bd_Voyager;

create table Usuario
(
	idUsuario int primary key auto_increment,
    nomeUsuario varchar(90),
    dataNasc date,
    planetaFavorito varchar(20),
    diaOuNoite varchar(5) check(diaOuNoite in ('Dia','Noite')),
    emailUsuario varchar(90) unique,
    senhaUsuario varchar(20) unique
);

insert into Usuario values
	(default, 'Davi Alexandre', '2004-08-23', 'Saturno', 'Dia', 'davi.hilario@sptech.school','davi1234');
insert into Usuario values
	(default, 'Arnaldo Fritz', '1960-03-05', 'Mercúrio', 'Noite', 'arnaldoFritz@gmail.com','arnaldo1234'),
	(default, 'Arthur Cervero', '1986-06-12', 'Saturno', 'Noite', 'arthurzin234@gmail.com','tutu1234'),
	(default, 'Claudio Andrade', '2002-09-29', 'Jupiter', 'Dia', 'canedo@hotmail.com.br','caca1234'),
	(default, 'Maria Madalena', '2006-04-01', 'Terra', 'Noite', 'maria@gmail.com','maria1234'),
	(default, 'Leandra Almeida', '1976-05-11', 'Jupiter', 'Dia', 'lele@gmail.com','lele1234');
    
select * from Usuario;

create table quiz
(
	idQuiz int primary key auto_increment,
    qtdAcertos int,
	qtdErros int,
    fkUsuario int,
    foreign key (fkUsuario) references Usuario(idUsuario)
);

drop table quiz;
