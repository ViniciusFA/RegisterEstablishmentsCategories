using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ViewModel
{
    public class CategoryViewModel : DatatablesParamViewModel
    {
        public int IdSequence { get; set; }
        public string CategoryName { get; set; }
        public string CreateDate { get; set; }
    }
}
