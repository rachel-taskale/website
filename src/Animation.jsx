import { Box, Container, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
  0% { transform: scale(1); image: url(https://drive.google.com/uc?id=1MjdyDNFhJ4-1baTTVS1vESsVoiPEb8co); }
  15% { transform: scale(2); image: url(https://drive.google.com/uc?id=1oGwTmhiS6S1unCKnNia65lyM9itkq9V-); }
  30% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  45% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  50% { transform: scale(1) rotate(0); border-radius: 20%; }
  70% { transform: scale(1) rotate(0); border-radius: 20%; }
  75% { transform: scale(1) rotate(0); border-radius: 20%; }
  90% { transform: scale(1) rotate(0); border-radius: 20%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;
  
export default function Animation() {
  return (
    <Container 
        my='10%' 
        height='fit-content' 
        left='0' 
        top='0' 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        border='1px solid black'>
      <Box
        as={motion.div}
        animation={animation}
        padding="2"
        width="12"
        height="12"
        display="flex"
      />
    </Container>
  )
};