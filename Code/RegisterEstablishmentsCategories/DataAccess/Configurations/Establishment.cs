using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Configurations
{
    public class Establishment : EntityTypeConfiguration<Models.Establishment>
    {
        public Establishment()
        {
            ToTable("tb_establishment");
            HasKey(x => x.IdEstablishment);
            Property(x => x.IdEstablishment).HasColumnName("id_sequence_establishment").IsRequired();
            Property(x => x.CompanyName).HasColumnName("ds_companyName").HasMaxLength(15).IsRequired();
            Property(x => x.FantasyName).HasColumnName("ds_fantasyName").HasMaxLength(50).IsOptional();
            Property(x => x.CNPJ).HasColumnName("ds_cnpj").HasMaxLength(50).IsRequired();
            Property(x => x.Email).HasColumnName("ds_email").HasMaxLength(30).IsRequired();
            Property(x => x.Address).HasColumnName("ds_address").HasMaxLength(50).IsRequired();
            Property(x => x.City).HasColumnName("ds_city").HasMaxLength(15).IsOptional();
            Property(x => x.State).HasColumnName("ds_state").HasMaxLength(30).IsOptional();
            Property(x => x.PhoneNumber).HasColumnName("ds_phoneNumber").HasMaxLength(14).IsRequired();
            Property(x => x.RegisterDate).HasColumnName("dt_registerDate").IsRequired();
            Property(x => x.Category).HasColumnName("ds_category").HasMaxLength(50).IsOptional();
            Property(x => x.Status).HasColumnName("ds_status").HasMaxLength(15).IsOptional();
            Property(x => x.Agency).HasColumnName("ds_agency").HasMaxLength(5).IsRequired();
            Property(x => x.Account).HasColumnName("ds_account").HasMaxLength(8).IsRequired();
        }
    }
}
