import { Flex, Text, Icon } from "@chakra-ui/react"
import { BiHomeAlt2 } from "react-icons/bi"
import { AiOutlineFire } from "react-icons/ai"
import { HiOutlineUserGroup } from "react-icons/hi"
import { BsBookmarkCheck } from "react-icons/bs"
import { IoIosNotificationsOutline } from "react-icons/io"

const SideSection = () => {
    return (
        <Flex direction='column' w='20%' h='92vh' bg='blackAlpha.200' pt='50px' boxShadow='base'>
            <Flex _hover={{background:'blackAlpha.200'}} w='100%' h='70px' align='center' pl='30px' >
                <Icon w='25px' h='25px' mr='10px' as={BiHomeAlt2} />
                <Text>Home Feed</Text>
            </Flex>
            <Flex _hover={{background:'blackAlpha.200'}} w='100%' h='70px' align='center' pl='30px' >
                <Icon w='25px' h='25px' mr='10px' as={AiOutlineFire} />
                <Text>Trending</Text>
            </Flex>
            <Flex _hover={{background:'blackAlpha.200'}} w='100%' h='70px' align='center' pl='30px' >
                <Icon w='25px' h='25px' mr='10px' as={HiOutlineUserGroup} />    
                <Text>Grupos</Text>
            </Flex>
            <Flex _hover={{background:'blackAlpha.200'}} w='100%' h='70px' align='center' pl='30px' >
                <Icon w='25px' h='25px' mr='10px' as={BsBookmarkCheck} />
                <Text>Bookmarks</Text>
            </Flex>
            <Flex _hover={{background:'blackAlpha.200'}} w='100%' h='70px' align='center' pl='30px' >
                <Icon w='25px' h='25px' mr='10px' as={IoIosNotificationsOutline} />
                <Text>Notification</Text>
            </Flex>
        </Flex>
    )
}

export default SideSection