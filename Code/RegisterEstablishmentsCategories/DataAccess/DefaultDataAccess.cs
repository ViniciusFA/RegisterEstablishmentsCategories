using System;
using System.Linq;
using System.Text;
using System.Data.Entity;
using System.Linq.Expressions;
using System.ComponentModel;

namespace DataAccess
{
    public class DefaultDataAccess
    {
        public T GetSingle<T>(Context dbContext, Expression<Func<T, bool>> predicate) where T : class
        {
            return dbContext.Set<T>().Single(predicate);
        }

        public T GetSingleOrDefault<T>(Context dbContext, Expression<Func<T, bool>> predicate) where T : class
        {
            return dbContext.Set<T>().SingleOrDefault(predicate);
        }

        public T GetFirst<T>(Context dbContext, Expression<Func<T, bool>> predicate) where T : class
        {
            return dbContext.Set<T>().First(predicate);
        }

        public T GetFirstOrDefault<T>(Context dbContext, Expression<Func<T, bool>> predicate) where T : class
        {
            return dbContext.Set<T>().FirstOrDefault(predicate);
        }

        public IQueryable<T> GetList<T>(Context dbContext, Expression<Func<T, bool>> predicate) where T : class
        {
            return dbContext.Set<T>().Where(predicate);
        }

        public IQueryable<T> GetList<T>(Context dbContext) where T : class
        {
            return dbContext.Set<T>();
        }

        public bool Exist<T>(Context dbContext, Expression<Func<T, bool>> predicate) where T : class
        {
            return dbContext.Set<T>().Any<T>(predicate);
        }

        public void Insert<T>(Context dbContext, T model, bool saveChanges) where T : class
        {
            dbContext.Set<T>().Add(model);

            if (saveChanges)
            {
                try
                {
                    dbContext.SaveChanges();
                }

                catch (System.Data.Entity.Validation.DbEntityValidationException ex)
                {
                    StringBuilder sb = new StringBuilder();

                    foreach (var failure in ex.EntityValidationErrors)
                    {
                        sb.AppendFormat("{0} failed validation\n", failure.Entry.Entity.GetType());
                        foreach (var error in failure.ValidationErrors)
                        {
                            sb.AppendFormat("- {0} : {1}", error.PropertyName, error.ErrorMessage);
                            sb.AppendLine();
                        }
                    }

                    throw new System.Data.Entity.Validation.DbEntityValidationException(
                        "Entity Validation Failed - errors follow:\n" +
                        sb.ToString(), ex
                    );

                }
            }
        }

        public void Update<T>(Context dbContext, T model, bool saveChanges) where T : class
        {
            var entry = dbContext.Entry(model);
            entry.State = EntityState.Modified;
            if (saveChanges)
            {
                try
                {
                    dbContext.SaveChanges();
                }
                catch (System.Data.Entity.Validation.DbEntityValidationException ex)
                {
                    StringBuilder sb = new StringBuilder();

                    foreach (var failure in ex.EntityValidationErrors)
                    {
                        sb.AppendFormat("{0} failed validation\n", failure.Entry.Entity.GetType());
                        foreach (var error in failure.ValidationErrors)
                        {
                            sb.AppendFormat("- {0} : {1}", error.PropertyName, error.ErrorMessage);
                            sb.AppendLine();
                        }
                    }

                    throw new System.Data.Entity.Validation.DbEntityValidationException(
                        "Entity Validation Failed - errors follow:\n" +
                        sb.ToString(), ex
                    ); // Add the original exception as the innerException
                }
            }
        }

        public void Exclude<T>(Context dbContext, T model, bool saveChanges) where T : class
        {
            dbContext.Set<T>().Remove(model);
            if (saveChanges)
            {
                try
                {
                    dbContext.SaveChanges();
                }
                catch (System.Data.Entity.Validation.DbEntityValidationException ex)
                {
                    StringBuilder sb = new StringBuilder();

                    foreach (var failure in ex.EntityValidationErrors)
                    {
                        sb.AppendFormat("{0} failed validation\n", failure.Entry.Entity.GetType());
                        foreach (var error in failure.ValidationErrors)
                        {
                            sb.AppendFormat("- {0} : {1}", error.PropertyName, error.ErrorMessage);
                            sb.AppendLine();
                        }
                    }

                    throw new System.Data.Entity.Validation.DbEntityValidationException(
                        "Entity Validation Failed - errors follow:\n" +
                        sb.ToString(), ex
                    ); // Add the original exception as the innerException
                }
            }
        }

        public bool SaveChanges(Context dbContext)
        {
            try
            {
                return dbContext.SaveChanges() > 0;
            }
            catch (System.Data.Entity.Validation.DbEntityValidationException ex)
            {

                StringBuilder sb = new StringBuilder();

                foreach (var failure in ex.EntityValidationErrors)
                {
                    sb.AppendFormat("{0} failed validation\n", failure.Entry.Entity.GetType());
                    foreach (var error in failure.ValidationErrors)
                    {
                        sb.AppendFormat("- {0} : {1}", error.PropertyName, error.ErrorMessage);
                        sb.AppendLine();
                    }
                }

                throw new System.Data.Entity.Validation.DbEntityValidationException(
                    "Entity Validation Failed - errors follow:\n" +
                    sb.ToString(), ex
                ); // Add the original exception as the innerException
            }
        }
    }
}
