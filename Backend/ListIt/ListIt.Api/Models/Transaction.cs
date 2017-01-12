using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ListIt.Api.Models
{
    public class Transaction
    {
        public int TransactionId { get; set; }
        public int ProductId { get; set; }
        public string BuyerId { get; set; }
        public virtual User User { get; set; }
        public virtual Product Product { get; set; }
    }
}