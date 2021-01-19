using Business;
using Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UserInterface.Util;

namespace RegisterEstablishmentsCategories.Controllers
{
    public class LoginController : Controller
    {
        private readonly LoginBusiness _loginBusiness;
        public LoginController()
        {
            _loginBusiness = new LoginBusiness();
        }

        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        
        public string EnterLogin(LoginViewModel viewModel)
        {
            var user = _loginBusiness.IsAuthenticDataBase(AuxiliaryMethods.ContextPerRequestInstance, viewModel);
            if (user != null)
                return "true";
            else
                return "false";
        }
    }
}