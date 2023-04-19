import { Modal as ModalBS } from "react-bootstrap";
import FormTransaction from "components/Form/FormTransaction";

function Modal({ isOpen, toggle }) {
  return (
    <>
      <ModalBS centered onHide={() => toggle(false)} show={isOpen}>
        <ModalBS.Header>
          <ModalBS.Title>Agregar Movimiento</ModalBS.Title>
        </ModalBS.Header>
        <ModalBS.Body>
          <FormTransaction toggle={toggle} />
        </ModalBS.Body>
      </ModalBS>
    </>
  );
}

export default Modal;
