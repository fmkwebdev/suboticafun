import { Badge, Box, Icon, Stack, Text, Image, Flex} from "@chakra-ui/react";

import AliszaNedvesPuncija from './img/ae.jpg';
import { StarIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion';
import images from './images';
import { useEffect, useRef, useState } from "react";


const Card = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        
    }, []);
    console.log(carousel.current);
    return(
        <Flex alignContent='center' justifyContent='center'>
        <Box
        w='80vw'
        rounded='20px'
        overflow='hidden'
        boxShadow='md'
        bg='gray.500'
        >
       <Image src={AliszaNedvesPuncija} alt="" w='100vw'  h={[300, 350, 500]} />
            <Box p={5}>
            <Stack isInline align='baseline'>
                <Badge variant='solid' colorScheme='green' rounded='full' px={2}>
                     Gyors
                </Badge>
                <Badge variant='solid' colorScheme='green' rounded='full' px={2}>
                     Nagy porciók
                </Badge>

                <Text
                    textTransform='uppercase'
                    fontSize='sm'
                    color='green.200'
                    letterSpacing='wide'>
                        Burgers, Pizza
                </Text>
                </Stack>
                <Text as='h2' fontWeight='bold' fontSize='1.8em' my={2} >
                    BestFastFood
                </Text>
                <Text color='#1A202C' fontWeight='medium' fontSize={['1.2em','2em','2em']}>
                    PS C:\suboticafun npm i react-icons
                npm WARN @apideck/better-ajv-errors@0.3.6 requires a peer of ajv@=8 but none is installed. You must install peer dependencies yourself.
                npm WARN fork-ts-checker-webpack-plugin@6.5.2 requires a peer of typescript@.7 but none is installed. You must install peer dependencies yourself.
                npm WARN tsutils@3.21.0 requires a peer of typescrip2.8.0 || 3.2.0-dev |.0-dev || .4.0-dev ||5.0-dev ||dev || .0- 3.7.0-dev .0-beta but none is installed. You must install peer dependencies yourself.
                npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
                npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wantedtier dependencies yourself.
                npm WARN fork-ts-checker-webpack-plugin@6.5.2 requires a peer of typescript2.7 v ||3.0-dev || .4.0-dev ||5.0-dev 6.0-dev |7.0-beta but none is installed. You must install peer dependencies yourself.
                npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents)
                npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted 
                </Text>
                <StarIcon color="#e7d215" fontSize='2.5em' />
                <StarIcon color="#e7d215" fontSize='2.5em'/>
                <StarIcon color="#e7d215" fontSize='2.5em' />
                <StarIcon color="#e7d215" fontSize='2.5em'/>
                <StarIcon color="black.500" fontSize='2.5em'/>
            </Box>
            <motion.div className="carousel">
                <motion.div drag="x" dragConstraints={{right: 0, left: 0}} className="inner-carousel">
                    {images.map((image) => {
                        return (
                            <motion.div className="item" key={image}> 
                                <img src={image} alt="" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </Box>
    </Flex>
    );
};

export default Card;