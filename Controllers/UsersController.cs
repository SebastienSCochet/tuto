using Microsoft.AspNetCore.Mvc;

namespace Tutoriel.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        
        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute]int id)
        {
            //return NotFound(new { Name = "John Doe", Age = 30 });

            return StatusCode(450, new { ed = 4 });
        }



    }
}
