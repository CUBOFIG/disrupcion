import { useState, useEffect } from "react";
import moment from "moment";

export const useCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(moment().format("MMMM"));
  const [year, setYear] = useState(moment().format("YYYY"));
  const [previousMonths, setPreviousMonths] = useState({
    lastMonth: null,
    penultimateMonth: null,
  });
  const [nextMonths, setNextMonths] = useState({
    nextMonth: null,
    afterNextMonth: null,
  });

  function getNextOrPreviousMonth(currentMonth, increment) {
    const currentMoment = moment(currentMonth, "MMMM");
    const nextOrPreviousMoment = currentMoment.add(increment, "month");
    const nextOrPreviousMonth = nextOrPreviousMoment.format("MMMM");

    return nextOrPreviousMonth;
  }

  const updateMonth = (month) => {
    const restYear =
      (currentMonth === "febrero" || currentMonth === "enero") &&
      (month === "diciembre" || month === "noviembre");

    const incrementY =
      (month === "febrero" || month === "enero") &&
      (currentMonth === "diciembre" || currentMonth === "noviembre");

    if (restYear || incrementY)
      setYear((prevState) => {
        const incrementYear = restYear && !incrementY;
        return +prevState + (!incrementYear ? 1 : -1);
      });

    setCurrentMonth(month);
  };

  useEffect(() => {
    const nextMonth = getNextOrPreviousMonth(currentMonth, 1);
    const afterNextMonth = getNextOrPreviousMonth(currentMonth, 2);
    const lastMonth = getNextOrPreviousMonth(currentMonth, -1);
    const penultimateMonth = getNextOrPreviousMonth(currentMonth, -2);

    setNextMonths({
      nextMonth,
      afterNextMonth,
    });

    setPreviousMonths({
      lastMonth,
      penultimateMonth,
    });
  }, [currentMonth, year]);

  return {
    currentMonth,
    updateMonth,
    nextMonths,
    previousMonths,
    year,
  };
};
