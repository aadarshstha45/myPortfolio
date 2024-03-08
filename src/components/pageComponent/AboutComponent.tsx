import { Flex, HStack, Heading, Image, Text } from "@chakra-ui/react";
import ME from "../../assets/me.png";

import { NavLink } from "react-router-dom";
import { socialLinks } from "../../data";
import Reveal from "../../layouts/Reveal";
import { motion } from "framer-motion";

export default function AboutComponent() {
  const variants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
  };

  return (
    <Flex
      flexDir={{ base: "column-reverse", md: "row" }}
      align={"center"}
      gap={5}
      id="about"
    >
      <Flex flexDir={"column"} gap={5}>
        <Reveal
          initialOpacity={0}
          initialY={75}
          finalOpacity={1}
          finalY={0}
          duration={0.5}
        >
          <Heading>Hi There, </Heading>
        </Reveal>
        <Reveal
          initialOpacity={0}
          finalOpacity={1}
          initialY={75}
          finalY={0}
          duration={0.5}
          delay={0.5}
        >
          <Text lineHeight={8} fontSize={"lg"}>
            I am a person who is dedicated to staying informed about emerging
            trends and technology. I am a self-taught developer with a strong
            passion for web development and problem-solving. I am looking for
            opportunities to enhance my knowledge.
          </Text>
        </Reveal>
        <Reveal
          initialOpacity={0}
          finalOpacity={1}
          initialY={75}
          finalY={0}
          duration={0.5}
          delay={1}
        >
          <HStack gap={3} flexWrap={"wrap"}>
            {socialLinks.map(({ id, title, image, link }) => (
              <NavLink to={link} target="_blank" key={id}>
                <Image
                  _hover={{ transform: "scale(1.1)" }}
                  borderRadius={10}
                  src={image}
                  alt={title}
                  w={38}
                  h={38}
                />
              </NavLink>
            ))}
          </HStack>
        </Reveal>
      </Flex>
      <motion.div
        initial={variants.initial}
        animate={variants.animate}
        style={{ width: "100%" }} // Add styles to ensure max width
      >
        <Image
          borderRadius={10}
          src={ME}
          width={{ base: 200, sm: 300, md: 400 }}
          h={{ base: 200, sm: 300 }}
        />
      </motion.div>
    </Flex>
  );
}
