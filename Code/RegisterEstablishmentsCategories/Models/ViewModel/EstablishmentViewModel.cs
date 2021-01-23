﻿
using System;
using System.ComponentModel.DataAnnotations;

namespace Models.ViewModel
{
    public class EstablishmentViewModel : DatatablesParamViewModel
    {
        public string IdSequence { get; set; }
        [Required(ErrorMessage ="Campo Obrigatório", AllowEmptyStrings = false)]
        public string CompanyName { get; set; }
        public string FantasyName { get; set; }
        [Required(ErrorMessage = "Campo Obrigatório", AllowEmptyStrings = false)]
        public string CNPJ { get; set; }
        [RegularExpression(".+\\@.+\\..+", ErrorMessage = "Informe um email válido...")]
        public string Email { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PhoneNumber { get; set; }
        public string RegisterDate { get; set; }
        public string Category { get; set; }
        public string Status { get; set; }
        public string Agency { get; set; }
        public string Account { get; set; }
        public string MessageError { get; set; }
    }
}
