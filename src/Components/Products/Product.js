import React, { useState, useEffect } from 'react';

import {
  Flex,
  Box,
  Text,
  Button
} from '@chakra-ui/react'

const Product = (props) => {
  const [product, setProduct] = useState(props.product)
  useEffect(() => {
    alert(product)
  }, [product])
  return (
    <>
      <Flex justifyContent="center"  flexDir="column"  h={430} w={300} >
        <Box rounded={25} mt="5%" alignSelf="center" opacity="100%" bg="red.900" h={300} w={300} ></Box>
        <Text fontWeight="700" fontSize="35" mt="8%" textAlign='center'>{product.name}</Text>
        <Text mt="5%" textAlign="center">${product.price.formatted_with_symbol}</Text>
        <Button borderRadius="none" mt="5" w={150} alignSelf="center" h={50}>Add To Cart</Button>
      </Flex>
    </>
  )
}

export default Product