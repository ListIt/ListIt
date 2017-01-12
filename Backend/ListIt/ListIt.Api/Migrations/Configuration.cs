namespace ListIt.Api.Migrations
{
    using Infrastructure;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
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
            if(context.Users.Count() == 0)
            {
                SeedCategories(context);
                SeedUsers(context);
                SeedProducts(context);
            }
        }

        private void SeedCategories(ListItDataContext context)
        {
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

            context.SaveChanges();
        }

        private void SeedUsers(ListItDataContext context)
        {
            var userStore = new UserStore<User>(context);
            using (var manager = new UserManager<User>(userStore))
            {
                for (int i = 0; i < 3; i++)
                {
                    var randomEmail = Faker.InternetFaker.Email();

                    manager.Create(new User
                    {
                        BirthDate = Faker.DateTimeFaker.BirthDay(),
                        Email = randomEmail,
                        FirstName = Faker.NameFaker.FirstName(),
                        LastName = Faker.NameFaker.LastName(),
                        PhoneNumber = Faker.PhoneFaker.Phone(),
                        UserName = randomEmail,
                        ZipCode = Faker.LocationFaker.ZipCode()
                    }, "password123");
                }
            }

            context = new ListItDataContext();
        }

        private void SeedProducts(ListItDataContext context)
        {
            foreach (var user in context.Users)
            {
                int randomNumber = Faker.NumberFaker.Number(0, 5);

                for (int i = 0; i < randomNumber; i++)
                {
                    var product = new Product
                    {
                        UserId = user.Id,
                        Active = Faker.BooleanFaker.Boolean(),
                        Amount = Faker.NumberFaker.Number(10, 2000).ToString(),
                        CategoryId = Faker.NumberFaker.Number(1, context.Categories.Count()),
                        Condition = Faker.NumberFaker.Number(1,6),
                        Description = Faker.TextFaker.Sentences(2),
                        Name = Faker.TextFaker.Sentence(),
                        Posted = Faker.DateTimeFaker.DateTime(DateTime.Now.AddYears(-1), DateTime.Now)
                    };

                    context.Products.Add(product);
                }
            }

            context.SaveChanges();
        }
    }
}
