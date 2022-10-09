import {Flex, Text, useColorMode} from '@chakra-ui/react';
import React from "react";


function Bg() {
    const {colorMode, toggleColorMode} = useColorMode();
    return(
        <div>
            <Flex justifyContent='center' direction='column'>
            <Text fontSize='3em' textAlign={['left', 'center']} className='Cim' color={colorMode === 'dark' ? '#C6F6D5' : '#373D3F'} >A legjobb helyek szabadkán, ha ennél valamit!</Text>
            <Text className='AlCim' color={colorMode === 'dark' ? '#81bb93' : '#515455'}>Tapasztalatok alapján begyüjtött információ, ami 100%-ban valóságot tükrözi. Az összes fotó az adott helyszinen készül.</Text>
            </Flex>
        </div>
    )
}


export default Bg;