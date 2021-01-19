using Business.Base;
using DataAccess;
using Models;
using Models.ViewModel;

namespace Business
{
    public class LoginBusiness : DefaultBusiness
    {
        public Login IsAuthenticDataBase(Context context, LoginViewModel viewModel)
        {
            return this.GetSingleOrDefault<Login>(context, x => x.name == viewModel.name && x.password == viewModel.password);
        }
    }
}
