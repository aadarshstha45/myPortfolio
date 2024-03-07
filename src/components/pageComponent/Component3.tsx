import { Button, Card, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { experienceData } from "../../data";
import Reveal from "../../layouts/Reveal";
import { useExperienceStore } from "../../utils/store";
import { motion } from "framer-motion";

export default function Component3() {
  const { displayCount, setDisplayCount } = useExperienceStore();

  const handleExpand = () => {
    setDisplayCount();
  };
  return (
    <Flex py={10} flexDir={"column"}>
      <Heading textAlign={"start"} mb={2}>
        Experience
      </Heading>
      <Text>Experience I have in</Text>
      <Reveal initialOpacity={0} finalOpacity={1}>
        <Flex justify={"center"} flexWrap={"wrap"} gap={20} my={5}>
          {experienceData
            ?.slice(0, displayCount)
            .map(({ id, title, image, shadow }) => (
              <Card
                justify={"center"}
                align={"center"}
                key={id}
                bg={"#2b3452"}
                p={4}
                shadow={`0 5px 6px ${shadow}`}
                _hover={{
                  shadow: `0 8px 10px ${shadow}`,
                  transform: "scale(1.01)",
                }}
                w={"250px"}
                as={motion.div}
                animate={{
                  transform: "scale(1)",
                  transition: { duration: 0.8 },
                }}
              >
                <Image src={image} w={"150px"} h={"150px"} mb={4} />
                <Text
                  textAlign={"center"}
                  fontSize={"lg"}
                  fontWeight={"semibold"}
                  textColor={"white"}
                >
                  {title}
                </Text>
              </Card>
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
