using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers
{
    //localhost:5000/api/products
    [Route("api/[controller]")]    
    [ApiController]
    public class ProductsController : ControllerBase
    {
        //localhost:5000/api/products/
        [HttpGet("")]
        public async Task<ActionResult> GetAllProducts(){

            return Ok(new {message = "Response from GetAllProducts!"});
        }

    }
}
