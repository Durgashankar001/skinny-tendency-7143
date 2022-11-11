import React from 'react'
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Input, Select, Spinner, Text } from '@chakra-ui/react';

const Payment_Details_Component = () => {
    return (
        <Box p='10px' pb='20px' borderRadius={'5px'} bg='#fff' mb='15px'>
            <Box p='5px'>
                <Text fontSize={'12px'} color='#151B3999' fontWeight='600' letterSpacing='1px' mb='15px'>PAYMENT DETAILS</Text>
                <Flex fontSize={'14px'} mb='10px' justifyContent={'space-between'}>
                    <Text>MRP Total</Text>
                    <Text>Rs.{500}</Text>
                </Flex>
                <Flex fontSize={'14px'} mb='10px' justifyContent={'space-between'}>
                    <Text>Netmeds Discount</Text>
                    <Text>-Rs.{500}</Text>
                </Flex>

                <Flex fontSize={'14px'} mb='10px' justifyContent={'space-between'}>
                    <Text>Promocode Discount</Text>
                    <Text>-Rs.{22.25}</Text>
                </Flex>

                <Flex fontSize={'14px'} mb='20px' justifyContent={'space-between'}>
                    <Text as='b'>Total Amount *</Text>
                    <Text as='b'>Rs.{52.25}</Text>
                </Flex>
            </Box>
            <Box bg='#f3f8ec' p='10px 15px' mb='30px'>
                <Text fontSize={'12px'} fontWeight='600' color='#489841' letterSpacing='1px'>TOTAL SAVINGS RS.{520}</Text>
            </Box>
        </Box>
    )
}

export default Payment_Details_Component