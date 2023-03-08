import { Avatar, Flex, HStack, Input, Icon, Button } from "@chakra-ui/react"
import { CiImageOn } from "react-icons/ci"

const CreatePost = () => {
    return (
        <Flex direction='column' align='center' w='80%' mb='20px' bg='whiteAlpha.800' boxShadow='lg'>
            <Flex align='center' p='10px' w='100%'>
                <Avatar size='md' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' mr='20px'/>
                <Input placeholder="Que estas pensando?" mr='20px'/>
                <Icon color='blue.400' h='28px' w='28px' as={CiImageOn} />
            </Flex>
            <Button color='blue.400' w='18%' mb='12px'>Post</Button>
        </Flex>
    )
}

export default CreatePost;