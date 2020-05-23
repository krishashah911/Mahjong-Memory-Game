import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import {
  defineUserNameAction,
  handleLoginVisibilityAction
} from "../../actions/actions";
import "./Login.css";

export const Login = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(defineUserNameAction(value));
    dispatch(handleLoginVisibilityAction(true));
  };

  return (
    <div>
      <h3>Choose a username</h3>
      <Form onSubmit={handleSubmit} className="login">
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            className="w-50 d-inline"
            required
            type="text"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="danger" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
