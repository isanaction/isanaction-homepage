import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'IsanaKoto' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Box p={4} height={'5vh'} >
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |{' '}
          <Link href="/users">
            <a>Users List</a>
          </Link>{' '}
          | <a href="/api/users">Users API</a>
        </nav>
      </Box>

    </header>
    {children}
    <footer>
      <Box h={'5vh'} textAlign={'center'}>
        <hr />
        copyright
      </Box>
      {/* <span>I'm here to stay (Footer)</span> */}
    </footer>
  </>
)

export default Layout
