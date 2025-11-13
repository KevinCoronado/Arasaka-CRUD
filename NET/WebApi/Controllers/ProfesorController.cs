using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AccesoDatos.Models;
using AccesoDatos.Operaciones;


namespace WebApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class ProfesorController : ControllerBase
    {
        private ProfesorDAO profesorDAO = new ProfesorDAO();
        [HttpPost("autenticacion")]
        public string login([FromBody] Profesor prof)
        {   
            var profesor = profesorDAO.login(prof.Usuario,prof.Pass);

            if(profesor != null)
            {
                return profesor.Usuario;
            }
            else
            {
                return null;
            }
        } 
    }
}
