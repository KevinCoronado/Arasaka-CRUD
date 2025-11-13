using AccesoDatos.Operaciones;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AccesoDatos.Models;   

namespace WebApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class AlumnoControlloer : ControllerBase
    {
        private AlumnoDAO alumnoDAO = new AlumnoDAO();  

        [HttpGet("alumnosProfesor")]
        public List<AlumnoProfesor> GetAlumnosProfesores(string usuario)
        {
            return alumnoDAO.seleccionarAlumnosProfesor(usuario);
        }


        [HttpGet("alumno")]
        public Alumno getAlumno(int id)
        {
            return alumnoDAO.seleccionar(id);
        }


        [HttpPut("alumno")]
        public bool updateAlumno([FromBody]Alumno alumno)
        {
            return alumnoDAO.actualizar(alumno.Id, alumno.Dni, alumno.Nombre, alumno.Direccion, alumno.Edad, alumno.Email);
        }


        [HttpPost("alumno")]
        public bool insertMatricula([FromBody]Alumno alumno, int id_asig)
        {
            return alumnoDAO.insertaryMatricular(alumno.Dni, alumno.Nombre, alumno.Direccion, alumno.Edad, alumno.Email, id_asig);
        }


        [HttpDelete("alumno")]
        public bool deleteAlumno(int id)
        {
            return alumnoDAO.eliminarAlumno(id);
        } 



    }
}
