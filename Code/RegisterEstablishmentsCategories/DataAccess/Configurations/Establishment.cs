using System.Data.Entity.ModelConfiguration;

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
            Property(x => x.CategoryID).HasColumnName("num_category").IsRequired();
            Property(x => x.StatusID).HasColumnName("num_status").IsRequired();
            Property(x => x.Agency).HasColumnName("ds_agency").HasMaxLength(5).IsRequired();
            Property(x => x.Account).HasColumnName("ds_account").HasMaxLength(8).IsRequired();
            Property(x => x.CreateDate).HasColumnName("dt_createDate").IsRequired();

            HasRequired(x => x.Category)
               .WithMany().HasForeignKey(f => f.CategoryID);

            HasRequired(x => x.Status)
              .WithMany().HasForeignKey(f => f.StatusID);
        }
    }
}
