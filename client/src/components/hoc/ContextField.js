import React from "react";
import { useController, useFormContext } from "react-hook-form";
import { Input } from "../base";

const ContextField = ({
  component: FieldComponent = Input,
  defaultValue = undefined,
  name,
  ...props
}) => {
  const { control } = useFormContext();
  const {
    field: { onBlur, value, ref, onChange },
    formState: { errors },
  } = useController({ name, control, defaultValue });

  const handleChange = (e, data) => {
    const value = data ? data.value : e && e.target ? e.target.value : e;
    onChange && onChange(value);
  };
  return (
    <FieldComponent
      inputRef={ref}
      error={errors[name]?.message}
      onChange={handleChange}
      onBlur={onBlur}
      value={value}
      defaultValue={defaultValue}
      {...props}
    />
  );
};

ContextField.displayName = "ContextField";

export default ContextField;
