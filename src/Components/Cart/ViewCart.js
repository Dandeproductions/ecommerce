import React, { useEffect, useState } from 'react';

import {
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Image,
  Flex
} from '@chakra-ui/react';

import CartItem from './CartItem'

export const DesktopCart = (props) => {
  const [cart, setCart] = useState({})
  useEffect(() => {
    setCart(props.cart)
  })
  if (cart.total_unique_items === 0) {
    return;
  }
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        placement="right"
        onClose={props.onClose}
        size={"sm"}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>My Cart</DrawerHeader>

            <DrawerBody>
              {cart.line_items.map(lineItem => (
                <CartItem
                  item={lineItem}
                  key={lineItem.id}
                />
              ))}
              <Flex mt="50%" w="100%" flexDir="row">
                <Text fontSize={25} fontWeight="700">Subtotal </Text>
                <Text fontSize={25} fontWeight="200" pos="absolute" right="5%">{cart.subtotal.formatted_with_symbol}</Text>
              </Flex>
            </DrawerBody>

            <DrawerFooter>
              {/* <Button variant="outline" mr={3} onClick={props.onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button> */}
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export const MobileCart = (props) => {
  const [cart, setCart] = useState(props.cart)
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        placement="right"
        onClose={props.onClose}
        size={"full"}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>My Cart</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
} 