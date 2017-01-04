namespace ListIt.Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemovePluralization : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.Bookmarks", newName: "Bookmark");
            RenameTable(name: "dbo.Products", newName: "Product");
            RenameTable(name: "dbo.Categories", newName: "Category");
            RenameTable(name: "dbo.ProductPhotoes", newName: "ProductPhoto");
            RenameTable(name: "dbo.ProductTags", newName: "ProductTag");
            RenameTable(name: "dbo.Tags", newName: "Tag");
            RenameTable(name: "dbo.Transactions", newName: "Transaction");
        }
        
        public override void Down()
        {
            RenameTable(name: "dbo.Transaction", newName: "Transactions");
            RenameTable(name: "dbo.Tag", newName: "Tags");
            RenameTable(name: "dbo.ProductTag", newName: "ProductTags");
            RenameTable(name: "dbo.ProductPhoto", newName: "ProductPhotoes");
            RenameTable(name: "dbo.Category", newName: "Categories");
            RenameTable(name: "dbo.Product", newName: "Products");
            RenameTable(name: "dbo.Bookmark", newName: "Bookmarks");
        }
    }
}
