using Business.Base;
using DataAccess;
using Models;
using Models.ViewModel;
using PagedList;
using System;
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
                            IdSequence = e.IdEstablishment.ToString(),
                            Address = e.Address,
                            Agency = e.Agency,
                            Account = e.Agency,
                            Category = e.Category,
                            City = e.City,
                            CNPJ = e.CNPJ,
                            CompanyName = e.CompanyName,
                            Email = e.Email,
                            FantasyName = e.FantasyName,
                            PhoneNumber = e.PhoneNumber.ToString(),
                            RegisterDate = e.RegisterDate,
                            State = e.State,
                            Status = e.Status
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
                viewModel = ConvertModelToViewModel(model, viewModel);
            }

            return viewModel;
        }

        public bool SaveUpdateEstablishment(Context context, EstablishmentViewModel viewModel)
        {
            var newData = false;
            int? idSequence = null;

            if (viewModel.IdSequence != null)
                idSequence = int.Parse(viewModel.IdSequence);

            var establishment = this.GetFirstOrDefault<Establishment>(context, x => x.IdEstablishment == idSequence);
            if (establishment == null)
            {
                newData = true;
                establishment = ConvertViewModelToModel(viewModel, establishment, true);
            }
            else
                establishment = ConvertViewModelToModel(viewModel, establishment, false);

            if (newData)
                Insert<Establishment>(context, establishment, true);
            else
                Update<Establishment>(context, establishment, true);

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

        private Establishment ConvertViewModelToModel(EstablishmentViewModel viewModel, Establishment model, bool isInsert)
        {
            int? idSequence = null;
            if(!isInsert)
                idSequence = model.IdEstablishment != null? model.IdEstablishment : null;
            
            model = new Establishment
            {
                IdEstablishment = idSequence,
                Address = viewModel.Address,
                Agency = viewModel.Agency,
                Account = viewModel.Account,
                Category = viewModel.Category,
                City = viewModel.City,
                CNPJ = viewModel.CNPJ,
                CompanyName = viewModel.CompanyName,
                Email = viewModel.Email,
                FantasyName = viewModel.FantasyName,
                PhoneNumber = viewModel.PhoneNumber,
                RegisterDate = viewModel.RegisterDate,
                State = viewModel.State,
                Status = viewModel.Status
            };

            return model;
        }

        private EstablishmentViewModel ConvertModelToViewModel(Establishment model, EstablishmentViewModel viewModel)
        {
            var idSequence = model.IdEstablishment != null ? model.IdEstablishment : null;

            viewModel = new EstablishmentViewModel
            {
                IdSequence = idSequence.ToString(),
                Address = model.Address,
                Agency = model.Agency,
                Account = model.Account,
                Category = model.Category,
                City = model.City,
                CNPJ = model.CNPJ,
                CompanyName = model.CompanyName,
                Email = model.Email,
                FantasyName = model.FantasyName,
                PhoneNumber = model.PhoneNumber.ToString(),
                RegisterDate = model.RegisterDate,
                State = model.State,
                Status = model.Status
            };

            return viewModel;
        }

    }
}
