import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import * as API from './services/data';
import { Center, Input, Box, Heading, FormControl, FormLabel } from "@chakra-ui/react";


export function StudentEdit(){

    let params =useParams();
    const [student, setStudent] = useState([])

    useEffect(() => {
        API.getStudentDetails(params.studentId).then(setStudent)
    },[])

    function handleSubmit(e){
        e.preventDefault();
        API.editStudent(student).then(result => {
            if(result == "true"){
                Swal.fire({
                    title: "Editado",
                    text: "Se edito correctamente",
                    icon: "success"
                });
            }else{
                Swal.fire({
                    title: "Error",
                    text: "Error al editar",
                    icon: "error"
                });
            }
        })
    }

    return(
        <>
            <Header />  
            <Center>
                <Box m="40px" boxShadow="xl" borderRadius="md" width="40%" id="caja">
                    <Box textAlign="center">
                        <Heading>Editar Alumno</Heading>
                    </Box>
                    <Box p="20px">
                        <form id="formulario" onSubmit={handleSubmit}>
                        <FormControl mt="3px"> 
                            <FormLabel>DNI</FormLabel>
                            <Input type="text" id="dni" disabled value={student.dni}></Input>
                        </FormControl>
                        <FormControl mt="3px"> 
                            <FormLabel>Nombre</FormLabel>
                            <Input type="text" id="nombre" required value={student.nombre} onChange={event => setStudent({...student,nombre:event.target.value})}></Input>
                        </FormControl>
                        <FormControl mt="3px"> 
                            <FormLabel>Direccion</FormLabel>
                            <Input type="text" id="direccion" required value={student.direccion} onChange={event => setStudent({...student,direccion:event.target.value})}></Input>
                        </FormControl>
                        <FormControl mt="3px"> 
                            <FormLabel>Edad</FormLabel>
                            <Input type="number" id="edad" required value={student.edad} onChange={event => setStudent({...student,edad:event.target.value})}></Input>
                        </FormControl>
                        <FormControl mt="3px"> 
                            <FormLabel>Email</FormLabel>
                            <Input type="text" id="email" required value={student.email} onChange={event => setStudent({...student,email:event.target.value})}></Input>
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