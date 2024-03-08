import {
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import TextInput from "../FormComponent/TextInput";
import Reveal from "../../layouts/Reveal";
import { useState } from "react";
import emailjs from "emailjs-com";
import { contactInformation } from "../../data";
export default function ContactComponent() {
  const { colorMode } = useColorMode();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const sendMail = await emailjs.sendForm(
        "service_zdebbja",
        "template_lhm6zw9",
        e.currentTarget as HTMLFormElement,
        "mN7Rmk0J0EctaGh5k"
      );
      if (sendMail.status === 200) {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        toast({
          title: "Email Sent",
          position: "top-right",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }

      console.log(sendMail);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Flex flexDir={"column"} gap={4} py={10} id="contact">
      <Heading textAlign={"start"}>Contact Me</Heading>
      <Flex gap={20} flexWrap={"wrap"}>
        <Flex w={{ base: "full", md: "70%", lg: "40%" }} flexDir={"column"}>
          <Text fontSize={{ base: "lg", sm: "xl" }} fontWeight={"medium"}>
            Fill the form to contact me
          </Text>
          <Reveal
            initialOpacity={0}
            finalOpacity={1}
            initialY={75}
            finalY={0}
            duration={0.5}
          >
            <form onSubmit={handleSubmit}>
              <TextInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="from_name"
                placeholder="Enter Your Name"
              />
              <TextInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="from_email"
                placeholder="Enter Your Email"
              />
              <TextInput
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="from_phone"
                placeholder="Enter Your Phone"
              />
              <TextInput
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="textArea"
                name="message"
                placeholder="Enter Your Message"
              />
              <Button alignContent={"center"} type="submit">
                Send
              </Button>
            </form>
          </Reveal>
        </Flex>
        <Flex flexDir={"column"} flexWrap={"wrap"}>
          <Text
            mb={2}
            fontSize={{ base: "lg", sm: "xl" }}
            fontWeight={"medium"}
          >
            My Contact Information
          </Text>
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
              bg={colorMode === "dark" ? "#2b3452" : "#f5f5f5"}
              p={4}
              h={"full"}
              maxW={{ base: "full", md: "400px" }}
            >
              <Flex w={"full"} flexDir={"column"} gap={5} flexWrap={"wrap"}>
                {contactInformation.map(({ id, title, slug, image, value }) => (
                  <Link
                    href={
                      slug === "phone"
                        ? `tel:${value}`
                        : slug === "email"
                        ? `mailto:${value}`
                        : slug === "address"
                        ? "https://maps.app.goo.gl/4GprtprWY9pg2S9f6"
                        : ""
                    }
                    target="_blank"
                    _hover={{ textDecor: "none", transform: "scale(1.02)" }}
                  >
                    <Flex key={id} align={"center"} gap={2} flexWrap={"wrap"}>
                      <Image
                        w={{ base: 7, sm: 10 }}
                        h={{ base: 7, sm: 10 }}
                        src={image}
                        alt={title}
                      />
                      <Text fontSize={{ base: "sm", sm: "md", md: "lg" }}>
                        {value}
                      </Text>
                    </Flex>
                  </Link>
                ))}
              </Flex>
            </Card>
          </Reveal>
        </Flex>
      </Flex>
    </Flex>
  );
}
