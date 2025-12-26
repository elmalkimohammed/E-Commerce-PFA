using dotNET.Repository;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// Dependency Injections & MongoDB setup
builder.Services.AddSingleton<IMongoClient>(s => new MongoClient("mongodb://localhost:27017"));
builder.Services.AddScoped(s => s.GetRequiredService<IMongoClient>().GetDatabase("EcommercePFA"));

builder.Services.AddScoped<productRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
