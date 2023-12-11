using Microsoft.EntityFrameworkCore;
namespace HandsOnAPIUsingImageUpload.Entities
{
    public class MyContext:DbContext
    {
        public DbSet<Product> Products { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"server=DESKTOP-4O1D65I\SQLEXPRESS;database=MyDB;trusted_connection=true;TrustServerCertificate=True");
        }
    }
}
