import { Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import CV from "../assets/Adarsha.pdf";
import WWW from "../assets/icons/www.png";
import { useState } from "react";

export default function NavBar() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };
  return (
    <Flex
      flexDir={{ base: "column", sm: "row" }}
      justifyContent="space-between"
      align={"center"}
      py={10}
      gap={5}
    >
      <Flex align={"center"} gap={2}>
        <Image src={WWW} w={10} h={10} />
        <Text fontSize={{ base: "lg", sm: "2xl" }} fontWeight={"bold"}>
          Adarsha
        </Text>
      </Flex>
      <HStack gap={4}>
        <Button
          size={{ base: "xs", sm: "sm", md: "md" }}
          colorScheme="purple"
          variant="solid"
          as="a"
          href={CV}
          isLoading={isDownloading}
          loadingText={"Downloading..."}
          download="Adarsha.pdf"
          onClick={handleDownload}
        >
          Download CV
        </Button>
      </HStack>
    </Flex>
  );
}
