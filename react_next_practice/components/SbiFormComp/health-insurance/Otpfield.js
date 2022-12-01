import React, {useEffect} from "react";
import InputField from "./InputField";
const Otpfield = (props) => {
    const { name, value, onChange, verify } = { ...props };

    React.useEffect(() => {
      console.log("ee ", props.reintialize);
       onChange("")
    }, [props.reintialize])
  
    return (
      <div className="fields_sc">
        <p>We have sent OTP on your number</p>
        <InputField
          type="tel"
          name={name}
          className="optInput"
          size={4}
          value={value}
          onChange={(v) => onChange(v)}
          readonly={verify}
        />
        {props.children}
      </div>
    );
}

export default Otpfield