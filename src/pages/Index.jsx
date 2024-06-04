import { Box, Container, Flex, Heading, Text, VStack, HStack, Progress, Stat, StatLabel, StatNumber, StatHelpText, Divider } from "@chakra-ui/react";
import { FaDollarSign, FaClock, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h1" size="xl">Offshore Platform Construction Tracker</Heading>
      </Flex>
      
      <Box bg="gray.100" p={6} borderRadius="md" mb={6}>
        <Heading as="h2" size="lg" mb={4}>Costs</Heading>
        <VStack spacing={4}>
          <Stat>
            <StatLabel>Total Budget</StatLabel>
            <StatNumber>$10,000,000</StatNumber>
            <StatHelpText>As of October 2023</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Spent</StatLabel>
            <StatNumber>$4,500,000</StatNumber>
            <StatHelpText>45% of total budget</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Remaining</StatLabel>
            <StatNumber>$5,500,000</StatNumber>
            <StatHelpText>55% of total budget</StatHelpText>
          </Stat>
        </VStack>
      </Box>

      <Box bg="gray.100" p={6} borderRadius="md" mb={6}>
        <Heading as="h2" size="lg" mb={4}>Timeline</Heading>
        <VStack spacing={4}>
          <HStack justifyContent="space-between" width="100%">
            <Text>Planning</Text>
            <Progress value={100} size="lg" colorScheme="green" width="80%" />
            <Text>100%</Text>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text>Design</Text>
            <Progress value={80} size="lg" colorScheme="blue" width="80%" />
            <Text>80%</Text>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text>Construction</Text>
            <Progress value={50} size="lg" colorScheme="yellow" width="80%" />
            <Text>50%</Text>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text>Testing</Text>
            <Progress value={20} size="lg" colorScheme="red" width="80%" />
            <Text>20%</Text>
          </HStack>
        </VStack>
      </Box>

      <Box bg="gray.100" p={6} borderRadius="md">
        <Heading as="h2" size="lg" mb={4}>Quality Assurance</Heading>
        <VStack spacing={4}>
          <HStack justifyContent="space-between" width="100%">
            <Text>Inspections Passed</Text>
            <FaCheckCircle color="green" size="24px" />
            <Text>85%</Text>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text>Defects Found</Text>
            <FaClock color="orange" size="24px" />
            <Text>15%</Text>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text>Safety Incidents</Text>
            <FaDollarSign color="red" size="24px" />
            <Text>2</Text>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;