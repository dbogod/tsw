import React, { useState } from "react";
import { useForm } from "@formspree/react";

import FormItemGroup from "../molecules/formItemGroup";
import FormFieldset from "../molecules/formFieldset";

const ContactForm = ({ formSuccessMessage, location }) => {
  const [state, updateState] = useForm(process.env.FORMSPREE_ID_CONTACT_FORM);
  const [isHuman, updateIsHuman] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    if (!document.querySelector('#ht-terms')?.checked) {
      updateIsHuman(true);
      updateState(e);
    } else {
      updateIsHuman(false);
    }
  }

  if (state.succeeded || !isHuman) {
    return (
      <p>
        {
          formSuccessMessage ?? 'Thank you for your message. It has been sent.'
        }
      </p>
    );
  }
  return (
    <form className="[ relative flex flex-col ]"
          onSubmit={handleSubmit}>
      <FormItemGroup
        id="name"
        labelText="Name"
        itemType="input"
        inputType="text"
        required={true}
        name="name"
        validationPrefix="Name"
        errors={state.errors}/>
      <FormItemGroup
        id="email"
        labelText="Email"
        itemType="input"
        inputType="email"
        required={true}
        name="email"
        validationPrefix="Email"
        errors={state.errors}/>
      <FormFieldset
        title="Services"
        name="services"
        type="checkbox"
        description="Which service(s) are you interested in?"
        descriptionPostScript="(Tick all that apply)"
        inputs={[
          { value: 'Style, Shape and Shades' },
          { value: 'Colour Confidence' },
          { value: 'Edit My Wardrobe' },
          { value: 'Personal Shopping' },
          { value: 'The Full Works' },
          { value: 'Style Socials' }
        ]}
        checkedValue={location?.state?.serviceTitle}/>
      <FormItemGroup
        id="message"
        labelText="Message"
        itemType="textarea"
        name="message"
        validationPrefix="Message"
        errors={state.errors}/>

      {/* Honey pot */}
      <label className="[ hidden ]">
        <input id="ht-terms" name="ht-terms" type="checkbox"/>
        I accept the T & Cs
      </label>

      <button
        className="[ cta cta--secondary ]"
        type="submit"
        disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
