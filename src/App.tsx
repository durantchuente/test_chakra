import { ChakraProvider, Container, Heading, Box, Flex, Spacer, InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import './App.css';
import { DataTable } from "./components/datatable/DataTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ChakraProvider>
        <Container maxW='7xl' className="tab" >
        <Flex>
          <Box p='4'>
            <Heading as='h4' size='md'>
              Members
            </Heading>
          </Box>
          <Spacer />
          <Box p='4'>
            <InputGroup size='md'>
              <Input
                pl='3.5rem'
                type='search'
                placeholder='Search'
              />
              <InputLeftElement width='4.5rem'>
                <Search2Icon aria-label="search" />
              </InputLeftElement>
            </InputGroup>
          </Box>
        </Flex>
          
          <Box  >
            <DataTable />
          </Box>
        </Container>
    </ChakraProvider>
    </QueryClientProvider>
    
  );
}
