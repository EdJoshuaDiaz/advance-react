import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

  return (
    <HStack>
      <VStack>
        <Box bg="#ffffff" color="#000000" borderRadius="lg" lineHeight="2"
        >
          <Image src={imageSrc} alt={title} borderRadius="lg"/>
          <Box p={5}>
          <Heading as="h3" size="md" pb={3}>{title}</Heading>
          <Text>{description}</Text>
          <a href="/" style={{fontWeight:"bold"}}><Text fontSize="sm"> See More <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text></a>
          </Box>
        </Box>
      </VStack>
    </HStack>
  )

};

export default Card;
