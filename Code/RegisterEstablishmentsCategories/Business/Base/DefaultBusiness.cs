using DataAccess;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace Business.Base
{
    public class DefaultBusiness 
    {
        public T GetSingle<T>(Context dbContext, Expression<Func<T, bool>> predicate) where T : class
        {
            return new DefaultDataAccess().GetSingle<T>(dbContext, predicate);
        }

        public T GetSingleOrDefault<T>(Context dbContext, Expression<Func<T, bool>> predicate) where T : class
        {
            return new DefaultDataAccess().GetSingleOrDefault<T>(dbContext, predicate);
        }

        public T GetFirst<T>(Context dbContext, Expression<Func<T, bool>> predicate) where T : class
        {
            return new DefaultDataAccess().GetFirst<T>(dbContext, predicate);
        }

        public T GetFirstOrDefault<T>(Context dbContext, Expression<Func<T, bool>> predicate) where T : class
        {
            return new DefaultDataAccess().GetFirstOrDefault<T>(dbContext, predicate);
        }

        public IQueryable<T> GetList<T>(Context dbContext, Expression<Func<T, bool>> predicate) where T : class
        {
            return new DefaultDataAccess().GetList<T>(dbContext, predicate);
        }

        public IQueryable<T> GetList<T>(Context dbContext) where T : class
        {
            return new DefaultDataAccess().GetList<T>(dbContext);
        }

        public void Insert<T>(Context dbContext, T model, bool saveChanges) where T : class
        {
            new DefaultDataAccess().Insert<T>(dbContext, model, saveChanges);
        }

        public void Update<T>(Context dbContext, T model, bool saveChanges = true) where T : class
        {
            new DefaultDataAccess().Update<T>(dbContext, model, saveChanges);
        }

        public void Exclude<T>(Context dbContext, T model, bool saveChanges = true) where T : class
        {
            new DefaultDataAccess().Exclude<T>(dbContext, model, saveChanges);
        }
        
        public bool SaveChanges(Context dbContext)
        {
            return new DefaultDataAccess().SaveChanges(dbContext);
        }
    }
}
