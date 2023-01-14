import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Heading } from "@chakra-ui/react";
import {
  Image,
  chakra,
  Stack,
  Icon,
  Box,
  Header,
  Button,
  Center,
  Spacer,
  Flex,
  Text,
} from "@chakra-ui/react";

export default function Order() {
  return (
    <>
      <Flex alignItems={"center"} gap={"30px"} py="2rem" paddingX={"6rem"}>
        <Text fontWeight={"bold"} fontSize={"xl"}>
          Launchpad Aerial Photography
        </Text>
        <Spacer />
        <Text className="nav-link" fontSize={"lg"}>
          Home
        </Text>
        <Text className="nav-link" ml="1rem" fontSize={"lg"}>
          Order Services
        </Text>
      </Flex>

      <Heading mt={"3rem"} fontSize="5xl" textAlign={"center"}>
        Order Services
      </Heading>
      <Text mt={"10px"} textAlign={"center"}>
        Please fill out the form below to order services. We will get back to
        you as soon as possible.
      </Text>

      <br />
      <Center>
        <Flex>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSecOUrPqTnh7pgzUbJx0rNNIWRl3lXkEVFAgtSizT5VV5TBqA/viewform?embedded=true"
            width="640"
            height="1000"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </Flex>
      </Center>
    </>
  );
}
