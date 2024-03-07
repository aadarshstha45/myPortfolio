import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import TextInput from "../FormComponent/TextInput";
import Reveal from "../../layouts/Reveal";

export default function Component4() {
  return (
    <Reveal
      initialOpacity={0}
      finalOpacity={1}
      initialY={75}
      finalY={0}
      duration={0.5}
    >
      <Flex flexDir={"column"} py={10}>
        <Heading textAlign={"start"} mb={4}>
          Contact
        </Heading>
        <Text mb={4}>Fill the form to contact me</Text>

        <form style={{ width: "60%" }}>
          <TextInput name="name" placeholder="Enter Your Name" />
          <TextInput name="email" placeholder="Enter Your Email" />
          <TextInput name="phone" placeholder="Enter Your Phone" />
          <TextInput
            type="textArea"
            name="message"
            placeholder="Enter Your Message"
          />
          <Button alignContent={"center"} type="submit">
            Send
          </Button>
        </form>
      </Flex>
    </Reveal>
  );
}
