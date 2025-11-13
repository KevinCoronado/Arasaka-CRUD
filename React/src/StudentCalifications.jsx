import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from './services/data';
import { Header } from "./Header";
import { Box, TableContainer, Table, Tbody, Thead, Tr, Th, Td, Input, Badge, Center } from "@chakra-ui/react";
import { FaCheck, FaTrash } from "react-icons/fa";


export function StudentCalifications(){
    
    let params = useParams();
    const matriculaId = params.matriculaId;

    const [calificaciones, setCalificaciones] = useState([]);

    const [calificacion, setCalificacion] = useState([]);

    useEffect(()=>{
        API.getCalificaciones(params.matriculaId).then(setCalificaciones);
    });


    let total = 0;
calificaciones?.map(calificacion => (
  total += Number((calificacion.nota * (calificacion.porcentaje / 100)).toFixed(2))
));

// Redondear a dos decimales al final
total = total.toFixed(2);


    function deleteCalificacion(id){
        API.deleteCalificacion(id).then(result =>{
            if(result =="true"){
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

    function createCalificacion(){

        let descrField = document.getElementById("descripcion");
        let notaField = document.getElementById("nota");
        let porcentField = document.getElementById("porcentaje");

        let valid = descrField.value.trim() !== "" && 
                    notaField.value.trim() !== "" &&
                    porcentField.value.trim() !== "";
        if(valid){
            API.createCalificacion(calificacion,matriculaId).then(result =>{
                if(result =="true"){
                    Swal.fire({
                    title: "Agregado",
                    text: "Se agrego correctamente",
                    icon: "success"
                });
                    document.getElementById("descripcion").value="";
                    document.getElementById("nota").value="";
                    document.getElementById("porcentaje").value="";
                }
                else{
                    Swal.fire({
                    title: "Error",
                    text: "Error al agregar",
                    icon: "error"
                });
                }
        })
        }
    }

    return(
        
        <>
            <Header />
            <Box m="100px">
                <TableContainer>
                    <Table size="md">
                        <Thead>
                            <Tr>
                                <Th>Descripcion</Th>
                                <Th>Nota</Th>
                                <Th>Ponderacion</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                                {
                                calificaciones?.map(calificacion =>
                                (
                                    <Tr>
                                        <Td>{calificacion.descripcion}</Td>
                                        <Td>{calificacion.nota}</Td>
                                        <Td>{calificacion.porcentaje}%</Td>
                                        <FaTrash onClick={() => deleteCalificacion(calificacion.id)} />
                                    </Tr>
                                )
                                )
                            }

                            <Tr>
                                <Td><Input type="text" id="descripcion" placeholder="Descripcion" onChange={event => setCalificacion({...calificacion,descripcion:event.target.value})}/></Td>
                                <Td><Input type="number" id="nota" placeholder="Nota" onChange={event => setCalificacion({...calificacion,nota:event.target.value})}/></Td>
                                <Td><Input type="number" id="porcentaje" placeholder="Ponderacion" onChange={event => setCalificacion({...calificacion,porcentaje:event.target.value})} /></Td>
                                <Td><FaCheck cursor="pointer" id="nueva" onClick={() => createCalificacion()}/></Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Center>
                    <Box mt="10px" fontSize="lg">Nota total: 
                        <Badge ml="5px" variant="outline" colorScheme="green">
                            {total}
                        </Badge>
                    </Box>
                </Center>
            </Box>
        </>
    )

}