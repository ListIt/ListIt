using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ListIt.Api
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {

            //Turn off XML Serialization
            config.Formatters.Remove(config.Formatters.XmlFormatter);

            //CamelCasePropertyNamesContractResolver
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            // CORS (Cross Origin Request Sharing)
            config.EnableCors(new EnableCorsAttribute("*", "*", "*"));

            // Turn on reference handling
            config.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;

            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
