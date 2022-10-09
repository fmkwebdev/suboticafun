import { Flex, useColorMode, IconButton } from '@chakra-ui/react';
import './App.css';
import Landing from './Landing';
import {FaSun, FaMoon} from 'react-icons/fa';
import Card from './Card';
import { Route, Routes } from 'react-router-dom';
import { ArrowBackIcon  } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
import Delfin from './Delfin';
import FoodToGo from './FoodToGo';


/*
      Dark / Light Módot berakni
*/




function App() {

  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Flex justifyContent='center' mt="12%" direction='column' width='100%' >
     <Link to="/"> <IconButton icon={<ArrowBackIcon />}w={{ base: '15vw', md: '13vw', lg: '5vw' }} ml={{ base: '42vw', md: '73vw', lg: '73vw'}} /></Link>
       <IconButton onClick={toggleColorMode} icon={colorMode === 'dark' ? <FaMoon /> : <FaSun />} className='DarkLight' w={{ base: '15vw', md: '13vw', lg: '5vw' }} ml={{ base: '42vw', md: '73vw', lg: '73vw'}} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Delfin" element={<Delfin />} />
        <Route path="/BestFastFood" element={<Card />} />
        <Route path="/FoodToGo" element={<FoodToGo />} />
       </Routes>
    </Flex>
    
  );
}

export default App;
