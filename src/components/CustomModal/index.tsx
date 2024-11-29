import { Center } from '../ui/center';
import { Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from '../ui/modal';
import { Heading } from '../ui/heading';
import { X } from 'lucide-react-native';
import { Icon } from '../ui/icon';
import { ICustomModalProps } from './types';

export const CustomModal = ({ title, showModal, handleClose, children, footer }: ICustomModalProps) => {
  return (
    <Center className="h-[300px] absolute">
      <Modal
        isOpen={showModal}
        size="lg"
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg" className="text-typography-950">
              {title}
            </Heading>
            <ModalCloseButton onPress={handleClose}>
              <Icon
                as={X}
                size="md"
                className="
                    stroke-background-400
                    group-[:hover]/modal-close-button:stroke-background-700
                    group-[:active]/modal-close-button:stroke-background-900
                    group-[:focus-visible]/modal-close-button:stroke-background-900
                "
              />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            {children}
          </ModalBody>
          <ModalFooter>
            {footer}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}

