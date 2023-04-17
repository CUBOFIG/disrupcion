import { GlobalContext } from "contexts/Global.context";
import { Nav, NavItem } from "react-bootstrap";
import { useContext } from "react";

const MonthHeader = () => {
  const { currentMonth, nextMonths, previousMonths, updateMonth } =
    useContext(GlobalContext);

  const { lastMonth, penultimateMonth } = previousMonths;
  const { nextMonth, afterNextMonth } = nextMonths;

  return (
    <>
      <Nav className="month-header justify-content-center">
        <div className="d-flex">
          <NavItem>
            <div onClick={() => updateMonth(penultimateMonth)}>
              {penultimateMonth}
            </div>
          </NavItem>
          <NavItem>
            <div onClick={() => updateMonth(lastMonth)}>{lastMonth}</div>
          </NavItem>
        </div>
        <NavItem>{currentMonth}</NavItem>
        <div className="d-flex">
          <NavItem>
            <div onClick={() => updateMonth(nextMonth)}>{nextMonth}</div>
          </NavItem>
          <NavItem>
            <div onClick={() => updateMonth(afterNextMonth)}>
              {afterNextMonth}
            </div>
          </NavItem>
        </div>
      </Nav>
    </>
  );
};

export default MonthHeader;
