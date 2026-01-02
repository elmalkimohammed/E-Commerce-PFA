
using MongoDB.Driver;
using System.Runtime.Intrinsics.X86;
using WebApplication1.repo;

namespace WebApplication1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();
            builder.Services.AddSingleton<IMongoClient>(s=>new MongoClient("mongodb://localhost:27017"));
            builder.Services.AddScoped(s=> s.GetRequiredService<IMongoClient>().GetDatabase("Ecommerce"));
            builder.Services.AddScoped<ProduitListRepo>();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowReact", policy => policy.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod());
            });
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }

            app.UseHttpsRedirection();
            // Use CORS
            app.UseCors("AllowReact");

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
