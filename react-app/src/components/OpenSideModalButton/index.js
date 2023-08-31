import React from 'react';
import { useSideModal } from '../../context/SideModal';

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  buttonStyle, //give the Modal button a style
}) {
  const { setModalContent, setOnModalClose } = useSideModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };

  return (
    <button onClick={onClick} className={buttonStyle}>{buttonText}</button>
  );
}

export default OpenModalButton;