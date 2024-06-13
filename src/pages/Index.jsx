import { Container, Text, VStack, Heading, Button, Flex } from "@chakra-ui/react";
import { FaCalendarAlt, FaUserPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Dentist Shop Booking Management</Heading>
        <Text fontSize="lg" textAlign="center">Manage your appointments and patient information with ease.</Text>
        <Flex direction="column" align="center" width="100%" mt={8}>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" size="lg" width="100%" mb={4}>
            View Appointments
          </Button>
          <Button leftIcon={<FaUserPlus />} colorScheme="teal" size="lg" width="100%">
            Add New Patient
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;