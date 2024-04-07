// Complete the Index page component here
// Use chakra-ui
import { Button, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  // TODO: Create the website here!
  return (
    <VStack spacing={4}>
      <Heading>Welcome to my app!</Heading>
      
      <Link to="/pong">
        <Button colorScheme="blue">Play Pong</Button>
      </Link>
    </VStack>
  );
};

export default Index;
