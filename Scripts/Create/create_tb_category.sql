Create table Registros_Estabelecimentos.dbo.tb_category(
	id_sequence_category Integer Identity(1,1) primary key,
	ds_name varchar(30) not null,	
	dt_createDate Datetime not null
);