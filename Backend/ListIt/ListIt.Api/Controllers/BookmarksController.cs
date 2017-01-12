using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ListIt.Api.Infrastructure;
using ListIt.Api.Models;

namespace ListIt.Api.Controllers
{
    public class BookmarksController : ApiController
    {
        private ListItDataContext db = new ListItDataContext();

        // GET: api/Bookmarks
        public IQueryable<Bookmark> GetBookmarks()
        {
            return db.Bookmarks;
        }

        // GET: api/Bookmarks/5
        [ResponseType(typeof(Bookmark))]
        public IHttpActionResult GetBookmark(string id)
        {
            Bookmark bookmark = db.Bookmarks.Find(id);
            if (bookmark == null)
            {
                return NotFound();
            }

            return Ok(bookmark);
        }

        // PUT: api/Bookmarks/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBookmark(string id, Bookmark bookmark)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bookmark.UserId)
            {
                return BadRequest();
            }

            db.Entry(bookmark).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookmarkExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Bookmarks
        [ResponseType(typeof(Bookmark))]
        public IHttpActionResult PostBookmark(Bookmark bookmark)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Bookmarks.Add(bookmark);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (BookmarkExists(bookmark.UserId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = bookmark.UserId }, bookmark);
        }

        // DELETE: api/Bookmarks/5
        [ResponseType(typeof(Bookmark))]
        public IHttpActionResult DeleteBookmark(string id)
        {
            Bookmark bookmark = db.Bookmarks.Find(id);
            if (bookmark == null)
            {
                return NotFound();
            }

            db.Bookmarks.Remove(bookmark);
            db.SaveChanges();

            return Ok(bookmark);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BookmarkExists(string id)
        {
            return db.Bookmarks.Count(e => e.UserId == id) > 0;
        }
    }
}