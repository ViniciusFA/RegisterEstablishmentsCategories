using Business;
using Models;
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

        public ActionResult Register(int? IdSequence)
        {
            GetAllDropDownList();



            EstablishmentViewModel viewModel = new EstablishmentViewModel
            {
                MessageError = "*** Preencha os campos obrigatórios."
            };

            if (IdSequence != null)
                viewModel = _establishmentsBusiness.GetSingleOrDefault(Util.AuxiliaryMethods.ContextPerRequestInstance, IdSequence.Value);

            return PartialView("_Register", viewModel);
        }

        public JsonResult Save(EstablishmentViewModel viewModel)
        {
            try
            {
                var CategoryName = GetCategoryName(viewModel.Category);
                if(CategoryName == "Supermercado" && string.IsNullOrEmpty(viewModel.PhoneNumber))
                {
                    return Json(new
                    {
                        Success = false,
                        Title = "Campo Obrigatório" ,
                        MsgReturn = "Telefone é um campo obrigatório para o estabelecimento Supermercado",
                    }, JsonRequestBehavior.AllowGet);
                }

                var result = _establishmentsBusiness.SaveUpdateEstablishment(Util.AuxiliaryMethods.ContextPerRequestInstance, viewModel);

                return Json(new
                {
                    Success = result,
                    Title = result ? "Estebelecimento Gravado" : "Falha ao Registrar Estebelecimento",
                    MsgReturn = result ? Utilities.ApplicationConstants.MESSAGE_RECORD_ADDED : Utilities.ApplicationConstants.ERROR_MESSAGE_ADDED,
                }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, Title = "Erro", MsgReturn = ex.Message, JsonRequestBehavior.AllowGet });
            }
        }

        public JsonResult Delete(int IdEstablishment)
        {
            try
            {
                var result = _establishmentsBusiness.DeleteEstablishment(Util.AuxiliaryMethods.ContextPerRequestInstance, IdEstablishment);

                return Json(new
                {
                    Success = result,
                    Title = result ? "Estabelecimento Excluído" : "Falha ao Excluir Estabelecimento",
                    MsgReturn = result ? Utilities.ApplicationConstants.MESSAGE_RECORD_DELETED : Utilities.ApplicationConstants.ERROR_MESSAGE_DELETED
                }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, Title = "Erro", MsgReturn = ex.Message, JsonRequestBehavior.AllowGet });
            }
        }

        private void GetAllDropDownList()
        {
            try
            {
                var listCategory = new CategoryBusiness().GetList<Category>(Util.AuxiliaryMethods.ContextPerRequestInstance).ToList();
                var listStatus = new StatusBusiness().GetList<Status>(Util.AuxiliaryMethods.ContextPerRequestInstance).ToList();
                          
                ViewBag.CategoryList = new SelectList(listCategory, "CategoryCode", "CategoryName");
                ViewBag.StatusList = new SelectList(listStatus, "IdSequence", "Name");
            }
            catch (Exception ex)
            {
                var teste = ex;
            }         
        }

        private string GetCategoryName(string StringCategory)
        {
            string CategoryName = string.Empty;
            if (!string.IsNullOrEmpty(StringCategory))
            {
                int IdCategory = int.Parse(StringCategory);
                CategoryName = new CategoryBusiness().GetSingleOrDefault<Category>(Util.AuxiliaryMethods.ContextPerRequestInstance, x => x.CategoryCode == IdCategory).CategoryName;
            }

            return CategoryName;
        }
    }
}