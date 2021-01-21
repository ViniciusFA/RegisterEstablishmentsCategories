using System.ComponentModel.DataAnnotations;

namespace Models.ViewModel
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Obrigatório")]
        public string name { get; set; }
        [Required(ErrorMessage = "Obrigatório")]
        public string password { get; set; }
    }
}
