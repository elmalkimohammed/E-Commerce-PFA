using dotNET.Models;
using dotNET.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dotNET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductDetailsController : ControllerBase
    {
        // Dependency injection of the product repository
        private readonly productRepository _repository;

        public ProductDetailsController(productRepository repo)
        {
            _repository = repo;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductById(string requestedId)
        {
            // Fetch the product details from the repository
            var searchedProd = await _repository.GetProductById(requestedId) ;

            // Failing to find the product returns null
            if (searchedProd == null )
            {
                return NotFound();
            }

            // Create an anonymous object to shape the response
            var response = new
            {
                searchedProd.Id,
                searchedProd.Name,
                searchedProd.Description,
                searchedProd.Price,
                searchedProd.Stock,
                searchedProd.Attributes,
                searchedProd.Images
            };

            // Return the shaped response
            return Ok(response);

        }
    }
}
