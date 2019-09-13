import React from "react"

import Cleave from "cleave.js/react"

const CustomInput = ({ className, change, blur }) => {
  return (
    <Cleave
      className={className}
      onChange={({ target: { value } }) => {
        change(value)
      }}
      onBlur={blur}
      options={{
        numeral: true,
        numeralThousandsGroupStyle: "thousand",
      }}
    />
  )
}

export default CustomInput
