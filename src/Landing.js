
import React  from 'react'
import {Tab, Tabs, TabPanel, TabList, TabPanels, useColorMode} from '@chakra-ui/react';
import './App.css';
import { Link } from 'react-router-dom';
import Bg from './Bg';




function Landing() {

  const {colorMode, toggleColorMode} = useColorMode();
    return(


        <div>
         
          <Bg />
       
        <Tabs variant='soft-rounded' colorScheme={colorMode === 'dark' ? 'green' : 'whatsapp'}>
        <TabList justifyContent='space-evenly' >
          <Tab >Gyorskaja</Tab>
          <Tab>Étterem</Tab>
          <Tab>Egészséges</Tab>
        </TabList>
        <TabPanels className='Tabok' colorScheme='gray.400'>
          <TabPanel>
            <ul><Link to="/BestFastFood"> <p className={colorMode === 'dark' ? 'Tabok' : 'TabokSotet'}> BestFastFood </p></Link></ul>
            <ul><Link to="/FoodToGo"><p className={colorMode === 'dark' ? 'Tabok' : 'TabokSotet'}>FoodToGo</p> </Link></ul>
            <ul><Link to="/Delfin"><p className={colorMode === 'dark' ? 'Tabok' : 'TabokSotet'}>  Delfin </p></Link></ul>
          </TabPanel>
          <TabPanel>
            <ul> <p className={colorMode === 'dark' ? 'Tabok' : 'TabokSotet'}>Fabrika </p></ul>
            <ul> <p className={colorMode === 'dark' ? 'Tabok' : 'TabokSotet'}>Boss</p> </ul>
            <ul> <p className={colorMode === 'dark' ? 'Tabok' : 'TabokSotet'}>Bates</p> </ul>       
          </TabPanel>
          <TabPanel>
            <ul> <p className={colorMode === 'dark' ? 'Tabok' : 'TabokSotet'}>Koffein</p></ul>
            <ul> <p className={colorMode === 'dark' ? 'Tabok' : 'TabokSotet'}>Taurin</p></ul>
            <ul> <p className={colorMode === 'dark' ? 'Tabok' : 'TabokSotet'}>Cigaretta</p></ul>
          </TabPanel>
        </TabPanels>
        </Tabs>
        </div>
    )
}

export default Landing;