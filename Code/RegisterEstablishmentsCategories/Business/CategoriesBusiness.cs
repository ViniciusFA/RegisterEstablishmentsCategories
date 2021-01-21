using Business.Base;
using DataAccess;
using Models;
using Models.ViewModel;
using PagedList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business
{
    public class CategoryBusiness : DefaultBusiness
    {

        public IPagedList<CategoryViewModel> GetAll(Context context, CategoryViewModel viewModel, int pageNumber, int pageSize)
        {
            var result = new List<CategoryViewModel>();

            var listData = this.GetList<Category>(context);

            listData.OrderBy(o => o.CategoryName)
                    .ToList().ForEach(e =>
                    {
                        result.Add(new CategoryViewModel()
                        {
                            IdSequence = e.CategoryCode,
                            CategoryName = e.CategoryName,
                            CreateDate = DateTime.Now.ToString("dd/MM/yyyy")
                        });
                    });

            return result.ToPagedList(pageNumber, pageSize);
        }

        public CategoryViewModel GetSingleOrDefault(Context context, int IdSequence)
        {
            CategoryViewModel viewModel = null;

            var model = this.GetSingleOrDefault<Category>(context, x => x.CategoryCode == IdSequence);
            if (model != null)
            {
                viewModel = new CategoryViewModel
                {
                    IdSequence = model.CategoryCode,
                    CategoryName = model.CategoryName,
                    CreateDate = model.CreateDate.ToString("dd/MM/yyyy")
                };
            }

            return viewModel;
        }

        public bool SaveUpdateCategory(Context context, CategoryViewModel viewModel)
        {
            var newData = false;

            Category model = new Category();

            var category = this.GetFirstOrDefault<Category>(context, x => x.CategoryCode == viewModel.IdSequence);
            if (category == null)
            {
                newData = true;
                model = ConvertViewModelToModel(context, viewModel, category, true);
            }
            else
                model = ConvertViewModelToModel(context, viewModel, category, false);

            if (newData)
                Insert<Category>(context, model, true);
            else
            {
                context.Entry(category).CurrentValues.SetValues(model);
                Update<Category>(context, category, true);
            }

            return true;
        }

        public bool DeleteCategory(Context context, int IdSequence)
        {
            var category = GetFirstOrDefault<Category>(context, x => x.CategoryCode == IdSequence);
            if (category != null)
            {
                Exclude<Category>(context, category, true);
                return true;
            }

            return false;
        }

        private Category ConvertViewModelToModel(Context context, CategoryViewModel viewModel, Category model, bool isInsert)
        {

            model = new Category
            {
                CategoryCode = viewModel.IdSequence,
                CategoryName = viewModel.CategoryName,
                CreateDate = DateTime.Now
            };

            return model;
        }

        private CategoryViewModel ConvertModelToViewModel(Context context, Category model, CategoryViewModel viewModel)
        {
            viewModel = new CategoryViewModel
            {
                IdSequence = model.CategoryCode,
                CategoryName = model.CategoryName,
                CreateDate = DateTime.Now.ToString("dd/MM/yyyy")
            };

            return viewModel;
        }

    }
}
