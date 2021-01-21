using System.Data.Entity.ModelConfiguration;

namespace DataAccess.Configurations
{
    public class Status : EntityTypeConfiguration<Models.Status>
    {
        public Status()
        {
            ToTable("tb_status");
            HasKey(x => x.IdSequence);
            Property(x => x.IdSequence).HasColumnName("id_sequence_status").IsRequired();
            Property(x => x.Name).HasColumnName("ds_name").HasMaxLength(30).IsRequired();
            Property(x => x.CreateDate).HasColumnName("dt_createDate").IsOptional();
        }
    }
}
