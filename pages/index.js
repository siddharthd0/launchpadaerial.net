import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Heading} from '@chakra-ui/react'
import { Image, chakra, Stack, Icon, Box, Header, Button, Spacer,Flex,Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
  
      
      <Flex alignItems={"center"} gap={"30px"} py="2rem" paddingX={"6rem"}>
        <Text fontWeight={"bold"} fontSize={"xl"} >Launchpad Aerial Photography</Text>
        <Spacer/>
        <Text className='nav-link' fontSize={"lg"}>Home</Text>
        <Text className='nav-link' ml="1rem" fontSize={"lg"}>Order Services</Text>
      </Flex>

      <Box px={8} py={24} mx="auto">
  <Box
    w={{
      base: "full",
      md: 11 / 12,
      xl: 9 / 12,
    }}
    mx="auto"
    textAlign={{
      base: "left",
      md: "center",
    }}
  >
    <chakra.h1
      mb={6}
      fontSize={{
        base: "4xl",
        md: "6xl",
      }}
      fontWeight="bold"
      lineHeight="none"
      letterSpacing={{
        base: "normal",
        md: "tight",
      }}
      color="gray.900"
      _dark={{
        color: "gray.100",
      }}
    >
      We take  {""}
      <Text
        display={{
          base: "block",
          lg: "inline",
        }}
        w="full"
        bgClip="text"
        bgGradient="linear(to-r, green.400,purple.500)"
        fontWeight="extrabold"
      >
        premium aerial photos
      </Text>{" "}
     for you.
    </chakra.h1>
    <chakra.p
    margin={"auto"}
    maxW={"900px"}
      px={{
        
        base: 0,
        lg: 24,
      }}
      mb={6}
      fontSize={{
        base: "lg",
        md: "xl",
      }}
      color="gray.600"
      _dark={{
        color: "gray.300",
      }}
    >
      Launchpad Aerial Photography can help you get the best aerial photos for you or your business in the Treasure Valley!
    </chakra.p>
    <Stack
      direction={{
        base: "column",
        sm: "row",
      }}
      mb={{
        base: 4,
        md: 8,
      }}
      spacing={2}
      justifyContent={{
        sm: "left",
        md: "center",
      }}
    >
      <Button
        as="a"
        colorScheme="green"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        w={{
          base: "full",
          sm: "auto",
        }}
        mb={{
          base: 2,
          sm: 0,
        }}
        size="lg"
        cursor="pointer"
      >
        Learn more

      </Button>
      <Button
      ml="1.5rem !important"
        as="a"
        colorScheme="gray"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        w={{
          base: "full",
          sm: "auto",
        }}
        mb={{
          base: 2,
          sm: 0,
        }}
        size="lg"
        cursor="pointer"
      >
        Book an appointment
        <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
            clipRule="evenodd"
          />
        </Icon>
      </Button>
    </Stack>
  </Box>
  <Box
    w={{
      base: "full",
      md: 10 / 12,
    }}
    mx="auto"
    mt={20}
    textAlign="center"
  >
    <Image
      w="full"
      rounded="lg"
      shadow="2xl"
      src="https://kutty.netlify.app/hero.jpg"
      alt="Hellonext feedback boards software screenshot"
    />
  </Box>
</Box>;


    
    </>
  )
}
