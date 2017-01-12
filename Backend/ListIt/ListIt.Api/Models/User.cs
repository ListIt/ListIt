using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity.EntityFramework;

namespace ListIt.Api.Models
{
    public class User : IdentityUser
    {
        // custom field + relationships go here
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime? BirthDate { get; set; }
        public string ZipCode { get; set; }
        public string ProfilePhotoUrl { get; set; }

        public virtual ICollection<Product> Products { get; set; }
        public virtual ICollection<Transaction> Transactions { get; set; }
        public virtual ICollection<Bookmark> Bookmarks { get; set; }

    }
}