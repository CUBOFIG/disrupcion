import { GlobalContext } from "contexts/Global.context";
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Modal, Button } from "react-bootstrap";
import moment from "moment";

function Example({ isOpen, toggle }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(moment().format("DD-MM-YYYY"));

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      text,
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
    setText("");
    setAmount(0);
  };

  const handleClose = () => toggle(false);

  return (
    <>
      <Modal onHide={handleClose} show={isOpen} className="modal" centered>
        <Modal.Header>
          <Modal.Title>Agregar Movimiento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit} className="modal__form">
            <div className="form-control">
              <label htmlFor="text">Concepto</label>
              <input
                onChange={(e) => setText(e.target.value)}
                placeholder="Especifique el concepto de la transacción..."
                type="text"
                value={text}
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
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
