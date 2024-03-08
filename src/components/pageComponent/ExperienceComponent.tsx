import {
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { experienceData } from "../../data";
import Reveal from "../../layouts/Reveal";
import { useExperienceStore } from "../../utils/store";

export default function ExperienceComponent() {
  const { colorMode } = useColorMode();
  const { displayCount, setDisplayCount } = useExperienceStore();

  const handleExpand = () => {
    setDisplayCount();
  };
  return (
    <Flex py={10} flexDir={"column"} id="experience" px={{ base: 4, sm: 0 }}>
      <Heading textAlign={"start"} mb={2}>
        Experience
      </Heading>
      <Text>Experience I have in</Text>
      <Reveal initialOpacity={0} finalOpacity={1} duration={0.5}>
        <Flex justify={"center"} flexWrap={"wrap"} gap={20} my={5}>
          {experienceData
            ?.slice(0, displayCount)
            .map(({ id, title, image, shadow }) => (
              <Reveal
                initialOpacity={0}
                finalOpacity={1}
                initialY={75}
                finalY={0}
                duration={0.5}
              >
                <Card
                  justify={"center"}
                  align={"center"}
                  key={id}
                  bg={colorMode === "dark" ? "#2b3452" : "#f5f5f5"}
                  p={4}
                  shadow={`0 5px 6px ${shadow}`}
                  _hover={{
                    shadow: `0 8px 10px ${shadow}`,
                    transform: "scale(1.01)",
                  }}
                  w={{ base: "170px", sm: "270px" }}
                >
                  <Image
                    src={image}
                    w={{ base: "100px", sm: "150px" }}
                    h={{ base: "100px", sm: "150px" }}
                    mb={4}
                  />
                  <Text
                    textAlign={"center"}
                    fontSize={"lg"}
                    fontWeight={"semibold"}
                  >
                    {title}
                  </Text>
                </Card>
              </Reveal>
            ))}
        </Flex>
      </Reveal>
      {displayCount < experienceData.length && (
        <Button alignSelf={"center"} onClick={handleExpand} my={5}>
          Show More
        </Button>
      )}
    </Flex>
  );
}
