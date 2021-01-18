using System.Data.Entity.ModelConfiguration;

namespace DataAccess.Configurations
{
    public class Login : EntityTypeConfiguration<Models.Login>
    {
        public Login()
        {
            ToTable("tb_user");
            HasKey(x => x.id_sequence);
            Property(x => x.id_sequence).HasColumnName("id_sequence_user").IsRequired();

            Property(x => x.name).HasColumnName("nome_user").HasMaxLength(30).IsRequired();
            Property(x => x.email).HasColumnName("email_user").HasMaxLength(50).IsRequired();
            Property(x => x.password).HasColumnName("password_user").HasMaxLength(15).IsRequired();
        }
    }
}
