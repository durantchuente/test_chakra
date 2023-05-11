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
        
          
          <Box  >
            <DataTable />
          </Box>
        </Container>
    </ChakraProvider>
    </QueryClientProvider>
    
  );
}
