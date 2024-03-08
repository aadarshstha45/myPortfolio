import {
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { educationData } from "../../data";

export default function EducationComponent() {
  const { colorMode } = useColorMode();
  return (
    <Flex flexDir={"column"} id="education" py={10}>
      <Heading textAlign={"start"} mb={5}>
        Education
      </Heading>
      <Text>My Education Background</Text>
      <Flex
        justify={"center"}
        gap={10}
        flexWrap={"wrap"}
        my={5}
        borderRadius={10}
      >
        {educationData.map(({ id, title, description, duration }) => (
          <Card
            w={"270px"}
            key={id}
            bg={colorMode === "dark" ? "#2b3452" : "#f5f5f5"}
          >
            <CardBody>
              <Text
                fontWeight={"bold"}
                fontSize={{ base: "lg", md: "2xl" }}
                textAlign={"start"}
                mb={2}
              >
                {title}
              </Text>
              <Text mb={2}>{description}</Text>
              <Text mb={2}>{duration}</Text>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}
