using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ListIt.Api.Models
{
    public class ProductPhoto
    {
        public int ProductPhotoId { get; set; }
        public string Name { get; set; }
        public int ProductId { get; set; }
        public string Url { get; set; }
        public bool Active { get; set; }
        public virtual Product Product { get; set; }
    }
}