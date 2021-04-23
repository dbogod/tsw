import React from "react";

const Fieldset = ({ title, type, name, description, descriptionPostScript, inputs }) => {
  if (type && name) {
    return (
      <div className="[ flex flex-col items-start mt-6 ]">
        <fieldset className="[ flex flex-col w-full ]">
          <span className="[ uppercase font-normal ]">
            {title}
          </span>
          {
            description &&
            <span>
              {description}
              {
                descriptionPostScript &&
                <small className="[ font-normal ]">
                  <em>
                    &nbsp;{descriptionPostScript}
                  </em>
                </small>
              }
            </span>
          }
          <div className="[ form-checkboxes-wrapper mt-2 ]">
            {
              inputs.map((input, index) => {
                if (input.value) {
                  return (
                    <label className="[ block flex items-center py-1 ]" key={index}>
                      <input className="[ mr-4 ]" type={type} name={name} value={input.value}/>
                      {input.label ?? input.value}
                    </label>
                  )
                }
                return false;
              })
            }
          </div>
        </fieldset>
      </div>
    )
  }

  return false;
}

export default Fieldset;