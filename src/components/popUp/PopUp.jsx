import { useEffect, useState } from "react";
import { CloseIcon, PopupBox, Box } from "./PopUpStyle";

export default function Popup({
  children = null,
  width = "40%",
  height = "78%",
  top = "0",
  bottom = 1,
  left = 1,
  right = 0,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // esse useEffect é para chamar o modal de feedback a cada 40 segundo que a página renderiza
  useEffect(() => {
    setTimeout(togglePopup, 40000);
  }, []);
  return (
    <>
      {isOpen && (
        <PopupBox>
          <Box
            width={`${width}`}
            height={`${height}`}
            top={`${top}`}
            bottom={`${bottom}`}
            left={`${left}`}
            right={`${right}`}
          >
            <CloseIcon onClick={handleClose}>x</CloseIcon>
            {children}
          </Box>
        </PopupBox>
      )}
    </>
  );
}
