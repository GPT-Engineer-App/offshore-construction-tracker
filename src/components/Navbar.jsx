import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2} color="white">
      <Flex alignItems="center">
        <Heading size="md">Construction Tracker</Heading>
        <Spacer />
        <Link as={RouterLink} to="/" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/costs" mx={2}>
          Costs
        </Link>
        <Link as={RouterLink} to="/timeline" mx={2}>
          Timeline
        </Link>
        <Link as={RouterLink} to="/quality" mx={2}>
          Quality Assurance
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;