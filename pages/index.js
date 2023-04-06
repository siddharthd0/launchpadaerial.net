import Head from "next/head";
import { Inter } from "@next/font/google";
import {
  Image,
  chakra,
  Stack,
  Icon,
  Box,
  Header,
  Button,
  Spacer,
  Flex,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
    
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
            color="gray.100"
          >
            The
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
          {" "}    Premium
            </Text>{" "}
           Aerial Photgraphy Agency For You.
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
            color="gray.200"
          >
            Launchpad Aerial will provide you with the best aerial photography
            services in the industry.
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
              Book an appointment
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
      </Box>
      ;
    </>
  );
}
