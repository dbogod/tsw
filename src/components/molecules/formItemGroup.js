import React from "react";
import { ValidationError } from "@formspree/react";

const FormItemGroup = ({ id, labelText, itemType, inputType, required, name, validationPrefix, errors }) => {
  const FormElement = () => {
    switch (itemType) {
      case 'input':
        return <input id={id} type={inputType} name={name} size="40" aria-required={required} required={required}/>;
      case 'textarea':
        return <textarea id={id} name={name} cols="40" rows="10" aria-required={required} required={required}/>;
      default:
        return;
    }
  }

  return (
    <div className="[ flex flex-col items-start mt-6 ]">
      <label className="[ uppercase font-normal ]"
             htmlFor={id}>
        {labelText}
        {
          required &&
          <small className="[ lowercase ]">
            <em>
              &nbsp;(required)
            </em>
          </small>
        }
      </label>
      <FormElement/>
      {
        validationPrefix &&
        <ValidationError
          prefix={validationPrefix}
          field={name}
          errors={errors}/>
      }
    </div>
  )
}

export default FormItemGroup;