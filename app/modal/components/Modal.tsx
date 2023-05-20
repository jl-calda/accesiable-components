"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import clsx from "clsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  modal?: boolean;
  title: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  modal,
  description,
  title,
}) => {
  return (
    <>
      <Dialog.Root
        open={isOpen}
        modal
      >
        <Dialog.Trigger />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/20 fixed inset-0" />
          <Dialog.Content
            onEscapeKeyDown={onClose}
            onPointerDownOutside={onClose}
            onInteractOutside={onClose}
            className={clsx(
              "flex flex-col space-y-4",
              "p-4 rounded-md",
              "min-w-[450px]",
              "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
              "bg-white shadow-md"
            )}
          >
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <Dialog.Title className="font-semibold">{title}</Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    className="p-1 hover:bg-red-50 rounded-full cursor-pointer"
                    onClick={onClose}
                  >
                    <Cross1Icon />
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Description className="text-sm font-light text-gray-600">
                {description}
              </Dialog.Description>
            </div>
            {children}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default Modal;
