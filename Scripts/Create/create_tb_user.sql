Create table Registros_Estabelecimentos.dbo.tb_user(
	id_sequence_user int Identity(1,1) primary key,	
	nome_user varchar(30) not null,
	email_user varchar(50) not null,
	password_user varchar(15) not null
);