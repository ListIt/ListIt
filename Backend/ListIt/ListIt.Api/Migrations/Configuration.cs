namespace ListIt.Api.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ListIt.Api.Infrastructure.ListItDataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ListIt.Api.Infrastructure.ListItDataContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            //            < option > Antique </ option >
            //< option > Appliances </ option >
            //< option > Bikes </ option >
            //< option > Boats </ option >
            //< option > Cars </ option >
            //< option > Books </ option >
            //< option > Phones </ option >
            //< option > Trailers </ option >
            //< option > Video Games </ option >

            //   < option > Electronics </ option >

            //   < option > Wanted </ option >

            //   < option > Other </ option >

            context.Categories.AddOrUpdate(
                 c => c.Name,
                 new Category { Name = "Antique" },
                 new Category { Name = "Appliances" },
                 new Category { Name = "Bikes" },
                 new Category { Name = "Boats" },
                 new Category { Name = "Cars" },
                 new Category { Name = "Books" },
                 new Category { Name = "Phones" },
                 new Category { Name = "Trailers" },
                 new Category { Name = "Video Games" },
                 new Category { Name = "Electronics" },
                 new Category { Name = "Wanted" },
                 new Category { Name = "Other" }
            );
        }
    }
}
