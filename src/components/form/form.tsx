import { Button, Center, WrapItem, Avatar, Modal, ModalHeader, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react";
import { useState } from "react";


const Form = (props: any) => {
    const user = props.user
    const [image, imageState] = useState('https://bit.ly/sage-adebayo');

    //function onChange image
    const onImageChange = (event:any) => {
        let file = URL.createObjectURL(event.target.files[0]);
        if (file) {
          imageState(file);
        }
    };
  
    return (
      <>
        <Modal
          isOpen={props.show}
          onClose={props.close}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <form>
                <FormControl>
                    <Center>
                        <WrapItem>
                            <Avatar size="2xl" name={user.name} src={image} />
                        </WrapItem>
                        <Input type="file" onChange={e => onImageChange(e)} />
                    </Center>
                </FormControl>
                
                <FormControl mt={4}>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="name" value={user.name} />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>User Name</FormLabel>
                    <Input placeholder="User name" value={user.username} />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Email" value={user.email} />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Address</FormLabel>
                    <Input type="text" placeholder="address" value={user.address.street} />
                </FormControl>
            </form>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={props.close}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export {Form};