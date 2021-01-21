import React, { useState } from 'react'

import {
  Flex,
  useNumberInput,
  Image,
  Text
} from '@chakra-ui/react'

const CartItem = (props) => {
  const [item, setItem] = useState(props.item)

  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: 10,
    precision: 0,
  })

   
  return (
    <>
      <Flex flexDir="row">
        <Image src="https://via.placeholder.com/300" w={100} h={100} />
        <Text ml="5%" fontWeight="200">{item.name}</Text>
      </Flex>
    </>
  )
}

export default CartItem