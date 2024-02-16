import {
  Pagination,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
  PaginationSeparator,
  usePagination,
} from "@ajna/pagination";

const CustomPagination = ({
  totalCount,
  initialPageSize,
  initialCurrentPage,
  onChange,
}) => {
  const { pages, pagesCount, currentPage, setCurrentPage } = usePagination({
    total: totalCount,
    limits: {
      outer: 1,
      inner: 1,
    },
    initialState: {
      pageSize: initialPageSize,
      currentPage: +initialCurrentPage,
    },
  });

  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);
    onChange(nextPage);
  };

  return (
    <Pagination
      pagesCount={pagesCount}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    >
      <PaginationContainer gap={{ base: "4px", md: "16px" }}>
        <PaginationPrevious
          minW="48px"
          w="48px"
          h="48px"
          bg="white"
          borderWidth="1px"
          borderColor="slate.200"
          borderRadius="8px"
          _hover={{
            bg: "slate.200",
          }}
          _active={{
            bg: "slate.200",
          }}
          _disabled={{
            bg: "white",
            opacity: 0.4,
            cursor: "not-allowed",
          }}
        >
          {"<"}
        </PaginationPrevious>
        <PaginationPageGroup
          align="center"
          gap={{ base: "4px", md: "16px" }}
          separator={
            <PaginationSeparator
              w="48px"
              h="48px"
              color="slate.700"
              bg="white"
              borderRadius="8px"
              _hover={{
                bg: "slate.200",
              }}
              _active={{
                bg: "slate.200",
              }}
              jumpSize={5}
            />
          }
        >
          {pages.map((page, index) => (
            <PaginationPage
              key={`pagination-page-${index}`}
              w="48px"
              h="48px"
              color="slate.700"
              bg="white"
              borderRadius="8px"
              _hover={{
                bg: "slate.200",
              }}
              _active={{
                bg: "slate.200",
              }}
              _current={{
                color: "white",
                bg: "blue.700",
                _hover: {
                  bg: "blue.700",
                },
                _active: {
                  bg: "blue.700",
                },
              }}
              page={page}
            />
          ))}
        </PaginationPageGroup>
        <PaginationNext
          minW="48px"
          w="48px"
          h="48px"
          bg="white"
          borderWidth="1px"
          borderColor="slate.200"
          borderRadius="8px"
          _hover={{
            bg: "slate.200",
          }}
          _active={{
            bg: "slate.200",
          }}
          _disabled={{
            bg: "white",
            opacity: 0.4,
            cursor: "not-allowed",
          }}
        >
          {">"}
        </PaginationNext>
      </PaginationContainer>
    </Pagination>
  );
};

export default CustomPagination;
