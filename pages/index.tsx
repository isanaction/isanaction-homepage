import { Box, Center, Container, HStack, Image, VStack } from '@chakra-ui/react'
import Twitter from '../public/icons/twitter.png'
import Github from '../public/icons/github.png'
import Facebook from '../public/icons/facebook.png'
import MyImage from '../public/img/myImage.webp'

const IndexPage = () => (
  <Container height={"90vh"} display={'flex'} alignItems={'center'}>
    <Box h={400} rounded="lg" shadow={'md'} border={'1px'} borderColor={'gray.100'} width={'340px'} justifyContent='center' mx={'auto'} bg='white' p={5}>
      <Center pt={5} >
        <Image
          borderRadius='full'
          boxSize='150px'
          src={MyImage.src}
          alt='Isana Koto'
          objectFit={'cover'}
        />

      </Center>
      <VStack
        spacing={4}
        p={5}
        align='stretch'
      >
        <Box>
          <Box fontWeight='bold' fontSize="xl">
            🐳 Isana Koto
          </Box>
          <Box>
            💻 Webエンジニア
            (React,firebase,Laravel,etc)
          </Box>
        </Box>

        <Box h='30px' fontSize={"sm"}>
          インディでオルタナティブに暮らしたい
        </Box>
      </VStack>
      <HStack spacing='24px' justifyContent={'center'}>
        <a href="https://github.com/isanaction" >
          <Image
            borderRadius='full'
            w='30px'
            h='30px'
            src={Github.src}
            alt="Github"
          />
        </a>
        {/* <a href="https://github.com/isanaction" >
          <Image
            w='30px'
            h='30px'
            src={Twitter.src}
            alt='Twitter'
          />
        </a> */}
        <a href="https://www.facebook.com/isn.kumano/" >
          <Image
            borderRadius='full'
            w='30px'
            h='30px'
            src={Facebook.src}
            alt='Facebook'
          />
        </a>


      </HStack>

    </Box>
  </Container>
)

export default IndexPage
