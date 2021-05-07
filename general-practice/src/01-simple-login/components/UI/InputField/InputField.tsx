import React, { ChangeEventHandler, useMemo } from "react";
import { At, MailOpen, Pencil } from "react-ionicons";
import "./InputField.css";

type Props = {
  type: "text" | "email" | "password";
  label: string;
  name: string;
  value: string;
  placeholder: string;
  isShowIcon: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const InputField = ({
  type,
  label,
  name,
  value,
  placeholder,
  isShowIcon,
  onChange,
}: Props) => {
  const ProperIcon = useMemo(() => {
    switch (type) {
      case "email":
        return At;
      case "password":
        return MailOpen;
      default:
        return Pencil;
    }
  }, [type]);

  return (
    <div className="inputField">
      <label className="inputField__label">{label}</label>
      <div className="inputField__container">
        <input
          className="inputField_input"
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {isShowIcon && (
          <ProperIcon color={"rgb(152, 152, 199)"} height="30px" width="30px" />
        )}
      </div>
    </div>
  );
};

export default InputField;
