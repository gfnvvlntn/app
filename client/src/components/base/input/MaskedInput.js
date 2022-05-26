import React, { useState } from "react";
import { IMaskMixin } from "react-imask";
import { Field, FieldWrapper } from "./styled";

const IMaskInput = IMaskMixin(({ inputRef, ...props }) => (
  <Field ref={inputRef} {...props} />
));

const Money = {
  mask: Number,
  unmask: "typed",
  scale: 2,
  signed: false,
  maxLength: 9,
  thousandsSeparator: " ",
  normalizeZeros: true,
  radix: ".",
};

const NumberMask = {
  mask: Number,
  unmask: "typed",
  normalizeZeros: true,
  radix: ",",
};

const MaskedInput = ({ defaultValue, onChange, maskType, lazy, ...props }) => {
  const [value, setValue] = useState(defaultValue?.toString() || "");
  let options;

  switch (maskType) {
    case "money": {
      options = { ...Money, ...props };
      break;
    }
    default:
      options = { ...NumberMask, props };
  }

  const handleAccept = (value) => {
    setValue(value);
    onChange && onChange(value);
  };

  return (
    <FieldWrapper>
      <IMaskInput value={value} onAccept={handleAccept} {...options} />
    </FieldWrapper>
  );
};

export default MaskedInput;
