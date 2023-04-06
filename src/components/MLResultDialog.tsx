import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function MLResultDialog({
  isOpen,
  onClose,
  loading,
  dialogMessage,
}: {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  dialogMessage: string;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={closeButtonRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {loading ? "Loading..." : dialogMessage}
          </AlertDialogHeader>

          <AlertDialogBody>{loading ? "Please wait..." : ""}</AlertDialogBody>

          {!loading && (
            <AlertDialogFooter>
              <Button ref={closeButtonRef} colorScheme="blue" onClick={onClose}>
                Close
              </Button>
            </AlertDialogFooter>
          )}
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
