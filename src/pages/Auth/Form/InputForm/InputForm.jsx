import React, { useEffect, useState } from "react";
import styles from './InputForm.module.scss'

function InputForm({ placeholder, Icon, type }) {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  function handlerChangeValue({ target }) {
    setValue(target.value);
  }

  useEffect(() => {
    value.length !== 0 ? setFocus(true) : setFocus(false);
  }, [value]);

  return (
    <div className={styles.input__control} data-focus={focus}>
      {Icon && (
        <span className={styles.icon} data-focus={focus}>
          <Icon />
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handlerChangeValue(e)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(value !== "" ? true : false)}
        className={styles.input}
        required
      />
    </div>
  );
}

export default InputForm;
