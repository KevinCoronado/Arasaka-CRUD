using AccesoDatos.Context;
using AccesoDatos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccesoDatos.Operaciones
{
    public class ProfesorDAO
    {
        public ProyectoContext contexto = new ProyectoContext();

        public Profesor login(string usuario, string clave)
        {
            var prof = contexto.Profesors.Where(p => p.Usuario == usuario && p.Pass == clave).FirstOrDefault();

            return prof;
        }
            
    }
}
