import React, { useState } from "react";
import { Tr, Td, Flex, Avatar, Box, Text, Checkbox } from "@chakra-ui/react";
import { StarIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { IconButton, Badge } from "@chakra-ui/react"
import { UserModel } from "../../models/user.model";
import { Form } from "../form/form";

const User = (props: any) => {
  const [showLogin, setShowLogin] = useState(false);
  const user: UserModel = props.data;
  return (
    <Tr>
        <Td>
          <Flex>
            <Checkbox px='4'></Checkbox>
            <Avatar src='https://bit.ly/sage-adebayo' />
            <Box ml='3'>
              <Text fontWeight='bold'>
                {user.name}
              </Text>
              <Text fontSize='sm' color='#808080'>@{user.username}</Text>
            </Box>
          </Flex>
        </Td>
        <Td><Badge colorScheme="green" px='2' borderRadius='lg'>Active</Badge></Td>
        <Td>{user.email}</Td>
        <Td>{user.address.street}</Td>
        <Td>
          <StarIcon color="#3399FF" />
          <StarIcon color="#3399FF" />
          <StarIcon color="#3399FF" />
          <StarIcon color="#3399FF" />
          <StarIcon color="#C0C0C0" />
        </Td>
        <Td>
        <IconButton
          onClick={() => setShowLogin(true)}
          variant='ghost'
          colorScheme="#202020"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<EditIcon />}
        />
        <IconButton
          variant='ghost'
          colorScheme="#202020"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<DeleteIcon />}
        />
        </Td>
        <Form show={showLogin} close={() => setShowLogin(false)} user = {user} />
      </Tr>
  );
};

export default User;