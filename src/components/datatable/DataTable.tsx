
import { Table, Thead, Tbody, Tr, Th, Tfoot, Flex, Box, Text, Checkbox, Spacer, Spinner, Center, Td, Heading, InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import {
  Pagination,
  usePagination,
  PaginationNext,
  PaginationPrevious,
  PaginationContainer,
} from "@ajna/pagination";
import { UserModel } from "../../models/user.model";
import User from "../user/user";
import { useGetUsers } from "../../hook/useUser";
import { useEffect, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";


const DataTable = (props: any) => {
  const { data, isLoading, isError } = useGetUsers()
  const [search, setSearch] = useState(null)
  useEffect(() => {}, []);


const outerLimit = 2;
const innerLimit = 2;
const {
  pages,
  pagesCount,
  offset,
  currentPage,
  setCurrentPage,
  setIsDisabled,
  isDisabled,
  pageSize,
  setPageSize,
} = usePagination({
  total: data?.length,
  limits: {
    outer: outerLimit,
    inner: innerLimit,
  },
  initialState: {
    pageSize: 5,
    isDisabled: false,
    currentPage: 1,
  },
});

const onSearch = (value: any)=>{
  setSearch(value)
}

//function get list users with pagination
function paginate(array: any[] | undefined, page_size: number, page_number: number, search = null) {
  if(!array){return []}
  if (search) {
    return array.filter(x => x.name.includes(search)).slice((page_number - 1) * page_size, page_number * page_size)
  }
  return array.slice((page_number - 1) * page_size, page_number * page_size)
}

//function action move pagination
const handlePageChange = (nextPage: number): void => {
  setCurrentPage(nextPage);
};
  

  return (
    <>
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
            onChange={e => onSearch(e.target.value)}
            pl='3.5rem'
            type='search'
            placeholder='Search' />
          <InputLeftElement width='4.5rem'>
            <Search2Icon aria-label="search" />
          </InputLeftElement>
        </InputGroup>
      </Box>
    </Flex>
    <Table variant='simple'>
        <Thead>
          <Tr>
            <Th><Checkbox px='4'></Checkbox>Name</Th>
            <Th>Status</Th>
            <Th>Email</Th>
            <Th>Address</Th>
            <Th>Rating</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data ? paginate(data, pageSize, currentPage, search)?.map((user: UserModel) => (
            <User key={user.id} data={user} />
          )) : (
            <Tr>
              <Td colSpan={6}>
                <Center p='60px'>
                  <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl' />
                </Center>
              </Td>
            </Tr>
          )}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th colSpan={6}>
              <Flex>
                <Box p='4'>
                  <Text>
                    Showing {currentPage} to 5 of {data?.length} results
                  </Text>
                </Box>
                <Spacer />
                <Box p='4'>
                  <Pagination
                    pagesCount={pagesCount}
                    currentPage={currentPage}
                    isDisabled={isDisabled}
                    onPageChange={handlePageChange}
                  >
                    <PaginationContainer>
                      <PaginationPrevious>Previous</PaginationPrevious>
                      <PaginationNext>Next</PaginationNext>
                    </PaginationContainer>
                  </Pagination>
                </Box>
              </Flex>
            </Th>
          </Tr>

        </Tfoot>
      </Table></>
  );
};

export {DataTable};