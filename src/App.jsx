/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";

import dayjs from "dayjs";
import arrowDown from "./assets/icon-arrow.svg";
import Input from "./components/Input";
import * as S from "./styles/app.styles";

function App() {
  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);

  const [diffDays, setDiffDays] = useState("--");
  const [diffMonths, setDiffMonths] = useState("--");
  const [diffYears, setDiffYears] = useState("--");

  const inputs = [
    {
      label: "day",
      placeholder: "DD",
    },
    {
      label: "month",
      placeholder: "MM",
    },
    {
      label: "year",
      placeholder: "YYYY",
    },
  ];

  const handleChange = (label) => {
    const inputFuncs = {
      day: (e) => setDays(e.target.value),
      month: (e) => setMonths(e.target.value),
      year: (e) => setYears(e.target.value),
    };

    return inputFuncs[label];
  };

  const calcDifference = () => {
    const currentDate = dayjs();
    const userDate = dayjs(years, months, days);
    const diffDayss = currentDate.diff(userDate, "days");
    // const yearsAge = diffDayss
    console.log(diffDayss);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    calcDifference();

    if (days && months && years) {
      setDiffDays(days);
      setDiffMonths(months);
      setDiffYears(years);
    }

    if (days === "") setDiffDays("--");
    if (months === "") setDiffMonths("--");
    if (years === "") setDiffYears("--");
  };

  return (
    <S.Container>
      <S.StyledForm onSubmit={handleSubmit}>
        <S.InputsContainer>
          {inputs.map((input) => (
            <Input
              key={input.label}
              label={input.label}
              placeholder={input.placeholder}
              handleChange={() => handleChange(input.label)}
            />
          ))}
        </S.InputsContainer>

        <S.SubmitContainer>
          <S.Line />
          <S.StyledButton type="submit">
            <img src={arrowDown} alt="calculate button" />
          </S.StyledButton>
        </S.SubmitContainer>
      </S.StyledForm>

      <S.MainContent>
        <h1>
          <span>{diffYears}</span> years
        </h1>
        <h1>
          <span>{diffMonths}</span> months
        </h1>
        <h1>
          <span>{diffDays}</span> days
        </h1>
      </S.MainContent>
    </S.Container>
  );
}

export default App;
