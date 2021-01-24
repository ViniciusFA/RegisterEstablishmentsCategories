
Create table Registros_Estabelecimentos.dbo.tb_establishment(
	id_sequence_establishment Integer Identity(1,1) primary key,	
	ds_address varchar(30),
	num_category int not null,
	ds_city varchar(15),
	ds_state varchar(30),
	ds_cnpj varchar(18) not null,
	ds_companyName varchar(15) not null,
	ds_email varchar(30) ,
	ds_fantasyName varchar(50),
	ds_phoneNumber varchar(14),
	dt_registerDate Datetime,
	ds_agency varchar(5),
	ds_account varchar(8),
	num_status int not null,
	dt_createDate Datetime,
CONSTRAINT FK_Category FOREIGN KEY (num_category)
    REFERENCES Registros_Estabelecimentos.dbo.tb_category (id_sequence_category),
CONSTRAINT FK_Status FOREIGN KEY (num_status)
    REFERENCES Registros_Estabelecimentos.dbo.tb_status (id_sequence_status)
);
