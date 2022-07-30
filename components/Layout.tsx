import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Box, Container, Flex, HStack, Image, VStack } from '@chakra-ui/react'
import Github from '../assets/icons/github.png'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Isanaction' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Box py={2} height={'5vh'} bgGradient='linear(to-r, #6495ed, gray.100)' shadow="md">
        <Container>
          <Flex>
            <Link href="/">
              <Box fontWeight={'extrabold'} letterSpacing="-1px" my="1" color={"white"} >
                Isanaction
              </Box>
            </Link>
            <Box flex={1}></Box>
            <HStack fontWeight={'medium'} spacing={2} ml={5}>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/about">
                <a>About</a>
              </Link>
              <Link href="https://github.com/isanaction">
                <a>
                  <Box display={'flex'} ml={2}>
                    <Image
                      borderRadius='full'
                      my={2}
                      w='16px'
                      h='16px'
                      src={Github.src}
                      alt="Github"
                    />
                    <Box p={'4px'}>Source</Box>
                  </Box>

                </a>
              </Link>{' '}
              {/* |{' '}
              <Link href="/blog">
                <a>Blog</a>
              </Link>{' '}
              |{' '}
              <Link href="/users">
                <a>Users List</a>
              </Link>{' '}
              | <a href="/api/users">Users API</a> */}
            </HStack>
          </Flex>
        </Container>
      </Box>

    </header>
    {children}
    <footer >
      <Box h={'5vh'} py={3} textAlign={'center'} bg="white">
        copyright©️ IsanaKoto
      </Box>
      {/* <span>I'm here to stay (Footer)</span> */}
    </footer>
  </>
)

export default Layout
