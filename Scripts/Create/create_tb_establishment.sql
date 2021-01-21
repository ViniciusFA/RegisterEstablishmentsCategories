
Create table Registros_Estabelecimentos.dbo.tb_establishment(
	id_sequence_establishment Integer Identity(1,1) primary key,	
	ds_address varchar(30) not null,
	num_category int not null,
	ds_city varchar(15),
	ds_state varchar(30),
	ds_cnpj varchar(18) not null,
	ds_companyName varchar(15) not null,
	ds_email varchar(30) not null,
	ds_fantasyName varchar(50) ,
	ds_phoneNumber varchar(14) not null,
	dt_registerDate Datetime not null,
	ds_agency varchar(5) not null,
	ds_account varchar(8) not null,
	num_status int not null,
	dt_createDate Datetime not null,
CONSTRAINT FK_Category FOREIGN KEY (num_category)
    REFERENCES Registros_Estabelecimentos.dbo.tb_category (id_sequence_category),
CONSTRAINT FK_Status FOREIGN KEY (num_status)
    REFERENCES Registros_Estabelecimentos.dbo.tb_status (id_sequence_status)
);
