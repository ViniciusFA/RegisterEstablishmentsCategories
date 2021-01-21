using System;

namespace Models
{
    public class Establishment // tb_establishment
    {
        public int? IdEstablishment { get; set; } // id_sequence_establishment
        public string CompanyName { get; set; }  //ds_companyName
        public string FantasyName { get; set; }  //ds_fantasyName
        public string CNPJ { get; set; } //ds_cnpj
        public string Email { get; set; } //ds_email
        public string Address { get; set; } // ds_address
        public string City { get; set; } //ds_city
        public string State { get; set; } //ds_state
        public string PhoneNumber { get; set; } //num_phoneNumber
        public DateTime RegisterDate { get; set; } //dt_registerDate
        public int CategoryID { get; set; } //ds_category
        public int StatusID { get; set; } //ds_status
        public string Agency{ get; set; } //ds_agency
        public string Account { get; set; } //ds_account
        public DateTime CreateDate { get; set; } // dt_createDate

        public Category Category { get; set; }
        public Status Status { get; set; }
    }
}
