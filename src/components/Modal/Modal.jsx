import {
  Modal as ModalComponent,
  ModalBody,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import FormTransaction from "components/Form/FormTransaction";

function Modal({ isOpen, toggle }) {
  return (
    <ModalComponent centered onHide={() => toggle(false)} show={isOpen}>
      <ModalHeader>
        <ModalTitle>Agregar Movimiento</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <FormTransaction toggle={toggle} />
      </ModalBody>
    </ModalComponent>
  );
}

export default Modal;
