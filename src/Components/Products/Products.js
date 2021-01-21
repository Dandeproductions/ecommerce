// eslint-disable-next-line
import React, { useEffect, useState } from 'react';

import {
  Flex,
  SimpleGrid
} from '@chakra-ui/react'

import Product from './Product'

const Products = (props) => {
  // eslint-disable-next-line
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(props.products)
  })

  return (
    <>
      <Flex>
        <SimpleGrid columns={{ sm: products.length / 2, md: products.length, lg: products.length }} spacingX={100} spacingY={20}>
          {products.map((data, index) => (
            <Product key={index} addToCart={props.addToCart} product={data} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  )
}

export default Products