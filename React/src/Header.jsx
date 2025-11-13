import { Link, useNavigate } from "react-router-dom";
import { Flex, HStack, Box, Image} from "@chakra-ui/react";
import logo from './assets/arasakaHeader.webp';



export function Header(){

    const navigate = useNavigate();
    
    function cerrarSesion(){
        sessionStorage.removeItem("usuario");
        navigate("/");
}

    return(
        <>
            <Flex w="100%" h="70px" p="6px" align="center" justify="space-between" bgColor="#f7f7f7" color='white'>
            <HStack as='nav' spacing='10px' >
                <Image src={logo} h="50px" ml='8px' mr='8px' />
                <Link to={'/dashboard'}><Box ml='8px' mr='8px' color="black" _hover={{color:"gray.500"}}>Listado</Box></Link>
                <Link to={'/student'}> <Box ml='8px' mr='8px' color="black" _hover={{color:"gray.500"}}>Nuevo</Box> </Link>
            </HStack>
            <HStack>
                <Box color="black" mr='20px' cursor='pointer' _hover={{color:"gray.500"}} onClick={()=> cerrarSesion()}>Cerrar Sesion</Box>
            </HStack>
            </Flex>
        </>
    )
}