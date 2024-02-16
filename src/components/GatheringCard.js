import { Image, Center, Skeleton, Heading } from "@chakra-ui/react";

const GatheringCard = ({
  variant = "lg",
  card,
  isLoading = false,
  onAdd,
  onDel,
}) => {
  return (
    <>
      {isLoading ? (
        <Skeleton
          w={variant === "sm" ? "100px" : "250px"}
          h={variant === "sm" ? "150px" : "347px"}
        />
      ) : (
        <Center
          flexDir="column"
          w={variant === "sm" ? "100px" : "250px"}
          h={variant === "sm" ? "150px" : "347px"}
          cursor="pointer"
          onClick={() => {
            if (variant === "sm") {
              onDel(card);
            } else {
              onAdd(card);
            }
          }}
        >
          <Image
            src={card.imageUrl}
            w={variant === "sm" ? "100px" : "250px"}
            h={variant === "sm" ? "150px" : "347px"}
            alt="Card Image"
            borderRadius="lg"
            fallback={<Skeleton boxSize="full" height="full" />}
          />
        </Center>
      )}
    </>
  );
};

export default GatheringCard;
