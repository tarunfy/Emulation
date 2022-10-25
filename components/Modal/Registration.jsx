import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const RegistrationModal = ({ text }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Registered successfully.",
      description:
        "We've collected your response, please wait our team will get in touch with you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
  };
  return (
    <>
      <button
        onClick={onOpen}
        className={`bg-[#0070F3] shadow-[#0070F3]/50  shadow-custom  border-0 text-white font-medium transition duration-300 hover:shadow-custom2 hover:shadow-[#0070F3]/50 ${
          text.includes("Join")
            ? "text-lg rounded-lg px-16 py-2"
            : "text-xl  rounded-md px-7 py-3"
        }`}
      >
        {text}
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form>
            <ModalHeader>Join the Emulation Clan</ModalHeader>
            <ModalCloseButton />
            <ModalBody className="!space-y-4">
              <Input placeholder="Full name" required name="full-name" />
              <Input
                placeholder="Contact number"
                type="number"
                required
                name="contact-num"
              />
              <Input placeholder="Email" type="email" required name="email" />
              <Input
                placeholder="Course year"
                type="number"
                required
                name="course-year"
              />
              <Input
                placeholder="Github username"
                required
                name="github-username"
              />
              <Input
                placeholder="Linkedin username"
                required
                name="linkedin-username"
              />
              <Textarea placeholder="Interest/Skills" required name="skills" />
              <Textarea
                placeholder="Why do you want to join this club ?"
                required
                name="why join?"
              />
            </ModalBody>

            <ModalFooter>
              <Button
                variant="outline"
                colorScheme="red"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
              <Button
                onClick={handleSubmit}
                type="submit"
                variant="solid"
                className="!bg-[#0070f3] !text-white"
              >
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegistrationModal;
