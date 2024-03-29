import { useState } from 'react';
import { signIn } from "next-auth/react";
import { useForm } from '../libs/customHooks';
import { Button, Form, Input, Message, Modal } from 'semantic-ui-react';


const UserLogin = ({ show, onClose }) => {
  const [ errors, setErrors ] = useState([]);
  
  function loginUserCallback() {
    // loginUser();
    signIn();
  }
  
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: '',
    password: '',
  })

  // const loginUser = () => {
  //   context.login(values);
  //   closeErrors();
  // }

  const closeErrors = () => {
    setErrors([]);
    onClose();
  }

  return (
    <Modal
      size="tiny"
      open={show}
      onClose={onClose}
    >
      <Modal.Header>Login to your account</Modal.Header>

      <Modal.Content>
        <Form>
          <Form.Field
            control={Input}
            label="Email"
            name="email"
            onChange={onChange}
          />
          <Form.Field
            control={Input}
            label="Password"
            name="password"
            onChange={onChange}
          />

          { errors.map( function(error, i) {
            return (
              <Message key={i} negative>
                { error.message }
              </Message>
            )
          })}
        </Form>
      </Modal.Content>

      <Modal.Actions>
        <Button negative onClick={closeErrors}>
          Back
        </Button>
        <Button positive onClick={onSubmit}>
          Login
        </Button>
      </Modal.Actions>

    </Modal>
  )
}

export default UserLogin;