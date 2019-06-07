import React from 'react';
import {
  Card,
  Text,
  Box,
  IconButton,
  Heading,
  BackgroundImage,
  Flex,
  Input,
  Image,
  PrimaryButton,
} from './primitives';
import { ReactComponent as Menu } from './menu.svg';
import { ReactComponent as Search } from './search.svg';

export const TypographySwatch = props => (
  <Card
    bg="white"
    alignItems="center"
    height={[80, 176]}
    justifyContent="center"
    {...props}
  >
    <Heading fontSize={[5, 6, 7, 8]} m={0} lineHeight="solid">
      Aa
    </Heading>
  </Card>
);

export const ColorSwatch = ({ name, ...props }) => (
  <Card bg="white" flexDirection="column" {...props}>
    <Box bg={name} flex="1 1 auto" />
    <Text
      style={{ textTransform: 'capitalize' }}
      fontWeight={500}
      fontSize={['0', 1, 1]}
      m={0}
      lineHeight="solid"
      p={3}
    >
      {name}
    </Text>
  </Card>
);

export const NavBar = ({ name, ...props }) => (
  <Card as="nav" bg="white" height={64} alignItems="center" px={3} {...props}>
    <IconButton color="gray" name="Menu" icon={<Menu />} />
    <Heading
      fontSize={[3, 4]}
      lineHeight="solid"
      flex="1 1 0"
      textAlign="center"
    >
      Details
    </Heading>
    <IconButton color="gray" name="Search" icon={<Search />} />
  </Card>
);

export const MediaCard = ({ image, title, body, ...props }) => (
  <Card bg="white" flexDirection={['row', 'column']} {...props}>
    <BackgroundImage image={image} minWidth={4} flex="1 1 auto" />
    <Flex justifyContent="center" flexDirection="column" py={[3, 4]} px={3}>
      <Heading fontSize={2} color="black" mb={2}>
        {title}
      </Heading>
      <Text fontSize={1} color="gray">
        {body}
      </Text>
    </Flex>
  </Card>
);

export const SearchBar = ({ name, ...props }) => (
  <Card
    as="section"
    role="search"
    bg="white"
    height={64}
    alignItems="center"
    px={3}
    {...props}
  >
    <Search color="gray" aria-hidden="true" />
    <Input type="search" aria-label="search" ml={3} />
  </Card>
);

export const ProfileCard = ({ avatar, name, title, ...props }) => (
  <Card
    bg="white"
    flexDirection={['row', 'column']}
    alignItems="center"
    justifyContent={['flex-start', 'center']}
    pr={4}
    pl={[0, 4]}
    {...props}
  >
    <Image
      src={avatar}
      flex="none"
      width={['auto', 3]}
      height={['100%', 3]}
      borderRadius={[0, '100%']}
    />
    <Box
      width={['auto', '100%']}
      mt={[0, 3]}
      ml={[4, 0]}
      justifyContent={['flex-end', 'center']}
      flexDirection="column"
    >
      <Heading
        fontSize={[3, 2]}
        color="black"
        textAlign={['left', 'center']}
        mb={[1, 2]}
      >
        {name}
      </Heading>
      <Text
        fontSize={2}
        color="gray"
        textAlign={['left', 'center']}
        mb={[3, 4]}
      >
        {title}
      </Text>
      <PrimaryButton px={3} py={[2, 3]} width={[4, '100%']} mx="auto">
        Follow
      </PrimaryButton>
    </Box>
  </Card>
);
