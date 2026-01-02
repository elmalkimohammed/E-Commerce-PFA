using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using WebApplication1.repo;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProduitListController : ControllerBase
    {
        public ProduitListRepo ProduitCollection;
        public ProduitListController(ProduitListRepo collection)
        {
            ProduitCollection = collection;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var donnes = await ProduitCollection.GetAllProducts();

            return Ok(donnes);
        }
    }
}