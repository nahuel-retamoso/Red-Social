import { Flex } from "@chakra-ui/react";
import CreatePost from "./CreatePost";
import Post from "./Post";

const Body = () => {
    return (
        <Flex direction='column' align='center' h='92vh' w='60%' bg='blackAlpha.200' pt='20px' overflow='scroll' sx={{
            "&::-webkit-scrollbar": {
              display: 'none'
            },
          }}>
            <CreatePost/>
            <Post/>
            <Post/>
            <Post/>
        </Flex>
    );
}

export default Body;