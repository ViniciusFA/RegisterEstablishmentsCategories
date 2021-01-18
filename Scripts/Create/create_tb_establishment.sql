
Create table Registros_Estabelecimentos.dbo.tb_establishment(
	id_sequence_establishment Integer Identity(1,1) primary key,	
	ds_address varchar(30) not null,
	ds_category varchar(50),
	ds_city varchar(15),
	ds_state varchar(30),
	ds_cnpj varchar(50) not null,
	ds_companyName varchar(15) not null,
	ds_email varchar(30) not null,
	ds_fantasyName varchar(50) ,
	num_phoneNumber integer not null,
	dt_registerDate Datetime not null,
	ds_agencyAccount varchar(50) not null,
	ds_status varchar(15)
);