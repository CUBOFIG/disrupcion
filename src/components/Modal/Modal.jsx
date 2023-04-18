import { GlobalContext } from "contexts/Global.context";
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Modal as ModalBS, Button } from "react-bootstrap";
import moment from "moment";
import FormTransaction from "components/Form/FormTransaction";

function Modal({ isOpen, toggle }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date());

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      description,
      amount: +amount,
      date: {
        day: moment(date).format("DD"),
        month: moment(date).format("MMMM"),
        year: moment(date).format("YYYY"),
      },
    };

    addTransaction(newTransaction);
    onClear();
  };

  const onClear = () => {
    setDescription("");
    setAmount(0);
  };

  const handleClose = () => toggle(false);

  return (
    <>
      <ModalBS onHide={handleClose} show={isOpen} className="modal" centered>
        <ModalBS.Header>
          <ModalBS.Title>Agregar Movimiento</ModalBS.Title>
        </ModalBS.Header>
        <ModalBS.Body>
          {/* <form onSubmit={onSubmit} className="modal__form">
            <div className="form-control">
              <label htmlFor="text">Concepto</label>
              <input
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Especifique el concepto de la transacción..."
                type="text"
                value={description}
              />
            </div>
            <div className="form-control">
              <label htmlFor="amount">Monto</label>
              <input
                id="amount"
                onChange={(e) => setAmount(e.target.value)}
                placeholder="$0.00"
                type="number"
                value={amount}
              />
            </div>
            <div className="form-control">
              <input
                type="date"
                id="start"
                name="trip-start"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                max={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div className="w-100">
              <Button
                type="submit"
                variant="primary"
                onClick={handleClose}
                className="w-100 mt-3"
                value={date}
              >
                Agregar Movimiento
              </Button>
            </div>
          </form> */}
          <FormTransaction toggle={toggle} />
        </ModalBS.Body>
      </ModalBS>
    </>
  );
}

export default Modal;
