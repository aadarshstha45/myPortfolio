import {
  Badge,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { projectData } from "../../data";
import { useProjectStore } from "../../utils/store";
import Reveal from "../../layouts/Reveal";

export default function Component2() {
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
      <Flex py={10} flexDir={"column"}>
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
            >
              <Flex
                as={NavLink}
                to={link}
                target="_blank"
                bg={"#2b3445"}
                p={{ base: 1, sm: 5 }}
                my={5}
                key={id}
                _hover={{ transform: "scale(1.01)", bg: "#2b3450" }}
                borderRadius={10}
              >
                <Flex
                  justify={"center"}
                  gap={5}
                  flexDir={{ base: "column", md: "row" }}
                >
                  <Image
                    src={image}
                    w={{ base: 100, sm: 150 }}
                    h={{ base: 100, sm: 150 }}
                  />
                  <Flex flexDir={"column"} gap={2}>
                    <Flex gap={2} flexWrap={"wrap"}>
                      {projectTitle && (
                        <Text fontSize={"2xl"} fontWeight={"semibold"}>
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
                    {description && <Text>{description}</Text>}
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
