using dotNET.Models;
using MongoDB.Driver;

namespace WebApplication1.repo
{
    public class ProduitListRepo
    {
        public IMongoCollection<ProduitListModel> _Produitcollection;
        public ProduitListRepo(IMongoDatabase collection)
        {
            _Produitcollection = collection.GetCollection<ProduitListModel>("ProduitList");
        }
        public async Task<List<ProduitListModel>> GetAllProducts()
        {
            return await _Produitcollection.Find(_ => true).ToListAsync();
        }
    }
}
