import React from "react";
import type {GetStaticProps, NextPage} from "next";
import Image from "next/image";
import {
  Box,
  Button,
  Grid,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  StackDivider,
  useDisclosure,
} from "@chakra-ui/react";

import logo from "../assets/logo.svg";
import header from "../assets/header.svg";
import footer from "../assets/footer.svg";
import {Product} from "../product/types";

interface Props {
  products: Product[];
}

const Home: NextPage<Props> = ({products}) => {
  const {isOpen: isCartOpen, onOpen: onCartOpen, onClose: onCartClose} = useDisclosure();
  const [cart, setCart] = React.useState<Product[]>([]);
  const total = React.useMemo(
    () => cart.reduce((total, product) => total + product.price, 0),
    [cart],
  );

  return (
    <>
      <Stack as="main" height="100%">
        <Stack
          alignItems="center"
          as="nav"
          direction="row"
          justifyContent="space-between"
          paddingY={4}
        >
          <Image alt="Basement" src={logo} />
          <Button borderRadius={9999} paddingX={6} variant="outline" onClick={onCartOpen}>
            CART ({cart.length})
          </Button>
        </Stack>
        <Stack as="header">
          <Image alt="Basement supply" src={header} />
          <Text
            as={"marquee" as any}
            borderBottomWidth={1}
            borderColor="white"
            borderTopWidth={1}
            fontSize="3xl"
          >
            A man cant have enough basement swag
          </Text>
        </Stack>
        <Grid as="section" flex={1} gap={6} templateColumns="repeat(auto-fit, minmax(256px, 1fr))">
          {products.map((product) => (
            <Stack
              key={product.id}
              cursor="pointer"
              onClick={() => setCart((cart) => cart.concat(product))}
            >
              <Box bgGradient="linear(to-b, black, gray.900)">
                <Image
                  alt={product.name}
                  height={512}
                  layout="responsive"
                  src={product.image}
                  width={512}
                />
              </Box>
              <Stack
                alignItems="baseline"
                borderTopColor="white"
                borderTopWidth={2}
                direction="row"
                fontSize="lg"
                justifyContent="space-between"
                paddingY={1}
              >
                <Text>{product.name}</Text>
                <Text>${product.price}</Text>
              </Stack>
            </Stack>
          ))}
        </Grid>
        <Box as="footer">
          <Image alt="Wear everyday" src={footer} />
        </Box>
      </Stack>
      <Modal isOpen={isCartOpen} onClose={onCartClose}>
        <ModalOverlay onClick={onCartClose} />
        <Stack
          backgroundColor="black"
          borderColor="white"
          borderWidth={2}
          color="white"
          fontFamily="Grotesque"
          position="fixed"
          right={0}
          top={0}
          width={{base: "100%", md: 512}}
          zIndex={1401}
        >
          <Stack alignItems="center" direction="row" justifyContent="space-between" padding={2}>
            <Text fontSize="xl" textTransform="uppercase">
              Your cart
            </Text>
            <Button marginLeft="auto" variant="link" onClick={onCartClose}>
              CLOSE
            </Button>
          </Stack>
          <Stack paddingX={2}>
            {cart.map((product, index) => (
              <Stack key={index} direction="row" justifyContent="space-between">
                <Text>{product.name}</Text>
                <Text>${product.price}</Text>
              </Stack>
            ))}
          </Stack>
          <Stack
            borderTopWidth={2}
            direction="row"
            divider={<StackDivider borderWidth={2} />}
            fontSize="xl"
            justifyContent="space-between"
            spacing={0}
          >
            <Text flex={1} padding={2}>
              Total: ${total}
            </Text>
            <Button padding={2} variant="link" onClick={() => console.log("CART: ", cart)}>
              CHECKOUT
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await import("../product/mock.json").then((res) => res.default);

  return {
    props: {
      products,
    },
  };
};

export default Home;
