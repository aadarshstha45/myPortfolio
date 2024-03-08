import {
  Badge,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { projectData } from "../../data";
import { useProjectStore } from "../../utils/store";
import Reveal from "../../layouts/Reveal";

export default function ProjectComponent() {
  const { colorMode } = useColorMode();
  const { displayCount, setDisplayCount } = useProjectStore();

  const handleExpand = () => {
    setDisplayCount();
  };

  return (
    <Reveal
      initialOpacity={0}
      finalOpacity={1}
      initialY={75}
      finalY={0}
      delay={2}
    >
      <Flex py={10} flexDir={"column"} id="project">
        <Heading textAlign={"start"} mb={2}>
          Projects
        </Heading>
        <Text>Click to open Github Repo</Text>
        {projectData
          .slice(0, displayCount)
          .map(({ id, projectTitle, description, image, link, languages }) => (
            <Reveal
              initialOpacity={0}
              finalOpacity={1}
              initialY={75}
              finalY={0}
              duration={0.5}
              key={id}
            >
              <Flex
                as={NavLink}
                to={link}
                target="_blank"
                bg={colorMode === "dark" ? "#2b3445" : "#f5f5f5"}
                p={5}
                my={5}
                _hover={{
                  transform: "scale(1.01)",
                  bg: colorMode === "dark" ? "#2b3450" : "#f5f5f1",
                }}
                borderRadius={10}
              >
                <Flex
                  justify={"center"}
                  gap={5}
                  flexDir={{ base: "column", md: "row" }}
                >
                  <Image
                    src={image}
                    w={{ base: 82, sm: 150 }}
                    h={{ base: 82, sm: 150 }}
                  />
                  <Flex flexDir={"column"} gap={2}>
                    <Flex gap={2} flexWrap={"wrap"}>
                      {projectTitle && (
                        <Text
                          fontSize={{ base: "md", sm: "lg", md: "xl" }}
                          fontWeight={"semibold"}
                        >
                          {projectTitle}
                        </Text>
                      )}
                      {languages &&
                        languages.map((language, index) => (
                          <HStack flexWrap={"wrap"} key={index}>
                            <Badge
                              borderRadius={5}
                              colorScheme={language.color}
                            >
                              {language.name}
                            </Badge>
                          </HStack>
                        ))}
                    </Flex>
                    {description && (
                      <Text fontSize={{ base: "sm", sm: "lg", md: "xl" }}>
                        {description}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              </Flex>
            </Reveal>
          ))}
        {displayCount < projectData.length && (
          <Button alignSelf={"center"} onClick={handleExpand}>
            See More
          </Button>
        )}
      </Flex>
    </Reveal>
  );
}
