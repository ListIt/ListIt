using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ListIt.Api.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace ListIt.Api.Infrastructure
{
    public class ListItDataContext : IdentityDbContext<User>
    {
        public ListItDataContext() : base("ListIt")
        {

        }

        // Define what your tables are
        public IDbSet<Product> Products { get; set; }
        public IDbSet<Category> Categories { get; set; }
        public IDbSet<ProductPhoto> ProductPhotos { get; set; }
        public IDbSet<Bookmark> Bookmarks { get; set; }
        public IDbSet<Transaction> Transactions { get; set; }
        public IDbSet<ProductTag> ProductTags { get; set; }
        public IDbSet<Tag> Tags { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            // Many to 1 relations
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            //// 1 User has many Products
            modelBuilder.Entity<User>()
                        .HasMany(user => user.Products)
                        .WithOptional(product => product.User)
                        .HasForeignKey(product => product.UserId);


            //// 1 Category has many Products
            modelBuilder.Entity<Category>()
                        .HasMany(category => category.Products)
                        .WithRequired(product => product.Category)
                        .HasForeignKey(product => product.CategoryId);


            //// 1 Product has many ProductPhotos
            modelBuilder.Entity<Product>()
                        .HasMany(product => product.ProductPhotos)
                        .WithRequired(productphoto => productphoto.Product)
                        .HasForeignKey(productphoto => productphoto.ProductId);

            //// 1 Product has many ProductTags
            modelBuilder.Entity<Product>()
                        .HasMany(product => product.ProductTags)
                        .WithRequired(producttags => producttags.Product)
                        .HasForeignKey(producttags => producttags.ProductId);

            //// 1 Tag has many ProductTags
            modelBuilder.Entity<Tag>()
                        .HasMany(tag => tag.ProductTags)
                        .WithRequired(producttags => producttags.Tag)
                        .HasForeignKey(producttags => producttags.TagId);

            //// 1 User has many transactions
            modelBuilder.Entity<User>()
                        .HasMany(user => user.Transactions)
                        .WithRequired(transactions => transactions.User)
                        .HasForeignKey(transactions => transactions.BuyerId);

            //// 1 User has many bookmarks
            modelBuilder.Entity<User>()
                        .HasMany(user => user.Bookmarks)
                        .WithRequired(bookmarks => bookmarks.User)
                        .HasForeignKey(bookmarks => bookmarks.UserId);

            //// 1 Product has many bookmarks
            modelBuilder.Entity<Product>()
                        .HasMany(product => product.Bookmarks)
                        .WithRequired(bookmarks => bookmarks.Product)
                        .HasForeignKey(bookmarks => bookmarks.ProductId);





            // Compound Keys

            //// Bookmarks => Many Users + Many Products
            modelBuilder.Entity<Bookmark>()
                        .HasKey(bookmark => new { bookmark.UserId, bookmark.ProductId });


            //// ProductTag => Many Products + Many Tags
            modelBuilder.Entity<ProductTag>()
                        .HasKey(producttag => new { producttag.ProductId, producttag.TagId });

            // 1 to 1 relation
            //// Configure Product & Transaction entity
            modelBuilder.Entity<Product>()
                        .HasOptional(p => p.Transaction) // Mark Transaction property optional in Product entity
                        .WithRequired(t => t.Product); // mark Product property as required in Transaction entity. Cannot save Transaction without Product


            base.OnModelCreating(modelBuilder);
        }
    }
}