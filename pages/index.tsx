import { Box, Center, Container, Heading, HStack, Image, Stack, VStack } from '@chakra-ui/react'
import Twitter from '../public/icons/twitter.png'
import Github from '../public/icons/github.png'
import Facebook from '../public/icons/facebook.png'
import MyImage from '../public/img/myImage.webp'
import { motion } from 'framer-motion'

const IndexPage = () => (
  <Container height={"90vh"} display={"flex"} alignItems={"center"}>
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12}>
      <Stack align={"center"}>
        <Heading
          as={motion.div}
          initial={{ x: "50px" }}
          animate={{ x: "0px " }}
        >
          Welcome
        </Heading>
      </Stack>

      <Box
        as={motion.div}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        h={400}
        rounded="lg"
        shadow={"md"}
        border={"1px"}
        borderColor={"gray.100"}
        width={"340px"}
        justifyContent="center"
        mx={"auto"}
        bg="white"
        p={5}
      >
        <Center pt={5}>
          <Image
            borderRadius="full"
            boxSize="150px"
            src={MyImage.src}
            alt="Isana Koto"
            objectFit={"cover"}
          />
        </Center>
        <VStack spacing={4} p={5} align="stretch">
          <Box>
            <Box fontWeight="bold" fontSize="xl">
              🐳 Isana Koto
            </Box>
            <Box>💻 Webエンジニア (React,firebase,Laravel,etc)</Box>
          </Box>

          <Box h="30px" fontSize={"sm"}>
            インディでオルタナティブに暮らしたい
          </Box>
        </VStack>
        <HStack spacing="24px" justifyContent={"center"}>
          <a href="https://github.com/isanaction">
            <Image
              borderRadius="full"
              w="30px"
              h="30px"
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
          <a href="https://www.facebook.com/isn.kumano/">
            <Image
              borderRadius="full"
              w="30px"
              h="30px"
              src={Facebook.src}
              alt="Facebook"
            />
          </a>
        </HStack>
      </Box>
    </Stack>
  </Container>
);

export default IndexPage;
