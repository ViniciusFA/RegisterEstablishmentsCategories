using Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

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

        public PartialViewResult EnterLogin(string user, string password)
        {
            var result = _loginBusiness.IsAuthenticDataBase(user, password);
            if (result)
                return PartialView("_");
            else
                return default(PartialViewResult);
        }
    }
}