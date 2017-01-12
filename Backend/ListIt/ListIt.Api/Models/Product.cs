using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ListIt.Api.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime Posted { get; set; }
        public DateTime? Sold { get; set; }
        public bool Active { get; set; }
        public string UserId { get; set; }
        public int CategoryId { get; set; }
        public string Amount { get; set; }
        public int Condition { get; set; }

        //Navigation Properties
        public virtual User User { get; set; }
      
        public virtual Category Category { get; set; }
        public virtual ICollection<ProductPhoto> ProductPhotos { get; set; }

        public virtual ICollection<ProductTag> ProductTags { get; set; }
        public virtual ICollection<Bookmark> Bookmarks { get; set; }
        public virtual Transaction Transaction { get; set; }


    }
}
