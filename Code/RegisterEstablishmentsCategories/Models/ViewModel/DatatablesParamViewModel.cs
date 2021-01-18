using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ViewModel
{
    public class DatatablesParamViewModel
    {

        /// <summary>
        /// Request sequence number sent by DataTable,
        /// same value must be returned in response
        /// </summary>       
        public string sEcho { get; set; }

        /// <summary>
        /// Text used for filtering
        /// </summary>
        public string sSearch { get; set; }

        /// <summary>
        /// Number of records that should be shown in table
        /// </summary>
        private int _iDisplayLength = 1;
        public int iDisplayLength
        {
            get
            {
                return _iDisplayLength;
            }
            set
            {
                _iDisplayLength = value;
            }
        }

        /// <summary>
        /// First record that should be shown(used for paging)
        /// </summary>
        public int iDisplayStart { get; set; }

        /// <summary>
        /// Number of columns in table
        /// </summary>
        public int iColumns { get; set; }

        /// <summary>
        /// Number of columns that are used in sorting
        /// </summary>
        public int iSortingCols { get; set; }

        /// <summary>
        /// Comma separated list of column names
        /// </summary>
        public string sColumns { get; set; }

        /// <summary>
        /// Index of the sorted column
        /// </summary>
        public int iSortCol_0 { get; set; }

        /// <summary>
        /// Asc or desc
        /// </summary>
        public string sSortDir_0 { get; set; }

        public string sSortExpression
        {
            get
            {
                if (!string.IsNullOrEmpty(sColumns))
                {
                    string sortCol = this.sColumns.Split(',')[this.iSortCol_0];
                    string sortExpression = sortCol + " " + this.sSortDir_0;

                    return sortExpression;
                }
                else
                    return string.Empty;
            }

        }
    }
}
