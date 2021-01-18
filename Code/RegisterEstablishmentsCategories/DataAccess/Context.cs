using Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class Context : DbContext
    {
        public Context(string contextName) : base("name=" + contextName)
        {
                Database.SetInitializer<Context>(null);
        }

        #region DbSets

        public DbSet<Establishment> Establishment { get; set; }
        public DbSet<Login> Login { get; set; }       

        public override int SaveChanges()
        {
            try
            {
                return base.SaveChanges();
            }
            catch (DbEntityValidationException ex)
            {
                StringBuilder sb = new StringBuilder();
                foreach (var failure in ex.EntityValidationErrors)
                {
                    sb.AppendFormat("{0} failed validation\n", failure.Entry.Entity.GetType());
                    foreach (var Error in failure.ValidationErrors)
                    {
                        sb.AppendFormat("- {0} : {1}", Error.PropertyName, Error.ErrorMessage);
                        sb.AppendLine();
                    }
                }

                // Add the original exception as the innerException
                throw new DbEntityValidationException("Entity Validation Failed - Errors follow:\n" + sb.ToString(), ex);
            }
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);            

            #endregion

            #region Configurations

            modelBuilder.Configurations.Add(new Configurations.Login());
            modelBuilder.Configurations.Add(new Configurations.Establishment());

            #endregion
        }

    }
}
