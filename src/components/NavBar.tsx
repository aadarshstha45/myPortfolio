import {
  Button,
  Flex,
  HStack,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import CV from "../assets/Adarsha.pdf";
import WWW from "../assets/icons/www.png";
import { useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { navLinks } from "../utils/navLinks";
import { Link } from "react-scroll";
export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
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
      justify="space-between"
      align={"center"}
      wrap={"wrap"}
      py={10}
      gap={5}
    >
      <Flex align={"center"} gap={2}>
        <Image src={WWW} w={10} h={10} />
        <Text fontSize={{ base: "sm", sm: "2xl" }} fontWeight={"bold"}>
          Adarsha
        </Text>
      </Flex>
      <HStack gap={4} flexWrap={"wrap"}>
        {navLinks.map(({ id, title, to }) => (
          <Link
            key={id}
            to={to}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            <Text
              fontSize={"lg"}
              _hover={{
                cursor: "pointer",
              }}
            >
              {title}
            </Text>
          </Link>
        ))}
      </HStack>
      <HStack gap={4} flexWrap={"wrap"}>
        <Button
          colorScheme="purple"
          as="a"
          href={CV}
          isLoading={isDownloading}
          loadingText={"Downloading..."}
          download="Adarsha.pdf"
          onClick={handleDownload}
          size={"sm"}
        >
          Download CV
        </Button>
        <Button size={"sm"} onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </HStack>
    </Flex>
  );
}
