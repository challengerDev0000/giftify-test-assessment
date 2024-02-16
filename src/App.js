import {
  Container,
  Flex,
  SimpleGrid,
  Center,
  Heading,
  Text,
  Input,
} from "@chakra-ui/react";
import "./App.css";
import { useEffect, useState } from "react";
import { getCardData } from "./apis/api";
import { API_RESP_STATUS } from "./utils/constants";
import CustomPagination from "./components/CustomPagination";
import GatheringCard from "./components/GatheringCard";
import { calculateManaCost } from "./utils/utils";
import _ from "lodash";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cardList, setCardList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [search, setSearch] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [addedList, setAddedList] = useState([]);

  const debouncedSearch = _.debounce(setSearch, 500);

  const handleSearch = async (value) => {
    await debouncedSearch(value);
  };

  const getCards = async (page, pageSize, search) => {
    setIsLoading(true);
    const result = await getCardData({
      pageSize: pageSize,
      page: page,
      name: search,
    });
    if (result.status === API_RESP_STATUS.SUCCESS) {
      setCardList(result.data);
      setTotalCount(result.totalCount);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCards(page, pageSize, search);
  }, [page, pageSize, search]);

  return (
    <Container
      maxW="full"
      bg={{ base: "slate.50", sm: "white" }}
      gap="24px"
      px={{ base: "20px", md: "40px" }}
      pt={{ base: "0px", md: "16px" }}
      pb={{ base: "80px", md: "24px" }}
    >
      <Flex flexDir="row">
        <Center flexDir="column" flex={3} gap="20px" height="full">
          <Heading>Cards</Heading>
          <Input
            type="text"
            // value={inputValue}
            onChange={(e) => handleSearch(e.target.value)}
          ></Input>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing="24px">
            {!isLoading &&
              cardList.map((card) => (
                <Center key={card.id}>
                  <GatheringCard
                    card={card}
                    isLoading={isLoading}
                    isAdded={true}
                    onAdd={(item) => {
                      if (
                        addedList.find((element) => element.id === item.id) ||
                        addedList.length >= 30
                      ) {
                      } else {
                        setAddedList([...addedList, item]);
                      }
                    }}
                  />
                </Center>
              ))}
            {isLoading &&
              Array.from({ length: pageSize }).map((_, idx) => (
                <Center key={idx}>
                  <GatheringCard isLoading={true} isAdded={true} />
                </Center>
              ))}
          </SimpleGrid>
          <CustomPagination
            totalCount={totalCount}
            initialPageSize={pageSize}
            initialCurrentPage={1}
            onChange={setPage}
          />
        </Center>
        <Flex
          flexDir="column"
          w="full"
          height="full"
          flex={2}
          alignItems="center"
          px="20px"
        >
          <Heading>My Deck</Heading>
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 4 }}
            spacing="24px"
            mt="80px"
          >
            {addedList.map((card) => (
              <Center key={card.id}>
                <GatheringCard
                  variant="sm"
                  card={card}
                  isAdded={true}
                  onDel={(item) =>
                    setAddedList(
                      addedList.filter((card) => card.id !== item.id)
                    )
                  }
                />
              </Center>
            ))}
          </SimpleGrid>
          {addedList.length < 20 && (
            <Text variant="lg" color="red">
              Not enough cards in the Deck
            </Text>
          )}
          {addedList.length === 30 && (
            <Text variant="lg" color="red">
              Deck is filled
            </Text>
          )}
          <Text variant="lg" color="black">
            Average Mana Cost: {calculateManaCost(addedList)}
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
}

export default App;
