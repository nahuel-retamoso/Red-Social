import './App.css';
import { Box, Flex } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Body from './components/Body';
import SideSection from './components/SideSection';
import RightSideSection from './components/RightSideSection';

function App() {
  return (
    <Box>
      <NavBar />
      <Flex>
        <SideSection/>
        <Body/>
        <RightSideSection/>
      </Flex>
    </Box>
  );
}

export default App;
