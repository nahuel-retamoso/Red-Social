import { Avatar, Flex, Image, Input, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsShare } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { VscComment } from "react-icons/vsc"

const Post = () => {
    return (
        <Flex direction='column' w='600px' bg='whiteAlpha.800' boxShadow='sm' mb='30px'>
            <Flex align='center' h='70px' w='100%' bg='whiteAlpha.800'>
                <Avatar size='md' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' m='20px'/>
                <Text mr='10px' fontSize='xl'>Federico Obama</Text>
                <Text>2h</Text>
            </Flex>
            <Flex direction='column' p='20px' w='100%' align='center' >
                <Image w='90%' src='https://bit.ly/dan-abramov' alt='Dan Abramov' mb='40px' />
                <Text w='90%'>Ad amet consectetur irure cillum ullamco excepteur irure laborum dolor. Adipisicing consectetur duis consectetur laborum. Pariatur anim qui ad pariatur proident dolor cupidatat officia. Nostrud reprehenderit Lorem qui laboris anim reprehenderit adipisicing ad amet. Dolor tempor aliqua culpa cupidatat consequat sint sunt ullamco cupidatat sunt nulla commodo.</Text>
            </Flex>
            <Flex h='40px' w='100%' align='center' pl='5%'>
                <Text mr='8px'>5</Text>
                <Icon h='28px' w='28px' mr='20px' as={VscComment} />
                <Text mr='8px'>20</Text>
                <Icon h='28px' w='28px' mr='20px' as={AiOutlineHeart} />
                <Icon h='25px' w='25px' mr='20px' as={BsShare} />
            </Flex>
            <Input placeholder="Comment something" borderRadius='0'/>
        </Flex>
    )
}

export default Post;