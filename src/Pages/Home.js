import React, {useState, useEffect} from 'react'

import {
  Text,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon
} from '@chakra-ui/react'

import {
  ChevronRightIcon
} from '@chakra-ui/icons'

import { MdShoppingCart } from "react-icons/md"


import Products from '../Components/Products/Products'

import useWindowDimensions from '../Providers/WindowProvider'

import {fetchProducts} from '../Providers/commerce'

const Home = () => {
  const [products, setProducts] = useState([]);
  const { width } = useWindowDimensions()

  useEffect(() => {
    const fetchproducts = fetchProducts()
    if (fetchproducts) {
      setProducts(fetchproducts)
      alert(fetchproducts)
    }
    // alert(products.length)
  }, [])
  if (width > 768) {
    return (
      <>
        <Flex h="100vh" flexDir="column">

          <Flex w="100%" h={200} flexDir="column" justifyContent='center' bgColor="#f5f6fa">
            <Flex pos="absolute" right={10} top="5%" flexDir="row">
              <Icon w={7} h={7} as={MdShoppingCart} />
              <Text>(0)</Text>
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
                <Products products={products} />
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
    return <Mobile products={products} />
  }
}

const Mobile = (props) => {
  return (
    <>
      <Flex h="100vh" flexDir="column">
        <Flex w="100%" h={200} flexDir="column" justifyContent='center' bgColor="#f5f6fa">
          <Flex pos="absolute" right={10} top="2%" mb="2%" flexDir="row">
            <Icon w={7} h={7} as={MdShoppingCart} />
            <Text>(0)</Text>
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
              <Products products={props.products} />
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