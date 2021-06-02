import React from "react";

const Fieldset = ({ title, type, name, description, descriptionPostScript, inputs, checkedValue }) => {
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
              inputs.map((input, i) => {
                let checked;
                if (type === 'checkbox' && checkedValue) {
                  checked = checkedValue === input.value;
                }
                if (input.value) {
                  return (
                    <label
                      className="[ flex items-start py-1 ]"
                      key={i}>
                      <input
                        className="[ mt-1 mr-4 ]"
                        type={type}
                        name={name}
                        value={input.value}
                        defaultChecked={checked}/>
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