import React, { forwardRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import { enUS, ru } from "date-fns/locale";
import "theme/date-picker.css";

const locale = localStorage.getItem("i18nextLng");
registerLocale(locale, locale === "en" ? enUS : ru);

const DateInput = ({ onChange, value }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  useEffect(() => {
    onChange(startDate);
  }, []);

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Container onClick={onClick} ref={ref}>
      {value}
    </Container>
  ));
  return (
    <DatePicker
      locale={locale}
      dateFormat="dd.MM.yyyy p"
      timeFormat="HH:mm"
      selected={value ? value : startDate}
      onChange={handleChange}
      customInput={<ExampleCustomInput />}
      showTimeShow
    />
  );
};

DateInput.displayName = "DateInput";

export default DateInput;

const Container = styled("div")(
  ({ theme, error }) => css`
      width: 100%;
      border: 1px solid ${error ? theme.color.red : theme.color.four};
      display: flex;
      padding: 9.5px 14px;
      border-radius: 0.428571rem;
      background-color: ${theme.color.four};
      box-shadow: ${theme.boxShadow}
      cursor: pointer;
    `
);
