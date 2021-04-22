import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import LayoutMaster from "../components/layoutMaster";
import LayoutPage from "../components/layoutPage";
import { graphql } from "gatsby";

function ContactForm() {
  const [state, handleSubmit] = useForm("myylzojl");

  const FormElement = ({ id, labelText, type, inputType, required, name, validationPrefix }) => {
    const TextArea = () => {
      let el;
      if (required) {
        el = <textarea id={id} name={name} cols="40" rows="10" aria-required="true" required/>
      } else {
        el = <textarea id={id} name={name} cols="40" rows="10"/>
      }
      return el;
    }
    const Input = () => {
      let el;
      if (required) {
        el = <input id={id} type={inputType ?? 'text'} name={name} size="40" aria-required="true" required/>
      } else {
        el = <input id={id} type={inputType ?? 'text'} name={name} size="40"/>
      }
      return el;
    };
    return (
      <div className="flex flex-col items-start mt-6">
        <label className="uppercase font-normal"
               htmlFor={id}>
          {labelText}&nbsp;
          {required &&
          <small className="lowercase">
            <em>
              (required)
            </em>
          </small>
          }
        </label>
        {
          type === 'input' &&
          <Input/>
        }
        {
          type === 'textarea' &&
          <TextArea/>
        }
        <ValidationError
          prefix={validationPrefix}
          field={name}
          errors={state.errors}
        />
      </div>
    )
  }

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className="relative flex flex-col"
          onSubmit={handleSubmit}>
      <FormElement
        id="name"
        labelText="Name"
        type="input"
        required={true}
        name="name"
        validationPrefix="Name"
      />
      <FormElement
        id="email"
        labelText="Email"
        type="input"
        inputType="email"
        required={true}
        name="email"
        validationPrefix="Email"
      />
      <FormElement
        id="message"
        labelText="Message"
        type="textarea"
        name="message"
        validationPrefix="Message"
      />
      <button type="submit"
              disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

const Contact = () => {
  // const { pageHeading } = data.allWpPage.nodes[0];
  return (
    <LayoutMaster>
      <LayoutPage>
        <ContactForm/>
        {/*<form className="relative"*/}
        {/*      action="https://getform.io/f/c022f79f-5264-4d77-af54-7986e1e07b6d"*/}
        {/*      method="POST">*/}
        {/*  <div>*/}
        {/*    <label htmlFor="name">Name</label>*/}
        {/*    <input id="name" type="text" aria-required="true" required />*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <label htmlFor="_replyto">Email address</label>*/}
        {/*    <input id="_replyto" type="text" aria-required="true" required />*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <label htmlFor="message">Message</label>*/}
        {/*    <textarea id="message" cols="40" rows="10"/>*/}
        {/*  </div>*/}
        {/*  <button type="submit">Submit</button>*/}
        {/*</form>*/}
      </LayoutPage>
    </LayoutMaster>
  )
};

export const query = graphql`
query Contact {
  allWpPage(filter: {uri: {eq: "/contact/"}}) {
    nodes {
      pageHeading {
        title
        intro
      }
    }
  }
}
`

export default Contact;