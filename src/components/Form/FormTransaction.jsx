import React from "react";

const FormTransaction = () => {
  return (
    <>
      <form onSubmit={onSubmit} className="modal__form">
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
      </form>
    </>
  );
};

export default FormTransaction;
