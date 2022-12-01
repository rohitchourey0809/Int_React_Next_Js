import React, { useState, useEffect } from 'react'

const InputField = (props) => {
    const { name, size, onChange } = props;
    const [totalInput, setTotalInput] = useState(new Array(size).fill(""));
    
    const handleChange = (element, index) => {
        const value = element.value.replace(
            /\D/g,
            ""
          );
        let arr = [...totalInput.map((d, idx) => (idx === index ? value : d))];
        setTotalInput(arr);
        onChange(arr.join(""));
        setTotalInput(arr);
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <React.Fragment>
            {
                totalInput.map((i, key) => (
                    <input
                        {...props}
                        tabIndex={key}
                        maxLength={1}
                        name={name}
                        value={i}
                        onChange={e => handleChange(e.target, key)}
                        onFocus={e => e.target.select()}
                        key={key}
                    />
                ))
            }
        </React.Fragment>
    )
}

export default React.memo(InputField)