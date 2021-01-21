using System.Data.Entity.ModelConfiguration;

namespace DataAccess.Configurations
{
    public class Category : EntityTypeConfiguration<Models.Category>
    {
        public Category()
        {
            ToTable("tb_category");
            HasKey(x => x.CategoryCode);
            Property(x => x.CategoryCode).HasColumnName("id_sequence_category").IsRequired();
            Property(x => x.CategoryName).HasColumnName("ds_name").HasMaxLength(15).IsRequired();
            Property(x => x.CreateDate).HasColumnName("dt_createDate").IsRequired();
        }
    }
}
