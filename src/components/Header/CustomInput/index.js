import React from "react"

import Cleave from "cleave.js/react"

const CustomInput = ({ className, change, blur, disabled, value }) => {
  return (
    <Cleave
      className={className}
      onChange={({ target: { value } }) => {
        change(value)
      }}
      onBlur={blur}
      value={value}
      disabled={disabled}
      options={{
        numeral: true,
        numeralPositiveOnly: true,
        numeralDecimalMark: "!",
        delimiter: " ",
      }}
    />
  )
}

export default CustomInput
