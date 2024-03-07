import { Container } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <Container minH={"100vh"} maxW="container.lg">
      <NavBar />

      <Outlet />
    </Container>
  );
}
