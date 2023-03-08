import { Avatar, Box, Flex, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'

const NavBar = () => {
    return (
        <Flex bg='cyan.700' align='center' h='8vh'>
            <Flex w='40%' mr='10%' justify='center'>
                <Text fontWeight='extrabold' fontSize='3xl' color='whiteAlpha.900' fontStyle='italic'>Red Social</Text>
            </Flex>
            <InputGroup bg='whiteAlpha.700' borderRadius='3px'>
                <Input placeholder='Buscar contenido' />
                <InputRightElement children={<SearchIcon/>}/>
            </InputGroup>
            <Box  mr='3%' ml='22%'>
                <Menu>
                    <MenuButton>
                        <Avatar size='md' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Perfil</MenuItem>
                        <MenuItem>Configuracion</MenuItem>
                        <MenuItem>Cerrar Sesion</MenuItem>
                    </MenuList>

                </Menu>
            </Box>
        </Flex>
    )
}

export default NavBar