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
    public class CategoriesController : Controller
    {
        private readonly CategoryBusiness _categoriesBusiness;
        public CategoriesController()
        {
            _categoriesBusiness = new CategoryBusiness();
        }

        // GET: Categories
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetDataTable(CategoryViewModel viewModel)
        {
            try
            {
                int pageActual = 1;

                if (viewModel.iDisplayStart > 0)
                    pageActual = (viewModel.iDisplayStart / viewModel.iDisplayLength) + 1;

                JsonNetResult jsonNetResult = new JsonNetResult();
                var listData = _categoriesBusiness.GetAll(Util.AuxiliaryMethods.ContextPerRequestInstance, viewModel, pageActual, viewModel.iDisplayLength);

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

        public ActionResult OpenModalCategory(int? IdSequence)
        {
            CategoryViewModel viewModel = null;
            if (IdSequence.HasValue)
                viewModel = _categoriesBusiness.GetSingleOrDefault(Util.AuxiliaryMethods.ContextPerRequestInstance, IdSequence.Value);                

            return PartialView("_CategoryInput", viewModel);
        }
        
        public JsonResult SaveCategory(CategoryViewModel viewModel)
        {
            try
            {
                var result = _categoriesBusiness.SaveUpdateCategory(Util.AuxiliaryMethods.ContextPerRequestInstance, viewModel);

                return Json(new
                {
                    Success = result,
                    Title = result ? "Categoria Registrado" : "Falha ao Registrar Categoria",
                    MsgReturn = result ? Utilities.ApplicationConstants.MESSAGE_RECORD_CATEGORY_ADDED : Utilities.ApplicationConstants.ERROR_MESSAGE_CATEGORY_ADDED,
                }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, Title = "Erro", MsgReturn = ex.Message, JsonRequestBehavior.AllowGet });
            }                       
        }

        public JsonResult DeleteCategory(int IdSequence)
        {
            try
            {
                var result = _categoriesBusiness.DeleteCategory(Util.AuxiliaryMethods.ContextPerRequestInstance, IdSequence);

                return Json(new
                {
                    Success = result,
                    Title = result ? "Categoria Excluída" : "Falha ao Excluir Categoria",
                    MsgReturn = result ? Utilities.ApplicationConstants.MESSAGE_RECORD_CATEGORY_DELETED : Utilities.ApplicationConstants.ERROR_MESSAGE_CATEGORY_DELETED
                }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, Title = "Erro", MsgReturn = ex.Message, JsonRequestBehavior.AllowGet });
            }
        }
    }
}