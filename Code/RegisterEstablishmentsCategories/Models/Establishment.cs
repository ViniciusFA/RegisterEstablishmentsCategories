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
        public int PhoneNumber { get; set; } //num_phoneNumber
        public DateTime RegisterDate { get; set; } //dt_registerDate
        public string Category { get; set; } //ds_category
        public string Status { get; set; } //ds_status
        public string AgencyAccount
        {
            get; set;  //ds_agencyAccount
        }
    }
}
