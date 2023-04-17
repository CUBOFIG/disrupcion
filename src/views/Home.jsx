import {
  CustomButton,
  ExpenseList,
  Modal,
  MonthBalance,
  MonthHeader,
} from "components";
import { useState } from "react";

const Home = () => {
  const [show, showModal] = useState(false);

  return (
    <>
      <Modal isOpen={show} toggle={showModal} />

      <div className="home">
        <MonthHeader />
        <div className="container">
          <MonthBalance />
          <div className=" home__container">
            <ExpenseList />
            <CustomButton
              message="Agregar Movimiento"
              onInput={() => showModal((prevState) => !prevState)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
