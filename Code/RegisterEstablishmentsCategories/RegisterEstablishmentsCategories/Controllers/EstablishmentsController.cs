using Business;
using Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UserInterface.CustomResult;

namespace UserInterface.Controllers
{
    public class EstablishmentsController : Controller
    {
        private readonly EstablishmentsBusiness _establishmentsBusiness;
        public EstablishmentsController()
        {
            _establishmentsBusiness = new EstablishmentsBusiness();
        }

        // GET: Establishments
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DatatableRegister(EstablishmentViewModel viewModel)
        {
            try
            {
                int pageActual = 1;

                if (viewModel.iDisplayStart > 0)
                    pageActual = (viewModel.iDisplayStart / viewModel.iDisplayLength) + 1;

                JsonNetResult jsonNetResult = new JsonNetResult();
                var listData = _establishmentsBusiness.GetAll(Util.AuxiliaryMethods.ContextPerRequestInstance, viewModel, pageActual, viewModel.iDisplayLength);
                
                var result = new
                {
                    viewModel.sEcho,
                    iTotalRecords = listData.TotalItemCount,
                    iTotalDisplayRecords = listData.TotalItemCount,
                    aaData = listData.ToList()
                };

                jsonNetResult.Success = true;
                jsonNetResult.Data = result;

                return jsonNetResult;
            }
            catch (Exception ex)
            {
                return Json(new
                {
                    Success = false,
                    MsgReturn = ex.Message
                }, JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult Register()
        {
            return View("_Register");
        }
    }
}