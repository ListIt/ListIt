namespace ListIt.Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddProfilePhotoColumn : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "ProfilePhotoUrl", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "ProfilePhotoUrl");
        }
    }
}
