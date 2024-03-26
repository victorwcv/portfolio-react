import { Formik, Field, Form } from "formik";
import "../sass/form-contact.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FormContact = ({ ref }) => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = () => {
    emailjs
      .sendForm("service_opqg6no", "template_prier1e", formRef.current, {
        publicKey: "aR70D0Q0_HB6-aLkJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
        }
      );
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        email: "",
        message: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        sendEmail(values);
      }}
    >
      <Form className="form" ref={formRef}>
        <Field
          id="firstName"
          name="firstName"
          placeholder="Name"
          autoComplete="name"
          required
        />

        <Field
          id="email"
          name="email"
          placeholder="E-mail"
          type="email"
          autoComplete="email"
          required
        />

        <Field
          as="textarea"
          rows={8}
          placeholder="Message"
          id="message"
          name="message"
          autoComplete="off"
          required
        />
        <button type="submit">Submit</button>
        {error && <p style={{ color: "red" }}>Success!</p>}
        {success && <p style={{ color: "green" }}>Success!</p>}
      </Form>
    </Formik>
  );
};

export default FormContact;
