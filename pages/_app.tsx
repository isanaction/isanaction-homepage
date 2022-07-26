import { Box, ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (

    <ChakraProvider>
      <Layout>
        <Box bg={'gray.100'}>
          <Component {...pageProps} />

        </Box>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
