import { Header } from "./Header";
import { useState } from "react";
import * as API from './services/data';
import { Center, Box, Heading, FormLabel, Input, FormControl , Select} from "@chakra-ui/react";

export function StudentNew(){

    const [student, setStudent] = useState({dni:'',nombre:'',direccion:'',edad:'',email:'',asignatura:'1'});


    function handleSubmit(e){
        e.preventDefault();
        API.createStudent(student).then(result => {
            if(result=="true"){
                Swal.fire({
                    title: "Creado",
                    text: "Se creo correctamente",
                    icon: "success"
                });
                document.getElementById("formulario").reset();
            }
            else{
                Swal.fire({
                    title: "Error",
                    text: "Error al crear",
                    icon: "error"
                });
                document.getElementById("formulario").reset();

            }
        })
    }

    return(
        <>
            <Header />
            <Center>
            <Box m="40px" boxShadow='xl' borderRadius="md" width="40%" id="caja">
                <Box textAlign="center">
                    <Heading>
                        Nuevo Alumno
                    </Heading>
                </Box>
                <Box p="20px">
                    <form id='formulario' onSubmit={handleSubmit}>
                    <FormControl mt="3px">
                        <FormLabel>DNI</FormLabel>
                        <Input type="text" id="dni" required onChange={event => setStudent({...student,dni:event.target.value})}></Input>
                    </FormControl>
                    <FormControl mt="3px">
                        <FormLabel>Nombre</FormLabel>
                        <Input type="text" id="nombre" required onChange={event => setStudent({...student,nombre:event.target.value })}  ></Input>
                    </FormControl>
                    <FormControl mt="3px">
                        <FormLabel>Direccion</FormLabel>
                        <Input type="text" id="direccion" required onChange={event => setStudent({...student,direccion:event.target.value })}></Input>
                    </FormControl>
                    <FormControl mt="3px">
                        <FormLabel>Edad</FormLabel>
                        <Input type="number" id="edad" required onChange={event => setStudent({...student,edad:event.target.value })}></Input>
                    </FormControl>
                    <FormControl mt="3px">
                        <FormLabel>Email</FormLabel>
                        <Input type="text" id="email" required onChange={event => setStudent({...student,email:event.target.value })}></Input>
                    </FormControl>
                    <FormControl mt="3px">
                        <FormLabel>Asignatura</FormLabel>
                        <Select id="asignatura" onChange={event => setStudent({...student,asignatura:event.target.value})}>
                        <option value="1">Matematicas</option>    
                        <option value="2">Informatica</option>  
                        <option value="3">Ingles</option>  
                        <option value="4">Lengua</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Input type="submit" mt="30px" id="editar" borderColor="teal" value="Nuevo"></Input>
                    </FormControl>
            </form>
                </Box>
            

            </Box>
            </Center>
        </>
    )
}