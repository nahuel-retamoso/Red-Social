import { Flex, Text } from "@chakra-ui/react"
import RecommendedUser from "./RecommendedUser"

const RightSideSection = () => {
    return (
        <Flex direction='column' w='20%' h='92vh' align='center' bg='blackAlpha.200' boxShadow='base'>
            <Text fontWeight='extrabold' mt='20%' mb='20px' fontSize='xl'>Add People</Text>
            <RecommendedUser/>
            <RecommendedUser/>
            <RecommendedUser/>
            <RecommendedUser/>
        </Flex>
    )
}

export default RightSideSection