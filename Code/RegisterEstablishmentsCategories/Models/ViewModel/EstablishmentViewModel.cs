
using System;
using System.ComponentModel.DataAnnotations;

namespace Models.ViewModel
{
    public class EstablishmentViewModel : DatatablesParamViewModel
    {
        public string IdSequence { get; set; }
        public string CompanyName { get; set; }
        public string FantasyName { get; set; }
        public string CNPJ { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime RegisterDate { get; set; }
        public string Category { get; set; }
        public string Status { get; set; }
        public string AgencyAccount { get; set; }
    }
}
