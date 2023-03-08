import { Avatar, Flex, Text, Icon } from "@chakra-ui/react"
import { AiOutlineUserAdd } from 'react-icons/ai'

const RecommendedUser = () => {
    return (
        <Flex _hover={{background:'blackAlpha.200'}} w='100%' h='70px' p='25px'  align='center'>
            <Avatar size='md' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' mr='20px'/>
            <Flex direction='column'>
                <Text mr='10px' fontSize='md'>Federico Obama</Text>
                <Text fontWeight='light' fontSize='sm'>@user1234jd</Text>
            </Flex>
            <Icon h='35px' w='35px' as={AiOutlineUserAdd}/>
        </Flex>
    )
}

export default RecommendedUser