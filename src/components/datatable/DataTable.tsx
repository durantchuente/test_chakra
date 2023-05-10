
import { Table, Thead, Tbody, Tr, Th, Tfoot, Flex, Box, Text, Checkbox, Spacer } from "@chakra-ui/react";
import {
  Pagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from "@ajna/pagination";
import { UserModel } from "../../models/user.model";
import User from "../user/user";
import { useGetUsers } from "../../hook/useUser";
import { useEffect, useState } from "react";


const DataTable = (props: any) => {
  const [usersTotal, setUsersTotal] = useState<number | undefined>(
    undefined
  );
  const [users, setUsers] = useState<UserModel[]>([]);
  const { data, isLoading, isError } = useGetUsers()
  useEffect(() => {
    if (data) {
      setUsersTotal(data.length)
      setUsers(paginate(data, pageSize, currentPage))
    }
  }, []);


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
  total: usersTotal,
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

function paginate(array: any[], page_size: number, page_number: number) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

const handlePageChange = (nextPage: number): void => {
  if(data){setUsers(paginate(data, pageSize, nextPage))}
  // -> request new data using the page number
  setCurrentPage(nextPage);
};
  

  return (
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
    {users ? users.map((user: UserModel) => (
      <User key={user.id} data={user} />
    )) : ''}
    </Tbody>
    <Tfoot>
      <Tr>
        <Th colSpan={6}>
          <Flex>
            <Box p='4'>
              <Text>
                Showing {currentPage} to 5 of {usersTotal} results
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
  </Table>
  );
};

export {DataTable};