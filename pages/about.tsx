import { Box, Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FollowPointer from '../components/FollowPointer'
import Layout from '../components/Layout'

const AboutPage = () => (
  <>
    <Container height={"90vh"} display={'flex'} alignItems={'center'} >
      <Box fontSize="20px" mx="auto">
        👷🏼  🚧 developing... 🚧  🚛
      </Box>

      <FollowPointer />
    </Container>
  </>
)

export default AboutPage
