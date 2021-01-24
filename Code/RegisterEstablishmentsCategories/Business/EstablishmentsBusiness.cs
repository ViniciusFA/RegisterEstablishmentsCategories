using Business.Base;
using DataAccess;
using Models;
using Models.ViewModel;
using PagedList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;



namespace Business
{
    public class EstablishmentsBusiness : DefaultBusiness
    {
        public IPagedList<EstablishmentViewModel> GetAll(Context context, EstablishmentViewModel viewModel, int pageNumber, int pageSize)
        {
            var result = new List<EstablishmentViewModel>();

            int? categoryId = !string.IsNullOrEmpty(viewModel.Category) ? int.Parse(viewModel.Category) : 0;
            int? statusId = !string.IsNullOrEmpty(viewModel.Status) ? int.Parse(viewModel.Status) : 0;

            var listData = this.GetList<Establishment>(context)
                               .Include(x => x.Category).Include(x => x.Status);
            //var category = this.GetSingleOrDefault<Category>(context, x => x.CategoryCode == categoryId);
            //var status = this.GetSingleOrDefault<Status>(context, x => x.IdSequence == statusId);

            listData.OrderBy(o => o.CompanyName)
                    .ToList().ForEach(e =>
                    {
                        result.Add(new EstablishmentViewModel()
                        {
                            IdSequence = e.IdEstablishment.ToString(),
                            Address = e.Address,
                            Agency = e.Agency,
                            Account = e.Agency,
                            Category = e.Category.CategoryName, //category != null? category.CategoryName : "",
                            City = e.City,
                            CNPJ = e.CNPJ,
                            CompanyName = e.CompanyName,
                            Email = e.Email,
                            FantasyName = e.FantasyName,
                            PhoneNumber = e.PhoneNumber,
                            RegisterDate = e.RegisterDate.Value.ToString("dd/MM/yyyy"),
                            State = e.State,
                            Status = e.Status.Name //status != null? status.Name : ""
                        });
                    });

            return result.ToPagedList(pageNumber, pageSize);
        }

        public EstablishmentViewModel GetSingleOrDefault(Context context, int IdSequence)
        {
            EstablishmentViewModel viewModel = null;
            var model = this.GetSingleOrDefault<Establishment>(context, x => x.IdEstablishment == IdSequence);
            if (model != null)
            {
                viewModel = ConvertModelToViewModel(context, model, viewModel);
            }

            return viewModel;
        }

        public bool SaveUpdateEstablishment(Context context, EstablishmentViewModel viewModel)
        {
            var newData = false;
            int? idSequence = null;

            Establishment model = new Establishment();

            if (viewModel.IdSequence != null)
                idSequence = int.Parse(viewModel.IdSequence);            

            var establishment = this.GetFirstOrDefault<Establishment>(context, x => x.IdEstablishment == idSequence);
            if (establishment == null)
            {
                newData = true;
                model = ConvertViewModelToModel(context, viewModel, establishment, true);
            }
            else
                model = ConvertViewModelToModel(context, viewModel, establishment, false);

            if (newData)
                Insert<Establishment>(context, model, true);
            else
            {
                context.Entry(establishment).CurrentValues.SetValues(model);
                Update<Establishment>(context, establishment, true);
            }               

            return true;
        }

        public bool DeleteEstablishment(Context context, int IdSequence)
        {
            var establishment = GetFirstOrDefault<Establishment>(context, x => x.IdEstablishment == IdSequence);
            if(establishment != null)
            {
                Exclude<Establishment>(context, establishment, true);
                return true;
            }

            return false;
        }

        private Establishment ConvertViewModelToModel(Context context, EstablishmentViewModel viewModel, Establishment model, bool isInsert)
        {
            int? idSequence = null;
            if(!isInsert)
                idSequence = model.IdEstablishment != null? model.IdEstablishment : null;


            model = new Establishment();


            model.IdEstablishment = idSequence;
            model.Address = viewModel.Address;
            model.Agency = viewModel.Agency;
            model.Account = viewModel.Account;
            model.CategoryID = int.Parse(viewModel.Category);
            model.City = viewModel.City;
            model.CNPJ = viewModel.CNPJ;
            model.CompanyName = viewModel.CompanyName;
            model.Email = viewModel.Email;
            model.FantasyName = viewModel.FantasyName;
            model.PhoneNumber = viewModel.PhoneNumber;
            model.RegisterDate = !string.IsNullOrEmpty(viewModel.RegisterDate)? DateTime.Parse(viewModel.RegisterDate) : DateTime.Now;
            model.State = viewModel.State;
            model.StatusID = int.Parse(viewModel.Status);
            model.CreateDate = DateTime.Now;

            //model = new Establishment
            //{
            //    IdEstablishment = idSequence,
            //    Address = viewModel.Address,
            //    Agency = viewModel.Agency,
            //    Account = viewModel.Account,
            //    CategoryID = int.Parse(viewModel.Category),
            //    City = viewModel.City,
            //    CNPJ = viewModel.CNPJ,
            //    CompanyName = viewModel.CompanyName,
            //    Email = viewModel.Email,
            //    FantasyName = viewModel.FantasyName,
            //    PhoneNumber = viewModel.PhoneNumber,
            //    RegisterDate = DateTime.Parse(viewModel.RegisterDate),
            //    State = viewModel.State,
            //    StatusID = int.Parse(viewModel.Status),
            //    CreateDate = DateTime.Now
            //};

            return model;
        }

        private EstablishmentViewModel ConvertModelToViewModel(Context context,Establishment model, EstablishmentViewModel viewModel)
        {
            var idSequence = model.IdEstablishment != null ? model.IdEstablishment : null;
            var category = this.GetSingleOrDefault<Category>(context, x => x.CategoryCode == model.CategoryID);
            var status = this.GetSingleOrDefault<Status>(context, x => x.IdSequence == model.StatusID);

            viewModel = new EstablishmentViewModel
            {
                IdSequence = idSequence.ToString(),
                Address = model.Address,
                Agency = model.Agency,
                Account = model.Account,
                Category = category != null? category.CategoryCode.ToString() : "",
                City = model.City,
                CNPJ = model.CNPJ,
                CompanyName = model.CompanyName,
                Email = model.Email,
                FantasyName = model.FantasyName,
                PhoneNumber = model.PhoneNumber.ToString(),
                RegisterDate = model.RegisterDate.HasValue? model.RegisterDate.Value.ToString("dd/MM/yyyy") : null,
                State = model.State,
                Status = status != null? status.IdSequence.ToString() : "",
            };

            return viewModel;
        }

    }
}
