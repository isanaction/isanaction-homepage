import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
  Container,
} from '@chakra-ui/react';

export default function Contact() {

  const registerUser = async event => {
    event.preventDefault()

    const res = await fetch('/api/send', {
      body: JSON.stringify({
        email: event.target.email.value,
        name: event.target.name.value,
        message: event.target.message.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
  }
  return (
    <Container>

      <Flex
        minH={'90vh'}
        align={'center'}
        justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>お問い合わせ</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              どんなことでも聞いてください ✌️
            </Text>
          </Stack>
          <form onSubmit={registerUser}>


            <Box
              rounded={'lg'}
              boxShadow={'lg'}
              bg="white"
              w="340px"
              p={8}>

              <Stack spacing={4}>

                <FormControl id="mail">
                  <FormLabel>メールアドレス</FormLabel>
                  <Input type="email" id="email" name="email" placeholder="name@example.com" />
                </FormControl>
                <FormControl id="name">
                  <FormLabel>お名前</FormLabel>
                  <Input type="name" id='name' name='name' placeholder="山田たろう" />
                </FormControl>
                <FormControl id="contact_body">
                  <FormLabel>お問い合わせ内容</FormLabel>
                  <Textarea id="message" name="message" placeholder='ホームページを作りたいです' />
                </FormControl>
                <Stack spacing={10}>

                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    type="submit"
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    送信
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </form>
        </Stack>
      </Flex>
    </Container>
  );
}

//   return (
//     <div className="container mt-5">
//       <form onSubmit={registerUser}>
//         <div className="mb-3">
//           <label htmlFor="email">メールアドレス</label>
//           <input id="email" name="email" type="email" className="form-control" placeholder="name@example.com"/>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="message" className="form-label">問合せ内容</label>
//           <textarea id="message" name="message" className="form-control" rows="3"></textarea>
//         </div>
//         <div className="mb-3">
//           <button type="submit" className="btn btn-primary">送信</button>
//         </div>
//       </form>
//     </div>
//   )
// }
