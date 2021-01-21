Create table Registros_Estabelecimentos.dbo.tb_status(
	id_sequence_status Integer Identity(1,1) primary key,	
	ds_name varchar(30) not null,
	dt_createDate DateTime not null,
	);