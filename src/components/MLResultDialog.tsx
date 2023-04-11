import { CheckCircleIcon, QuestionIcon, WarningIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Link,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function MLResultDialog({
  isOpen,
  onClose,
  loading,
  dialogMessage,
  prediction,
}: {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  dialogMessage: string;
  prediction: number | null;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onFaqClick = () => {
    const element = document.getElementById("faq");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }

    onClose();
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={closeButtonRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="3xl" fontWeight="bold" mb="-1" pb="0">
            {loading ? (
              "Loading"
            ) : (
              <div>
                {prediction === 1 ? (
                  <>
                    <WarningIcon
                      boxSize="30px"
                      color="yellow.500"
                      m="4"
                      mt="3"
                    />
                    Likely Scam
                  </>
                ) : prediction === 0 ? (
                  <>
                    <CheckCircleIcon
                      boxSize="30px"
                      color="green.500"
                      m="4"
                      mt="3"
                    />
                    Likely Safe
                  </>
                ) : (
                  <>
                    <QuestionIcon boxSize="30px" color="red.500" m="4" mt="3" />
                    Error
                  </>
                )}
              </div>
            )}
          </AlertDialogHeader>

          <AlertDialogBody>
            {loading ? (
              "Please wait..."
            ) : (
              <p>
                The model in use is one of our least powerful due to deployment
                constraints, and results may not be perfect. Refer to the{" "}
                <Link
                  as="button"
                  textDecoration="underline"
                  color="blue.500"
                  onClick={onFaqClick}
                >
                  FAQ page
                </Link>{" "}
                for more information.
              </p>
            )}
          </AlertDialogBody>

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
