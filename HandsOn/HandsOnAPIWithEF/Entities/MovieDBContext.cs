using Microsoft.EntityFrameworkCore;
namespace HandsOnAPIWithEF.Entities
{
    public class MovieDBContext:DbContext
    {
        public MovieDBContext()
        {

        }
        public DbSet<Movie> Movies { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
             optionsBuilder.UseSqlServer(@"server=DESKTOP-4O1D65I\SQLEXPRESS;database=Movie518DB;trusted_connection=true");
            //optionsBuilder.UseSqlServer(@"Server=tcp:myserver12.database.windows.net,1433;Initial Catalog=moviedb;Persist Security Info=False;User ID=myserver;Password=server123@;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
        }
    }
}
