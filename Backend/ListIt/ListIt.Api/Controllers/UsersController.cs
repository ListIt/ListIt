using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ListIt.Api.Infrastructure;
using ListIt.Api.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Web.Http.Description;

namespace ListIt.Api.Controllers
{
    public class UsersController : ApiController
    {
        private UserManager<User> _userManager;
        private ListItDataContext db;

        public UsersController()
        {
            db = new ListItDataContext();
            var store = new UserStore<User>(db);

            _userManager = new UserManager<User>(store);
        }

        // GET: api/Users
        public IHttpActionResult GetUsers()
        {
            return Ok(db.Users);
        }

        // GET: api/Users/5
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUser(int id)
        {
            User User = db.Users.Find(id);
            if (User == null)
            {
                return NotFound();
            }

            return Ok(new
            {
                User.Id,
                User.FirstName,
                User.LastName,
                User.Email,
                User.UserName,
                User.PhoneNumber,
                User.ProfilePhotoUrl/*,
                Bookmarks = User.Bookmarks.Select(b => new
                {
                    b.Product.Name,
                    b.Product.ProductId
                }),
                Transactions = User.Transactions.Select(t => new
                {
                    t.BuyerId,
                    ProductDetails = new
                    {
                        t.Product.Name,
                        t.ProductId,
                        t.Product.Amount,
                        t.Product.CategoryId
                    }
                })*/
            });
        }

        // POST: api/users/register
        [AllowAnonymous]
        [Route("api/users/register")]
        public IHttpActionResult Register(RegistrationModel registration)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = new User
            {
                UserName = registration.EmailAddress
            };

            var result = _userManager.Create(user, registration.Password);

            if (result.Succeeded)
            {
                return Ok();
            }
            else
            {
                return BadRequest("Invalid user registration");
            }
        }

        protected override void Dispose(bool disposing)
        {
            _userManager.Dispose();
        }
    }
}
