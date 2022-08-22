import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Divider,
  Stack,
  Tooltip,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  ModalFooter,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  SunIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import React, { FormEvent, ReactNode, useRef, useState } from "react";
import { useRouter } from "next/router";
import { IUser } from "../../../types/IUser";

export default function Navbar({ user }: { user: IUser }) {
  const { toggleColorMode, colorMode } = useColorMode();
  const router = useRouter();
  const signOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    router.push("/");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: modalIsOpen,
    onOpen: modalOnOpen,
    onClose: modalOnClose,
  } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  // Toast for creating movie/rating
  const toast = useToast();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");

  const nameError = name.length < 2;
  const descriptionError = description.length < 20;
  const categoryError = category.length < 5;
  const urlError = url.length < 5;

  const handleNameChange = (e: any) => setName(e.target.value);
  const handleDescriptionChange = (e: any) => setDescription(e.target.value);
  const handleCategoryChange = (e: any) => setCategory(e.target.value);
  const handleUrlChange = (e: any) => setUrl(e.target.value);

  const handleAddSubmit = (e: React.FormEvent) => {
    if (nameError || descriptionError || categoryError) {
      return toast({
        title: "Error",
        description: "Please fill out all fields",
        status: "error",
        duration: 3000,
        isClosable: false,
      });
    }
    console.log({
      name,
      description,
      category,
    });
    modalOnClose();
    toast({
      title: "Movie added",
      description: `"${name}" has been added to the database`,
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <Box
      borderTopColor={useColorModeValue("teal.400", "teal.200")}
      borderTopWidth={5}
    >
      <Box px={4} mx={100}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Heading
                as="a"
                fontSize={20}
                fontFamily={"Ubuntu"}
                color={useColorModeValue("teal.400", "teal.200")}
                fontWeight="black"
                href="/dashboard"
              >
                AtomMDB
              </Heading>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/dashboard"}
              >
                Dashboard
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/api"}
              >
                API
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <IconButton
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              aria-label={"Toggle Color Mode"}
              mr={4}
            />
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
              onClick={modalOnOpen}
            >
              Add Movie
            </Button>
            <Modal
              finalFocusRef={finalRef}
              isOpen={modalIsOpen}
              onClose={modalOnClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Movie</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl isInvalid={nameError}>
                    <FormLabel>Movie Name</FormLabel>
                    <Input
                      isRequired
                      ref={initialRef}
                      value={name}
                      onChange={handleNameChange}
                      placeholder="Gone With The Wind"
                    />
                    {nameError ? (
                      <FormErrorMessage>
                        Name must be at least 2 characters.
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <FormControl mt={4} isInvalid={descriptionError}>
                    <FormLabel>Description</FormLabel>
                    <Input
                      isRequired
                      value={description}
                      onChange={handleDescriptionChange}
                      placeholder="Presented as originally released in 1939. Includes themes and character depictions which may be offensive and problematic to contemporary audiences..."
                    />
                    {descriptionError ? (
                      <FormErrorMessage>
                        Description must be at least 20 characters.
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <FormControl mt={4} isInvalid={categoryError}>
                    <FormLabel>Category</FormLabel>
                    <Input
                      isRequired
                      value={category}
                      onChange={handleCategoryChange}
                      placeholder="Romance/Drama"
                    />
                    {categoryError ? (
                      <FormErrorMessage>
                        Category must be at least 5 characters.
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>
                </ModalBody>
                <Divider />
                <ModalFooter>
                  <Button
                    type="submit"
                    colorScheme="teal"
                    mr={3}
                    onClick={handleAddSubmit}
                  >
                    Add
                  </Button>
                  <Button variant="ghost">Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Menu>
              <Tooltip label={user?.displayName}>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={`${user?.photoURL}`} />
                </MenuButton>
              </Tooltip>
              <MenuList>
                <MenuItem>API</MenuItem>
                <MenuDivider />
                <MenuItem onClick={signOut}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Link
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"/dashboard"}
            >
              Dashboard
            </Link>
            <Link
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"/api"}
            >
              API
            </Link>
          </Stack>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
}
