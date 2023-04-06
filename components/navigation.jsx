import { Flex, Text,Spacer, Link } from "@chakra-ui/react";

export default function Navigation() {
    return(
  <Flex zIndex={"4"} alignItems={"center"} gap={"30px"} py="2rem" paddingX={"6rem"}>
    <Text fontWeight={"bold"} fontSize={"xl"}>
      Launchpad Aerial Photography
    </Text>
    <Spacer />
    <Link href="./">
      <Text className="nav-link" fontSize={"lg"}>
        Home
      </Text>
    </Link>
    <Link href="order">
      <Text className="nav-link" ml="1rem" fontSize={"lg"}>
        Order Services
      </Text>
    </Link>
  </Flex>
    );
}
// Path: pages/order.jsx
