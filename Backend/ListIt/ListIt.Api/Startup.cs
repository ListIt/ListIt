using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using ListIt.Api.Providers;

[assembly: OwinStartup(typeof(ListIt.Api.Startup))]
namespace ListIt.Api
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration();
            WebApiConfig.Register(config);
            ConfigureOAuth(app);
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            app.UseWebApi(config);
            
        }

        public void ConfigureOAuth(IAppBuilder app)
        {
            var authorizationOptions = new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/api/users/login"),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
                Provider = new LocalAuthorizationProvider()
            };

            var authenticationOptions = new OAuthBearerAuthenticationOptions();

            app.UseOAuthAuthorizationServer(authorizationOptions);
            app.UseOAuthBearerAuthentication(authenticationOptions);
        }
    }
}