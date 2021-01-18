using Business.Base;
using DataAccess;
using Models;
using Models.ViewModel;
using PagedList;
using System.Collections.Generic;
using System.Linq;

namespace Business
{
    public class EstablishmentsBusiness : DefaultBusiness
    {

        public IPagedList<EstablishmentViewModel> GetAll(Context context, EstablishmentViewModel viewModel, int pageNumber, int pageSize)
        {
            var result = new List<EstablishmentViewModel>();
            var listData = this.GetList<Establishment>(context);

            listData.OrderBy(o => o.CompanyName)
                    .ToList().ForEach(e =>
                    {
                        result.Add(new EstablishmentViewModel()
                        {
                            Address = e.Address,
                            AgencyAccount = e.AgencyAccount,
                            Category = e.Category,
                            City = e.City,
                            CNPJ = e.CNPJ,
                            CompanyName = e.CompanyName,
                            Email = e.Email,
                            FantasyName = e.FantasyName,
                            PhoneNumber = e.PhoneNumber.ToString(),
                            RegisterDate = e.RegisterDate.ToString("dd/MM/yyyy"),
                            State = e.State,
                            Status = e.Status
                        });
                    });

            return result.ToPagedList(pageNumber, pageSize);
        }
    }
}
