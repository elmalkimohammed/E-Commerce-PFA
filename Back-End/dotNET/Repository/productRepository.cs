using dotNET.Models;
using MongoDB.Driver;
namespace dotNET.Repository
{
    public class productRepository
    {
        // Reference to MongoDB collection
        private readonly IMongoCollection<Product> _productsCollection;
        // Get/Create a collection named "products" from our database
        public productRepository(IMongoDatabase database)
        {
            _productsCollection = database.GetCollection<Product>("products") ;
        }
        // Database Querries
        public async Task<Product> GetProductById(string id)
        {
            return await _productsCollection.Find(p => p.Id == id).FirstOrDefaultAsync();
        }
    }
}
