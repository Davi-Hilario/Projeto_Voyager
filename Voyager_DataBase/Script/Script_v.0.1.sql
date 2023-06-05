create database Bd_Voyager;
use Bd_Voyager;

create table if not exists Usuario
(
	idUsuario int primary key auto_increment,
    nomeUsuario varchar(90),
    dataNasc date,
    planetaFavorito varchar(20),
    diaOuNoite varchar(5) check(diaOuNoite in ('Dia','Noite')),
    emailUsuario varchar(90) unique,
    senhaUsuario varchar(20) unique
);

create table if not exists quiz
(
	idQuiz int primary key auto_increment,
    qtdAcertos int,
	qtdErros int,
    fkUsuario int,
    foreign key (fkUsuario) references Usuario(idUsuario),
    unique key (fkUsuario)
);

create table if not exists telefone
(
	idTel int primary key auto_increment,
    dddTel char(2),
    numeroTel char(12),
    fkUsuario int,
    foreign key(fkUsuario) references Usuario(idUsuario)
);

insert into Usuario values
	(default, 'Arnaldo Fritz', '1960-03-05', 'Mercúrio', 'Noite', 'arnaldoFritz@gmail.com','arnaldo1234'),
	(default, 'Arthur Cervero', '1986-06-12', 'Terra', 'Noite', 'arthurzin234@gmail.com','tutu1234'),
	(default, 'Claudio Andrade', '2002-09-29', 'Terra', 'Dia', 'canedo@hotmail.com.br','caca1234'),
	(default, 'Maria Madalena', '2006-04-01', 'Marte', 'Noite', 'maria@gmail.com','maria1234'),
	(default, 'Leandra Almeida', '1976-05-11', 'Jupiter', 'Dia', 'lele@gmail.com','lele1234'),
    (default, 'Rodolfo Carlos', '1961-04-02', 'Saturno', 'Noite', 'rodolfo@gmail.com','rodolfo1234'),
	(default, 'Sidney Miguel', '1986-06-12', 'Saturno', 'Noite', 'sid@gmail.com','sidin1234'),
	(default, 'Josoares Miranda', '1999-01-23', 'Netuno', 'Dia', 'josoares@hotmail.com.br','joso1234'),
	(default, 'Maria Antonieta', '2003-03-03', 'Mercúrio', 'Noite', 'mariaAnt@gmail.com','mariaAnt1234'),
	(default, 'Silvia Almeida', '1976-05-11', 'Saturno', 'Dia', 'silvia@gmail.com','silvia1234');

insert into Telefone values
	(default, '11', '12345-6789', 1),
	(default, '11', '24354-6239', 2),
	(default, '11', '19343-1235', 3),
	(default, '11', '58341-3842', 4),
	(default, '11', '19068-1205', 5),
	(default, '11', '94743-6509', 6),
	(default, '11', '12994-4656', 7),
	(default, '11', '12359-6449', 8),
	(default, '11', '11234-6444', 9),
	(default, '11', '19857-6938', 10);

insert into Quiz values
	(default, 4, 6, 1),
	(default, 4, 6, 2),
	(default, 5, 5, 3),
	(default, 3, 7, 4),
	(default, 10, 0, 5),
	(default, 0, 10, 6),
	(default, 6, 4, 7),
	(default, 1, 9, 8),
	(default, 9, 1, 9),
	(default, 7, 3, 10);
    
select * from Usuario;
select * from Telefone;
select * from Quiz;

select nomeUsuario, dataNasc, planetaFavorito, diaOuNoite, dddTel, numeroTel, qtdAcertos, qtdErros from usuario u 
	join telefone t on u.idUsuario = t.fkUsuario
	join quiz q on q.fkUsuario = u.idUsuario;

delete from quiz where fkUsuario = 11;