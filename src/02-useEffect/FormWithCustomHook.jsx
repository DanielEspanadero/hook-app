import { useEffect, useState } from "react";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

  const [formState, setFormState] = useState({
    username: 'Daniel',
    email: 'daniel@google.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    })
  };

  useEffect(() => {
    // console.log('useEffect called!');
  }, []);

  useEffect(() => {
    // console.log('FormState changed!');
  }, [formState]);

  useEffect(() => {
    // console.log('Email changed!');
  }, [email]);

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="daniel@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="daniel@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {
        (username === 'Daniel2') && <Message />
      }
    </>
  );
};