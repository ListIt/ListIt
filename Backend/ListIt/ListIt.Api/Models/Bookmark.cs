using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ListIt.Api.Models
{
    public class Bookmark
    {
        public int BookmarkId { get; set; }
        public int ProductId { get; set; }
        public string UserId { get; set; }

        public virtual User User { get; set; }
        public virtual Product Product { get; set; }

    }
}