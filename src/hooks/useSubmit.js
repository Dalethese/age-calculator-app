import { useState } from "react";

export default function useSubmit() {
  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);

  return {
    days,
    months,
    years,
  };
}
