using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TrefleApp.Server.Services;

namespace TrefleApp.Server.Controllers {
    // localhost/api/trefle
    [Route("api/[controller]")]
    [ApiController]
    public class TrefleController : ControllerBase {
        private readonly TrefleApiService _trefleApiService;

        public TrefleController(TrefleApiService trefleApiService) {
            _trefleApiService = trefleApiService;
        }

        [HttpGet("plants/{plantId}")]
        public async Task<ActionResult> GetPlantById(int plantId) {
            var response = await _trefleApiService.GetPlantById(plantId);            

            return Ok(response);
        }

    }
}