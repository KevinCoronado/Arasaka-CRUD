import { useState,useEffect } from "react";
import * as API from './services/data';
import { Link } from "react-router-dom";
import { Box, TableContainer, Table, Thead, Th, Tr, Tbody,Td } from "@chakra-ui/react";
import { FaEdit, FaStickyNote, FaTrashAlt } from "react-icons/fa";


export function StudentList(){

    let usuario = sessionStorage.getItem("usuario");

    const [students, setStudents] = useState([]);

    useEffect(()=>{
        API.getStudents(usuario).then(setStudents);
    })


    function deleteStudent(id){
        API.deleteStudent(id).then(result => {
            if(result == "true"){
                Swal.fire({
                    title: "Eliminado",
                    text: "Se elimino correctamente",
                    icon: "success"
                });
            }else{
                Swal.fire({
                    title: "Error",
                    text: "Error al eliminar",
                    icon: "error"
                });
            }
        })

    }

    return(
        <>
        <Box m="50px">
            <TableContainer>
                    <Table sixe="md" variant='striped' colorSchema="gray">
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>DNI</Th>
                        <Th>Nombre</Th>
                        <Th>Direccion</Th>
                        <Th>Edad</Th>
                        <Th>Email</Th>
                        <Th>Asignatura</Th>
                        <Th></Th>
                        <Th></Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        students?.map(student => (
                            <Tr key={student.id}>
                                <Td>{student.id}</Td>
                                <Td>{student.dni}</Td>
                                <Td>{student.nombre}</Td>
                                <Td>{student.direccion}</Td>
                                <Td>{student.edad}</Td>
                                <Td>{student.email}</Td>
                                <Td>{student.asignatura}</Td>
                                <Td ><Link to={'/student/'+student.id}><FaEdit /></Link></Td>
                                <Td> <Link to={'/student/califications/'+student.matriculaId}><FaStickyNote /></Link> </Td>
                                <Td onClick={() => deleteStudent(student.id)}><FaTrashAlt  /></Td>
                            </Tr>
                        ))
                    }
                </Tbody>
                </Table>
            </TableContainer>
            </Box>
        </>
    )
}