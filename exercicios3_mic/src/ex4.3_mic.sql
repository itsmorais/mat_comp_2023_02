/* PP.4.3. Considerando as seguintes tabelas contendo um cadastro de usuários e um cadastro de
cidades, utilize consultas SQL, junções e operadores de conjuntos para ilustrar o resultado das
operações mostradas nos diagramas de Venn.  */
drop table usuario;
drop table cidade;
create table usuario(nome varchar(100), cidade varchar(100));
create table cidade(cidade varchar(100), regiao varchar(100));

insert into usuario(nome, cidade) values('fabricio', 'sjc');
insert into usuario(nome, cidade) values('thales', 'sjc');
insert into usuario(nome, cidade) values('beatriz', 'bel');
insert into usuario(nome, cidade) values('inacio', 'palmas');

insert into cidade(cidade, regiao) values('bsb', 'cento o');
insert into cidade(cidade, regiao) values('bel', 'norte');
insert into cidade(cidade, regiao) values('sjc', 'sudeste');

--INNER JOIN
-- Apenas os elementos em comum
select usuario.nome,usuario.cidade,cidade.regiao from usuario
inner join cidade 
on usuario.cidade = cidade.cidade;


--OUTER JOIN
--Todos os elementos dos dois conjuntos com exceção dos elementos em comum
select usuario.nome,usuario.cidade,cidade.regiao from usuario
full join cidade 
on usuario.cidade = cidade.cidade
except
select usuario.nome,usuario.cidade,cidade.regiao from usuario
inner join cidade 
on usuario.cidade = cidade.cidade;

-- Todos os elementos do conjunto A com exceção dos elementos em comum com o conjunto B
select usuario.nome,usuario.cidade from usuario
except
select usuario.nome,usuario.cidade from usuario
inner join cidade 
on usuario.cidade = cidade.cidade;
-- OU
select usuario.nome,usuario.cidade from usuario
left join cidade
on cidade.cidade = usuario.cidade
where cidade.cidade IS NULL;


-- Todos os elementos do conjunto B com exceção dos elementos em comum com o conjunto A
select cidade.cidade,regiao from cidade
except
select cidade.cidade,regiao from cidade
inner join usuario
on cidade.cidade = usuario.cidade;
-- OU
SELECT cidade.cidade,regiao from usuario
RIGHT JOIN cidade
on cidade.cidade = usuario.cidade
where usuario.cidade IS NULL

-- Todos os elementos do conjunto A incluindo a intersecção com o conjunto B
select usuario.nome,usuario.cidade,cidade.regiao from usuario
left join cidade
on usuario.cidade = cidade.cidade;

-- Todos os elementos do conjunto B incluindo a intersecção com o conjunto A
select cidade.cidade, cidade.regiao,usuario.nome from cidade
left join usuario
on cidade.cidade = usuario.cidade;

create table estado(cidade varchar(100), estado varchar(100));
insert into estado(cidade, estado) values('sjc', 'sp');
insert into estado(cidade, estado) values('bel', 'pa');
insert into estado(cidade, estado) values('bsb', 'df');
insert into estado(cidade, estado) values('manaus', 'am');


-- Intersecção entre os conjuntos A,B,C
SELECT u.nome,c.cidade,c.regiao,e.estado FROM usuario u
inner join cidade c
on c.cidade = u.cidade
inner join estado e
on u.cidade = e.cidade;

-- Intersecção entra conjunto A e C, removendo os elementos em comum com o conjunto B
SELECT u.nome,u.cidade,e.estado,c.cidade FROM usuario u
inner join estado e
on u.cidade = e.cidade
left join cidade c
on c.cidade = u.cidade
where c.cidade is null;

-- Intersecção entra conjunto A e B, removendo os elementos em comum com o conjunto C
SELECT u.nome,u.cidade,e.estado,c.cidade FROM usuario u
inner join cidade c
on u.cidade = c.cidade
left join estado e
on u.cidade = e.cidade
where e.cidade is null;

-- Intersecção entra conjunto C e B, removendo os elementos em comum com o conjunto A

select c.cidade,c.regiao,e.estado,u.nome from cidade c
inner join estado e 
on c.cidade = e.cidade
left join usuario u
on c.cidade = u.cidade
where u.cidade is null;

