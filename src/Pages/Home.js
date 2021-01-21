import React, { useState, useEffect } from 'react'

import {
  Text,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  useDisclosure
} from '@chakra-ui/react'

import {
  ChevronRightIcon
} from '@chakra-ui/icons'

import { MdShoppingCart } from "react-icons/md"


import Products from '../Components/Products/Products'

import useWindowDimensions from '../Providers/WindowProvider'
import { commerce } from '../lib/commerce';

import {DesktopCart} from '../Components/Cart/ViewCart'
import {MobileCart} from '../Components/Cart/ViewCart'

// import { fetchProducts } from '../Providers/commerce'

const Home = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    commerce.products.list().then((res) => {
      setProducts(res.data)
    }).catch((error) => {
      console.log('There was an error fetching the products', error);
    });

    commerce.cart.retrieve().then((res) => {
      setCart(res)
    }).catch((error) => {
      console.error('There was an error fetching the cart', error);
    });
  }, [])
  const { width } = useWindowDimensions()

  const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity).then((item) => {
      setCart(item.cart)
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
  }


  if (width > 768) {
    return (
      <>
        <Flex h="100vh" flexDir="column">

          <Flex w="100%" h={200} flexDir="column" justifyContent='center' bgColor="#f5f6fa">
            <Flex pos="absolute" right={10} top="5%" flexDir="row">
              {/* <IconButton w={7} h={7} as={MdShoppingCart} /> */}
              <Button onClick={onOpen} leftIcon={<MdShoppingCart />}>({cart.total_items})</Button>
              <DesktopCart isOpen={isOpen} onOpen={onOpen} onClose={onClose} cart={cart} />
              {/* <Text>({cart.total_items})</Text> */}
            </Flex>
            <Text color="black" fontSize={50} margin="auto" fontWeight="200">Catalog</Text>
          </Flex>
          <Flex mt="2%" flexDir="column">
            <Breadcrumb ml="2%" color="black" fontSize="lg" separator={<ChevronRightIcon color="gray.500" />}>
              <BreadcrumbItem>
                <BreadcrumbLink href="https://eliaswambugu.com">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>Store</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Flex justifyContent="center" mt="5%" height="100%" >
              <Flex margin="auto">
                <Products addToCart={handleAddToCart} products={products} />
              </Flex>
            </Flex>
          </Flex>
          <Flex h={50} mt="10%" justifyContent="center">
            <Text>&copy; 2021 Dandeproductions</Text>
          </Flex>
        </Flex>
      </>
    )
  } else {
    return <Mobile cart={cart} products={products} />
  }
}

const Mobile = (props) => {
  const [cart, setCart] = useState({})
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    commerce.cart.retrieve().then((res) => {
      setCart(res)
    }).catch((error) => {
      console.error('There was an error fetching the cart', error);
    });
  }, [])
  const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity).then((item) => {
      setCart(item.cart)
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
  }
  return (
    <>
      <Flex h="100vh" flexDir="column">
        <Flex w="100%" h={200} flexDir="column" justifyContent='center' bgColor="#f5f6fa">
          <Flex pos="absolute" right={5} top="2%" mb="2%" flexDir="row">
            <Button onClick={onOpen} leftIcon={<MdShoppingCart />}>({cart.total_items})</Button>
            <MobileCart isOpen={isOpen} onOpen={onOpen} onClose={onClose}  />
          </Flex>
          <Text color="black" fontSize={50} margin="auto" fontWeight="200">Catalog</Text>
        </Flex>
        <Flex mt="5%" flexDir="column">
          <Breadcrumb alignSelf="center" color="black" fontSize="lg" separator={<ChevronRightIcon color="gray.500" />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="https://eliaswambugu.com">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Store</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex mt="8%" justifyContent="center" height="100%">
            <Flex margin="auto">
              <Products addToCart={handleAddToCart} products={props.products} />
            </Flex>
          </Flex>
        </Flex>
        <Flex h={30} mt="10%" justifyContent="center">
          <Text>&copy; 2021 Dandeproductions</Text>
        </Flex>
      </Flex>
    </>
  )
}



export default Home

//bgGradient="linear(to-r, #0097e6, #74b9ff)"