import { Avatar, Box, Center, Container, Flex, HStack, Image, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Twitter from '../assets/icons/twitter.png'
import Github from '../assets/icons/github.png'
import Facebook from '../assets/icons/facebook.png'

const IndexPage = () => (
  <Container height={"90vh"} display={'flex'} alignItems={'center'}>


    <Box h={500} shadow={'md'} border={'1px'} borderColor={'gray.100'} width={'400px'} justifyContent='center' mx={'auto'} bg='white' p={5}>

      <Center p={5}>

        <Image
          borderRadius='full'
          boxSize='200px'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />

      </Center>
      <VStack
        // divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        p={4}
        align='stretch'
      >
        <Box h='40px' fontWeight='bold'>
          Isana Koto
        </Box>
        <Box h='40px'>
          web developer
        </Box>
        <Box h='40px'>
          3
        </Box>
      </VStack>
      <HStack spacing='24px' justifyContent={'center'}>
        <Image
          borderRadius='full'
          w='30px'
          h='30px'
          src={Github.src}
          alt="Github"
        />
        <Image
          w='30px'
          h='30px'
          src={Twitter.src}
          alt='Twitter'
        />
        <Image
          borderRadius='full'
          w='30px'
          h='30px'
          src={Facebook.src}
          alt='Facebook'
        />
      </HStack>

    </Box>
  </Container>
)

export default IndexPage
