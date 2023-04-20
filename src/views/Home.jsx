import {
  CustomButton,
  ExpenseList,
  Modal,
  MonthBalance,
  MonthHeader,
} from "components";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal isOpen={showModal} toggle={setShowModal} />

      <div className="home">
        <MonthHeader />
        <div className="container">
          <MonthBalance />
          <div className="home__container">
            <ExpenseList />
            <CustomButton
              className="add-button"
              message="Agregar Movimiento"
              onInput={() => setShowModal((prevState) => !prevState)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
